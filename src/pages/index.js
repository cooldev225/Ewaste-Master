import React from "react"
import Layout from "../components/layout"
import Banner from "../components/banner"
import truck from "../images/truck-icon.png"
import drive from "../images/drive.png"
import dollar from "../images/dollar.png"
import recycleIcon from "../images/recycle-icon.png"
import { Link } from "gatsby"

const IndexPage = () => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return (
    <Layout>
      <div className="landing">
        <Banner/>
        <div className="section steps">
          <div className="container">
            <p className="title">Why Choose Us ?</p>
            <div className="row">
              <div className="col-lg-3">
                <div className="person">
                   <span className="icon">
                 {/* <i className="ion-android-car"></i>*/}
                     <img src={truck} className="truck"/>
                </span>
                  <div className="details">
                    <p className="name">Hassle Free Pick Up</p>
                    {/* <p className="role">Operation Head</p> */}
                    <p className="text">
                      All logistics are managed through our vehicle fleet and
                      channel partners at a time convenient for you, for on time pick up of your obsolete or
                      unrepairable appliances which are delivered to appropriate
                      recycling facilities
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="person">
                   <span className="icon">
                  {/*<i className="ion-android-laptop"></i>*/}
                     <img src={drive}/>
                </span>
                  <div className="details">
                    <p className="name">
                      Secure & Confidential Data Destruction
                    </p>
                    {/* <p className="role">Operation Head</p> */}
                    <p className="text">
                      We offer a fully certified data destruction service
                      compliant with Australian Defense data privacy standards
                      and Australian data breach laws. Assets are documented and
                      Certificate of Data Destruction issued to guarantee all
                      hard drive data is eradicated.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="person">
                  <span className="icon">
                    <img src={recycleIcon}/>
                    {/*<i className="ion-android-globe"></i>*/}
                </span>
                  <div className="details">
                    <p className="name">Eco-Friendly Recycling</p>
                    {/* <p className="role">Operation Head</p> */}
                    <p className="text">
                      We aim to reduce hazardous and toxic byproducts of e-waste
                      and strive for a greener environment by making sure your
                      electronic equipment doesn’t end up in the landfill. We
                      provide a circular economy through repurposing and e-waste
                      diversion.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="person">
            <span className="icon">
              <img src={dollar}/>
              {/* <i className="ion-android-bulb"></i>*/}
                </span>
                  <div className="details">
                    <p className="name">FREE Collection Service !</p>
                    {/* <p className="role">Operation Head</p> */}
                    <p className="text">
                      In most circumstances we are able to offer collection
                      and/or data destruction services absolutely FREE ! These
                      services are offered on a case by case basis and rely
                      largely on a number of additional criteria which help us
                      recoup costs and minimise labour time. {" "}
                      <Link to="/pricing">See Pricing page</Link> to find out more.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default IndexPage
