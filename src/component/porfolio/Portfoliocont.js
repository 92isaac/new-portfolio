import React from "react";
import { Link } from "react-router-dom";
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
            {/* <div className="portfolio-item">
              <img
                src="images/Movie Search - App - Google Chrome 12_25_2021 4_32_07 PM.png"
                alt=""
              />
              <p className="portfolio-title">Movie Search App</p>
              <p className="portfolio-desc">
                An app designed to search for movie of any type be it old or new
                throught the aid of API
              </p>
              <Link to="https://92isaac.github.io/Movie-app/" target="blank">
                &rarr; View Project
              </Link>
            </div> */}
            {/* <div className="portfolio-item">
              <img
                src="images/React App - Google Chrome 8_9_2022 4_01_31 AM.png"
                alt=""
              />
              <p className="portfolio-title">LASOP</p>
              <p className="portfolio-desc">
                Lagos school of programmming official website
              </p>
              <Link to="https://lasop.net/" target="blank">
                &rarr; View Project
              </Link>
            </div> */}
            {/* <div className="portfolio-item">
              <img
                src="images/React App - Google Chrome 12_21_2021 2_19_12 PM.png"
                alt=""
              />
              <p className="portfolio-title">Login UI Project</p>
              <p className="portfolio-desc">
                Login UI of a customer relation management project created with
                react. This project is still inprogress.
              </p>
              <Link to="#">&rarr; View Project</Link>
            </div> */}
            {/* <div className="portfolio-item">
              <img
                src="images/React App - Google Chrome 8_9_2022 3_47_28 AM.png"
                alt=""
              />
              <p className="portfolio-title">Countdown Timer</p>
              <p className="portfolio-desc">A count down timer app</p>
              <Link
                to="https://webinarcountdowntimer.netlify.app/"
                target="blank"
              >
                &rarr; View Project
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfoliocont;
