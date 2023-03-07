import "./App.css";
import { FaTiktok } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import priceList from "../src/assets/naels-price.jpeg";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <div className="container">
        <div>
          <div className="wrapper">
            <div className="logo">naels</div>
            <div>your nails soulmate</div>
          </div>

          <div className="menus">
            <div
              className="item"
              onClick={() => window.open("https://wa.me/87703032019?text=")}
            >
              Book Appointment
            </div>
            <div className="item" onClick={() => setIsOpen(true)}>
              Price List
            </div>
            <div
              className="item"
              onClick={() =>
                window.open(
                  "https://www.google.com/maps/place/Jl.+Pal+Batu+1+No.39,+RT.4%2FRW.4,+Menteng+Dalam,+Kec.+Tebet,+Kota+Jakarta+Selatan,+Daerah+Khusus+Ibukota+Jakarta+12870/@-6.227765,106.8443363,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69f3921748e01d:0x54c60c14d125da02!8m2!3d-6.227765!4d106.846525!16s%2Fg%2F11csgfb3y_",
                  "_blank"
                )
              }
            >
              Location
            </div>
          </div>

          <div className="social">
            <FaTiktok
              size={30}
              onClick={() =>
                window.open("https://www.tiktok.com/@naelsmates", "_blank")
              }
            />
            <SiGmail
              size={30}
              onClick={() => window.open("mailto:naelsmates@gmail.com")}
            />
          </div>
        </div>

        <div className="footer">
          <text>life is to short, to wear a boring nails</text>
        </div>
      </div>

      {isOpen && (
        <div className="modal" onClick={() => setIsOpen(false)}>
          <img src={priceList} alt="price-list" width={"80%"} />
        </div>
      )}
    </div>
  );
}

export default App;
