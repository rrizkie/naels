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

  const branch = [
    {
      name: "Tebet",
      phone: "6285183673980",
      // phone: "6281809871183",
      loc: "https://www.google.com/maps/place/Jl.+Pal+Batu+1+No.39,+RT.4%2FRW.4,+Menteng+Dalam,+Kec.+Tebet,+Kota+Jakarta+Selatan,+Daerah+Khusus+Ibukota+Jakarta+12870/@-6.227765,106.8443363,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69f3921748e01d:0x54c60c14d125da02!8m2!3d-6.227765!4d106.846525!16s%2Fg%2F11csgfb3y_",
    },
    {
      name: "Condet",
      phone: "6282210976868",
      loc: "https://maps.app.goo.gl/NSuoxSJMWywczt8TA?g_st=com.google.maps.preview.copy",
    },
    {
      name: "Pasar Santa",
      // phone: "6287795116456",
      phone: "6287777282979",
      loc: "https://maps.app.goo.gl/io7izM4dZWSWKnfm8",
    },
    {
      name: "Benhil",
      phone: "6285720810092",
      loc: "https://maps.app.goo.gl/NWEcNaqHqFFfFv3w7?g_st=ic",
    },
    {
      name: "Depok",
      phone: "6285121102956",
      loc: "https://maps.app.goo.gl/QMxF3d2MEBzrzTGt8?g_st=ic",
    },
    {
      name: "Bekasi",
      phone: "6281917639594",
      loc: "https://maps.app.goo.gl/jH6AvieSjj2zxLHS9?g_st=iw",
    },
    {
      name: "Cibubur",
      phone: "628179075816",
      loc: "https://g.co/kgs/bcfxDr5",
    },
  ];

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
                {branch.map((el, i) => (
                  <div
                    key={i}
                    className="options"
                    onClick={() => {
                      va.track("Book Appointment", { branch: el.name });
                      // window.open("https://wa.me/6287703032019?text=");
                      window.open(`https://api.whatsapp.com/send/?phone=${el.phone}`);
                    }}
                  >
                    {el.name}
                  </div>
                ))}
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
                {branch.map((el, i) => (
                  <div
                    key={i}
                    className="options"
                    onClick={() => {
                      va.track("Book Appointment", { branch: el.name });
                      window.open(el.loc, "_blank");
                    }}
                  >
                    {el.name}
                  </div>
                ))}
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
