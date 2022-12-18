import React from "react";
import { Link } from "react-router-dom";
import '../../asset/styles/potfolio.css'

const Portfoliocont = () => {
  return (
    <div class="content-all">
      {/* <!-- CONTENT PORTFOLIO --> */}
      <div class="content content-portfolio" id="portfolio">
        <div class="content-header">
          <h2>
            <span>My</span> PortFolio
          </h2>
        </div>
        <div class="content-details">
          <div class="portfolio">
            <div class="portfolio-item">
              <img
                src="images/Weather App - Google Chrome 12_25_2021 4_36_37 PM.png"
                alt=""
              />
              <p class="portfolio-title">Weather App</p>
              <p class="portfolio-desc">
                A app designed with html, css, JavaScript and API call
              </p>
              <Link to="https://92isaac.github.io/weather-app/" target="blank">
                &rarr; View Project
              </Link>
            </div>
            <div class="portfolio-item">
              <img
                src="images/Movie Search - App - Google Chrome 12_25_2021 4_32_07 PM.png"
                alt=""
              />
              <p class="portfolio-title">Movie Search App</p>
              <p class="portfolio-desc">
                An app designed to search for movie of any type be it old or new
                throught the aid of API
              </p>
              <Link to="https://92isaac.github.io/Movie-app/" target="blank">
                &rarr; View Project
              </Link>
            </div>
            <div class="portfolio-item">
              <img
                src="images/React App - Google Chrome 8_9_2022 4_01_31 AM.png"
                alt=""
              />
              <p class="portfolio-title">LASOP</p>
              <p class="portfolio-desc">
                Lagos school of programmming official website
              </p>
              <Link to="https://lasop.net/" target="blank">
                &rarr; View Project
              </Link>
            </div>
            <div class="portfolio-item">
              <img
                src="images/React App - Google Chrome 12_21_2021 2_19_12 PM.png"
                alt=""
              />
              <p class="portfolio-title">Login UI Project</p>
              <p class="portfolio-desc">
                Login UI of a customer relation management project created with
                react. This project is still inprogress.
              </p>
              <Link to="#">&rarr; View Project</Link>
            </div>
            <div class="portfolio-item">
              <img
                src="images/React App - Google Chrome 8_9_2022 3_47_28 AM.png"
                alt=""
              />
              <p class="portfolio-title">Countdown Timer</p>
              <p class="portfolio-desc">A count down timer app</p>
              <Link
                to="https://webinarcountdowntimer.netlify.app/"
                target="blank"
              >
                &rarr; View Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfoliocont;
