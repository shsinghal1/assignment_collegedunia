import React, { useState, useEffect } from 'react';
import './card.css';
// import college_02 from '../images/college_02.png';
import college from './college_02.jpg';

function College() {
  const [jdata, setData] = useState([]);

  useEffect(() => {
    fetchData();
  },[]);

const fetchData = async () => {
     const res = await fetch('Data.json',
        {
            Headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
      );
      const response = await res.json();
    //   console.log(response.colleges);
     
      setData(response.colleges);
    
}

  return (
    <>
    <h2 className="heading">Colleges In North India</h2>
        <div className="grid_conntainer">
           {
               jdata.map((elem, index) => {
                    return(

                        <div  key={index} >
                        <div className="card" style={{width: "40rem"}}>
                            <div className="promoted"><div className="triangle"></div><div className="promo">PROMOTED</div></div>
                            <div className="rate">
                                <div className="rating"><span className="rating_bold">{elem.rating}</span>/5</div>
                                <div className="remark">{elem.rating_remarks}</div>
                            </div>
                            <img src={college} className="card-img-top" alt="..." />
                            <div className="innerText">
                            <div className="text_1">
                                {elem.tags[0]}
                            </div>
                            <div className="text_2">{elem.tags[1]}</div>
                            <div className="text_3">#{elem.ranking}</div>
                            </div>
                            <div className="card-body">
                            <div className="body">
                                <div className="left">
                                    <h3 className="clg_name">{elem.college_name } ★★★★☆	</h3>
                                    <p><span className="nearest_place">{elem.nearest_place[0]}</span> | <span>{elem.nearest_place[1]}</span></p>
                                  <p>  <span className="diff_colo">93% MATCH : </span> <span>{ elem.famous_nearest_places}</span></p>
                                    <p className="login">{elem.offertext}</p>
                                </div>

                                <div className="right">
                                    <p className="fees"><span className="discount">•{ elem.discount}</span><div className="pointed"></div><strike>₹{elem.original_fees}</strike> </p>
                                    <h4 className="discounted_fees">₹{elem.discounted_fees}</h4>
                                    <small className="fee_cycle">{elem.fees_cycle}</small>
                                    <h4 className="amenity">{elem.amenties[0]} • {elem.amenties[1]}</h4>
                                </div>

                            </div> 
                               
                            </div>
                           
                        </div>
                        </div>
                        
                    )
               })
           }
       </div>
         
               
     
      
    </>
  );
}

export default College;
