import React from "react"
import Form from "./form"
import { phoneNumber } from "../config"
import { Link } from "gatsby"
import etrash from "../images/ETRASH.png"

const Banner = () => (
  <section id="banner" className="banner">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6 content-column">
          <div className="banner-content">
            <p className="title">
              Safe, Secure & Eco-Friendly E-Waste Disposal Solutions Starting
              From
              <span className="green-text"> $0* </span>
              <Link to="/pricing">
                See Pricing
              </Link>
            </p>
            <div className="call">
              <a href={`tel:${phoneNumber}`}>
                <span className="icon">
                  <i className="ion-android-call"></i>
                </span>
              </a>
              <a href={`tel:${phoneNumber}`}>
                <img src={etrash} className="call-badge"/>
                {/*<span className="call-badge">
                  <span className="initials">1300</span>
                  <span className="label">
                    <span className="tag">ETRASH</span>
                     <span className="ends">387274</span>
                  </span>
                </span>*/}
              </a>
              {/* <Link to="/pricing">
                <i className="ion-android-arrow-forward arrow"></i> Pricing
              </Link>*/}
            </div>
          </div>
        </div>
        <div className="col-lg-6 text-center">
          <div className="banner-form">
            <Form/>
          </div>
        </div>
      </div>
    </div>
    {/*<div className="scroll">
      <a><span></span></a>
    </div>*/}
  </section>
)

export default Banner
