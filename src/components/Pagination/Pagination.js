import React from 'react';
import ReactPaginate from 'react-paginate';
import { useEffect,useState } from 'react';


const Pagination = ({ pageNumber ,setPageNumber,info }) => {
 
  let [pageWidth,setPageWidth] =useState(window.innerWidth)

  let updateDimension=()=>{
    setPageWidth(window.innerWidth)
  }
  useEffect(()=>{
window.addEventListener("resize",updateDimension)
return ()=> window.removeEventListener("resize",updateDimension)
  },[])
  return (<>
<style jsx>
{`

    @media(max-width: 768px){
      .next,.prev {
          display: none;
      }
      .pagination{
        font-size:14px
      }
      
          }
 
`}
</style>
 <ReactPaginate 
 className='pagination justify-content-center gap-4 my-4 '
 forcePage={pageNumber === 1? 0:pageNumber-1}

 nextLabel="Next " 
  previousLabel="Prev"
  nextClassName="btn btn-light text-dark next "
  previousClassName="btn btn-light  prev "
 
 pageClassName="page-item "
 pageLinkClassName="page-link"

 marginPagesDisplayed={pageWidth < 576 ? 1: 2}
 
 pageRangeDisplaye={pageWidth < 576 ? 1: 2}
 

 activeClassName="active"
 onPageChange={(data)=>{
 setPageNumber(data.selected+1);
  
  }}
 pageCount	={info?.pages}/>

 </>
 )  

}
export default Pagination