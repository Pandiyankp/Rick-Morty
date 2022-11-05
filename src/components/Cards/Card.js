import React from "react";
import  styles from '../Cards/Cards.module.scss'
import { Link } from 'react-router-dom';

const Card = ({ results,page }) => {
  let display;
  if (results) {
    display = results.map((x) => {
      let { id, name, image,location,status} = x;
      return (
        <Link to={`${page} ${id}`} style={{textDecoration:"none" }}
        
        key={id} className="col-lg-4 col-md-6 col-12 position-relative mb-4 text-dark" >
          <div className={`${ styles.cards} d-flex justify-content-center flex-column`}>
              <img src={image} alt="" className="img-fluid" />
              <div className="content" style={{padding: "10px"}}>
                <div className="fs-4 fw-bold mb-4">{name} </div>

                <div className="">
                <div className="fs-6 fw-semibold">Last location</div>
                <div className="fs-5">{location.name}</div>
                </div>
              </div>
            
          </div>
          {(()=>{
            if (status=== "Dead") {
              return( <div className={`${styles.badge} badge bg-danger position-absolute`}>{status}
            
        </div>)
            } else if (status=== "Alive"){
              return( <div className={`${styles.badge} badge bg-success position-absolute`}>{status}
            
        </div>)
            }else{
              return( <div className={`${styles.badge} badge bg-secondary position-absolute`}>{status}
            
              </div>)
            }
          })()}

          
       
        </Link>
      );
    });
  } else {
    display =<>
     <h1 className="text-center text-danger">Nochartacter found....!</h1> 
    
    
    </>
  }

  return <>{display}</>;
};

export default Card;
