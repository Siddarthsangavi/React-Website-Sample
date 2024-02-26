import React from "react";
import "./index.css";

function App() {
  return (
    <div className="container">
      <div className="logo-container">
        <img src="logo.png" alt="Logo" className="logo" />
      </div>
      <div className="content">
        <div className="left">
          <img src="1.png" alt="Image 1" className="image1" />
        </div>
        <div className="right">
          <p>
            {" "}
            <b>
              C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
              the 4th time.
            </b>
            <li>
              C.R.I.'s energy efficient products are well recognized by various
              Government Institutions, as trustworthy products for various
              projects across the globe to save energy.
            </li>
            <li>
              C.R.I. is the highest contributor in the country for the projects
              of EESL (Energy Efficiency Services Limited) to replace the old
              inefficient pumps with 5 Star rated energy efficient smart pumps
              with IoT enabled control panel.{" "}
            </li>
          </p>
          <img src="2.png" alt="Image 2" className="image2" />
          <p>
            Government of India has awarded the{" "}
            <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj,
            Joint Managing Director of C.R.I. Group received the award from Smt.
            Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh,
            Honorable Minister of State.
          </p>
        </div>
      </div>
      <p>
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION.
      </p>
      <img src="3.png" alt="Image 3" className="image3" />
      <p>
        Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
        Solar Systems - Motors{" "}
      </p>
      <hr className="line" />
      <p>
        <b>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</b>
      </p>
      <p className="centered">
        CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA SUGARS &
        DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING FOOD &
        BEVERAGE PETROCHEMICAL & REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING
        AGRICULTURE & RESIDENTIAL
      </p>
      <div className="footer">
        <div className="footer-links">
          <a href="#" className="left-link">
            Tool free
          </a>
          <a href="#" className="center-link">
            222.facebook.com/cripumps
          </a>
          <a href="#" className="right-link">
            www.crigroups.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
