import React, { useEffect, useState } from 'react'
import { Branches } from './Data'
import { India } from './Icons'

const IndiaMap = () => {

  const [mapState, setmapState] = useState("Madhya Pradesh")

  useEffect(() => {
    const getmap = document.getElementById("indiamap");
    const path = getmap.getElementsByTagName("path"); 
    let maptitle;
    var getactive = getmap.getElementsByClassName("active")[0];


    for (let index4 = 0; index4 < path.length; index4++) {
      const element4 = path[index4];
      element4.addEventListener("click", function () {
        for (let index6 = 0; index6 < path.length; index6++) {
          path[index6].classList.remove("active");
        }
        this.classList.add("active"); 
        maptitle = this.getElementsByTagName("title")[0].innerHTML;
        console.log("maptitle use", maptitle)
        
        setmapState(maptitle);
      });
    }
    



  }, [mapState]);


  return (
    <>
    
        <div className="row">
            <div className="col-sm-6 d-flex align-items-center">
              <div className="row justify-content-sm-start justify-content-center">
                <div className="state-image-holder col-11">
                  {Branches.map((value, index) => (
                    // console.log(mapActive , value.title),
                    mapState === value.title ? 
                    <div className="img-holder w-100" key={index}>
                      <img src={value.image} alt="" className="object-fit-contain" />
                    </div> : " "
                  ))} 
                </div>
                <div className="col-auto">
                  <div className="row flex-column h-100 align-items-stretch state-image-line">
                    {Branches.map((value, index) => (
                      <div className={`col line ${mapState === value.title? "active": ""}`} key={index}>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-12">
                {Branches.map((value, index) => (
                    mapState === value.title ? 
                      <h3 className='my-4 text-sm-start text-center'>{value.title}</h3>
                     : " "
                  ))}
                </div>
              </div> 
            </div>
            <div className="col-sm-6">
                <India id="indiamap" className='img-fluid w-100'/>
            </div>
        </div>
    </>
  )
}

export default IndiaMap