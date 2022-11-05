import React from "react";
import { Card } from "../components/Import";
import { useState, useEffect } from "react";
import InputGroup from "../components/Filter/category/InputGroup";

const Location = () => {
  let [id, setId] = useState(1);
  let [info, setInfo] = useState([]);
  let [results, setResults] = useState([]);

  let { name, type, dimension, residents } = info;
  let api = `https://rickandmortyapi.com/api/location/${id}`;

  useEffect(() => {
    (async () => {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);
      let a = await Promise.all(
        data.residents.map((item) => {
          return fetch(item).then((res) => res.json());
        })
      );
      setResults(a);
    })();
  }, [api]);

  return (
    <div className="container">
      <div className="row mb-5">
        <h1 className="text-center mb-3">
          Location :
          <span className="text-primary">
            {" "}
            {name === "" ? "Unknown" : name}
          </span>
        </h1>
        <h5 className="text-center">
          Dimension : {dimension === "" ? "Unknown" : dimension}
        </h5>
        <h6 className="text-center">Type : {type === "" ? "Unknown" : type}</h6>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12">
          <h4 className="text-center mb-4 fw-bold">Pick Location</h4>
          <InputGroup setId={setId} name="Location" total={126} />
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            <Card page="/location/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
