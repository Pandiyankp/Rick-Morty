import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { Card, Filter, Navbar, Pagination, Search } from "./components/Import";
import { BrowserRouter as Router , Routes,Route} from 'react-router-dom';
import Episodes from "./pages/Episodes";
import Location from "./pages/Location";
import CardDetails from './components/Cards/CardDetails';

const App=()=>{
  return(
<>

<Router>
  <div className="App">
            <Navbar/>

  </div>
  <Routes>
    <Route path="/" element={<Home/>}/>

    <Route path="/:id" element={<CardDetails/>}/>


    <Route path="/episodes" element={<Episodes/>}/>
    <Route path="/episodes/:id" element={<CardDetails/>}/>

    <Route path="/location" element={<Location/>}/>
    <Route path="/location/:id" element={<CardDetails/>}/>
    <Route path="/*" element={<Error/>}/>


  </Routes>
</Router>
</>

  )
}

const Error=()=>{
<h1 className="text-Danger d-flex  align-items-cente">
Error Page...
</h1>
}

const Home = () => {

let [pageNumber, setPageNumber] =useState(1);

let [search ,setSearch] = useState("");

let [status,setStatus] =useState("");

let [gender,setGender] =useState("");

let [species,setSpecies] =useState("");


let [fetchedData,updateFetchedData ] =useState([]);
let {info,results} = fetchedData;

let api =`https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

useEffect(() => {
  
(async ()=>{
let data = await fetch(api).then((res)=>res.json());
updateFetchedData(data)

})();

}, [api]);


  return (
    <>
      <div className="App">
        <h1 className="text-center mb-3"> Characters</h1>
        <Search setSearch={setSearch} setPageNumber={setPageNumber} />

        <div className="container">
          <div className="row">  
                    <Filter  
                    setSpecies={setSpecies}
                    setStatus={setStatus} 
                    setPageNumber={setPageNumber} 
                    setGender={setGender}/>


            <div className="col-lg-8 col-12">
<div className="row">
    
    <Card page="/"  results={results}/>

  
</div>

            </div>
          </div>
        </div>
        <Pagination info={info} setPageNumber={setPageNumber} pageNumber={pageNumber}/>
      </div>
    </>
  );
};

export default App;
