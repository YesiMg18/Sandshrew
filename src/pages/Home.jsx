import React, { Component } from "react";
import "../styles/Home.scss";
import getBoot from "../common/boot";
import Logo from "../assets/images/logo.png";
import Beach from "../assets/images/img-place1.png";
import Sidney from "../assets/images/img-place2.png";
import Londres from "../assets/images/img-place3.png";
import Berlin from "../assets/images/img-place4.png";
import Paris from "../assets/images/img-place5.png";
import Venecia from "../assets/images/img-place6.png";
import DevicesImage from "../assets/images/dispositivos.png";
import ListOffers from "../assets/images/icon-list2.png";
import PromoIcon from "../assets/images/promotion1.png";
import NewsIcon from "../assets/images/promotion2.png";
import InstaIcon from "../assets/images/icon-ig.png";
import FaceIcon from "../assets/images/icon-fb.png";
import WhatsIcon from "../assets/images/icon-wa.png";
import MenuIcon from "../assets/images/menu.png";
import LanguageIcon from "../assets/images/icon-idioma.png";
import Illustration from "../assets/images/ilustration.png";
import CalendarIcon from "../assets/images/icon-calendar.png";
import ListIcon from "../assets/images/icon-list.png";
import InfoIcon from "../assets/images/icon-info.png";
import PercentIcon from "../assets/images/icon-percent.png";
import CloseMenu from "../assets/images/close-menu.png";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boot: getBoot()[localStorage.getItem("lang")]
    };
  }

  showMenu = () => {
    let bloque = document.getElementById("menu");
    if (bloque.style.display === "none" || bloque.style.display === "") {
      bloque.style.display = "block";
    } else {
      bloque.style.display = "none";
    }
  };

  render() {
    return (
      <>
        <header>
          <div className="fixedContainer">
            <nav>
              <img className="logo" src={Logo} alt="Logo Volindo" />
              <div className="buttonContainer">
                <a>Log in</a>
                <a href="#contactus">Contact us</a>
                <a>
                  <img src={LanguageIcon} alt="Icon Language" />
                  <select name="lang" id="lang">
                    <option value="es">ES</option>
                    <option value="en">EN</option>
                  </select>
                </a>
              </div>
              <div className="buttonMenu">
                <button onClick={e => this.showMenu()}>
                  <img src={MenuIcon} alt="Menu Icon" />
                </button>
              </div>
            </nav>
            <div className="headerContainer">
              <div className="titleHeader">
                <h2>Make your travel</h2>
                <h2>memoriable</h2>
                <button>View More</button>
              </div>
              <div className="imageHeader">
                <img src={Illustration} alt="Illustration Header" />
              </div>
            </div>
          </div>
        </header>
        <div id="menu" className="menuResponsive">
          <button className="closeMenu" onClick={e => this.showMenu()}>
            <img src={CloseMenu} alt="Close Icon" />
          </button>
          <ul>
            <img className="logoMenu" src={Logo} alt="Logo Volindo" />

            <li>
              <button className="logIn">Log in</button>
            </li>
            <li>
              <button className="contactUs">Contact us</button>
            </li>
            <li>
              <button className="language">
                <img src={LanguageIcon} alt="Icon Language" />
                <select name="lang" id="lang">
                  <option value="es">ES</option>
                  <option value="en">EN</option>
                </select>
              </button>
            </li>
          </ul>
        </div>
        <section className="aboutUs">
          <div className="fixedContainer">
            <div className="title">
              <h2>Lorem Ipsum</h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
              tincidunt ante. Morbi magna augue, blandit nec laoreet eu,
              porttitor vel ipsum. Donec a risus et sapien varius faucibus.
              Etiam sollicitudin ultrices mauris sit amet tempor. Maecenas at
              elit nec odio maximus porta. Mauris at vulputate nisi, quis ornare
              nisl. Maecenas molestie id ante eget lobortis.
            </p>
          </div>
        </section>
        <section className="features">
          <div className="fixedContainer">
            <div className="benefitsBoxes">
              <article>
                <img src={CalendarIcon} alt="Calendar Icon" />
                <h4>Lorem ipsum</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  a tincidunt ante. Morbi magna augue, blandit nec laoreet eu,
                  porttitor vel ipsum.
                </p>
              </article>
              <article>
                <img src={ListIcon} alt="List Icon" />
                <h4>Lorem ipsum</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  a tincidunt ante. Morbi magna augue, blandit nec laoreet eu,
                  porttitor vel ipsum.
                </p>
              </article>
              <article>
                <img src={PercentIcon} alt="Percent Icon" />
                <h4>Lorem ipsum</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  a tincidunt ante. Morbi magna augue, blandit nec laoreet eu,
                  porttitor vel ipsum.
                </p>
              </article>
              <article>
                <img src={InfoIcon} alt="Info Icon" />
                <h4>Lorem ipsum</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  a tincidunt ante. Morbi magna augue, blandit nec laoreet eu,
                  porttitor vel ipsum.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="computers">
          <div className="imageContainer">
            <img src={Beach} alt="Beach" />
            <img src={Sidney} alt="Sidney" />
            <img src={Londres} alt="Londres" />
            <img src={Berlin} alt="Berlin" />
            <img src={Paris} alt="Paris" />
            <img src={Venecia} alt="Venecia" />
          </div>
          <div className="slideDevices">
            <div className="fixedContainer">
              <div className="computerContainer">
                <div className="descriptionDevices">
                  <h2>Lorem Ipsum</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis a tincidunt ante. Morbi magna augue, blandit nec
                    laoreet eu, porttitor vel ipsum. Donec a risus et sapien
                    varius faucibus. Etiam sollicitudin ultrices mauris sit amet
                    tempor.
                  </p>
                  <button>View More</button>
                </div>

                <div className="imageDevices">
                  <img src={DevicesImage} alt="Devices" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="offers">
          <div className="fixedContainer">
            <div className="offersSection">
              <div className="offersContainer">
                <article className="promoBox">
                  <div>
                    <img src={PromoIcon} alt="Promo Icon" />
                  </div>
                  <div className="textPromo">
                    <p>Offers and discounts</p> <p>in hotels and excursions</p>
                    <button>SEE MORE</button>
                  </div>
                </article>
                <article className="newsBox">
                  <div>
                    <img src={NewsIcon} alt="Promo Icon" />
                  </div>
                  <div className="textNews">
                    <p>Kwon the weekly</p>
                    <button>SUSCRIBE</button>
                  </div>
                </article>
              </div>
              <div className="listOffers">
                <h2>Lorem Ipsum</h2>
                <ul>
                  <li>
                    <img src={ListOffers} alt="List Offers" />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis a tincidunt ante.
                    </p>
                  </li>
                  <li>
                    <img src={ListOffers} alt="List Offers" />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis a tincidunt ante.
                    </p>
                  </li>
                  <li>
                    <img src={ListOffers} alt="List Offers" />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis a tincidunt ante.
                    </p>
                  </li>
                  <li>
                    <img src={ListOffers} alt="List Offers" />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis a tincidunt ante.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section name="contactus" id="contactus" className="contact">
          <div className="formContainer">
            <h2>ANY DOUBTS CONTACT US</h2>
            <form action="">
              <article>
                <label>Name:</label>
                <input type="text" />
              </article>
              <article>
                <label>Email:</label>
                <input type="text" />
              </article>
              <article>
                <label>Phone Number:</label>
                <input type="text" />
              </article>
              <article className="checkbox">
                <input type="radio" name="" id="" />
                <p>I accept the Privacy Policy</p>
              </article>
              <span>
                <button>SUBMIT</button>
              </span>
            </form>
          </div>
        </section>
        <footer>
          <div className="logoFooter">
            <img src={Logo} alt="Logo Footer" />
            <p>Volindo © Copyright 2020</p>
          </div>

          <div className="socialMedia">
            <p> Aviso de Privacidad</p>
            <img src={InstaIcon} alt="Instagram" />
            <img src={FaceIcon} alt="Facebook" />
            <img src={WhatsIcon} alt="WhatsApp" />
          </div>
        </footer>
      </>
    );
  }
}
