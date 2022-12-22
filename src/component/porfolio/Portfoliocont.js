import React from "react";
import '../../asset/styles/potfolio.css'
import { profileList } from "../../data/dataList";
import Portfolioprops from "./Portfolioprops";

const Portfoliocont = () => {
  return (
    <div className="content-all">
      {/* <!-- CONTENT PORTFOLIO --> */}
      <div className="content content-portfolio" id="portfolio">
        <div className="content-header">
          <h2>
            <span>My</span> PortFolio
          </h2>
        </div>
        <div className="content-details">
          <div className="portfolio">
            {profileList.map((port)=>(<Portfolioprops 
            key={port.img}
            desc={port.portDesc}
            img={port.img}
            link={port.link}
            />))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfoliocont;
