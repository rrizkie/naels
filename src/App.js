import "./App.css";
import { FaTiktok } from "react-icons/fa";
// import { SiGmail } from "react-icons/si";
// import { BsInstagram } from "react-icons/bs";
import priceList from "../src/assets/naels-price.png";
import priceList2 from "../src/assets/naels-price-2.png";
import logo from "../src/assets/naels-logo.png";
import { useState } from "react";
import va from "@vercel/analytics";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const [isBookOptionOpen, setIsBookOptionOpen] = useState(false);
  const [isLocationOptionOpen, setIsLocationOptionOpen] = useState(false);

  return (
    <div className="App">
      <div className="container">
        <div>
          <div className="wrapper">
            {/* <div className="logo">naels</div> */}
            <img src={logo} alt="naels-mates" width={"70%"} />
            <div style={{ marginTop: "10px" }}>your nails soulmate</div>
          </div>

          <div className="menus">
            <div
              className="item"
              onClick={() => setIsBookOptionOpen(!isBookOptionOpen)}
            >
              Book Appointment
            </div>
            {isBookOptionOpen && (
              <div className="optionsWrapper">
                <div
                  className="options"
                  onClick={() => {
                    va.track("Book Appointment", { branch: "Tebet" });
                    window.open("https://wa.me/6287703032019?text=");
                  }}
                >
                  Tebet
                </div>
                <div
                  className="options"
                  onClick={() => {
                    va.track("Book Appointment", { branch: "Lubang Buaya" });
                    window.open("https://wa.me/6282226661794?text=");
                  }}
                >
                  Lubang Buaya
                </div>
              </div>
            )}
            <div
              className="item"
              onClick={() => {
                va.track("Price List");
                setIsOpen(true);
              }}
            >
              Price List
            </div>
            <div
              className="item"
              onClick={() => setIsLocationOptionOpen(!isLocationOptionOpen)}
            >
              Location
            </div>
            {isLocationOptionOpen && (
              <div className="optionsWrapper">
                <div
                  className="options"
                  onClick={() => {
                    va.track("Direction", { branch: "Tebet" });
                    window.open(
                      "https://www.google.com/maps/place/Jl.+Pal+Batu+1+No.39,+RT.4%2FRW.4,+Menteng+Dalam,+Kec.+Tebet,+Kota+Jakarta+Selatan,+Daerah+Khusus+Ibukota+Jakarta+12870/@-6.227765,106.8443363,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69f3921748e01d:0x54c60c14d125da02!8m2!3d-6.227765!4d106.846525!16s%2Fg%2F11csgfb3y_",
                      "_blank"
                    );
                  }}
                >
                  Tebet
                </div>
                <div
                  className="options"
                  onClick={() => {
                    va.track("Direction", { branch: "Lubang Buaya" });
                    window.open(
                      "https://goo.gl/maps/meM2ke5exg8W5Cnp6",
                      "_blank"
                    );
                  }}
                >
                  Lubang Buaya
                </div>
              </div>
            )}
          </div>

          <div className="social">
            <FaTiktok
              color="black"
              size={30}
              onClick={() => {
                va.track("Social Media", { platform: "Tiktok" });
                window.open("https://www.tiktok.com/@naelsmates", "_blank");
              }}
            />
            {/* <SiGmail
              color="black"
              size={30}
              onClick={() => window.open("mailto:naelsmates@gmail.com")}
            />
  
            <BsInstagram
              color="black"
              size={30}
              onClick={() =>
                window.open("https://www.instagram.com/naelsmates__/")
              }
            /> */}
          </div>
        </div>

        {/* <div className="footer">
          <text>life is too short for boring nails</text>
        </div> */}
      </div>

      {isOpen && (
        <div className="modal" onClick={() => setIsOpen(false)}>
          <img src={priceList} alt="price-list" width={"100%"} />
          <img src={priceList2} alt="price-list-2" width={"100%"} />
        </div>
      )}
    </div>
  );
}

export default App;
