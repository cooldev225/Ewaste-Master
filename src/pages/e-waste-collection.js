import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import image from "../images/bg.jpg"
import bucket from "../images/bucket.jpg"
import drive from "../images/hard-disk_s.jpg"
import ModalTrigger from "../components/modal-trigger"
import Form from "../components/form"

const WastePage = () => (
  <Layout>
    <section id="about" className="section general-page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8  text-center">
            <div className="page-heading">
              <h2 className="display-4">E-Waste Collection</h2>
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <Link to={"/"}>Home </Link>
                </li>
                <li className="list-inline-item">
                  <a>/</a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="text-muted">
                    E-Waste Collection
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="about-page" className="section about-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading">
              <h6 className="subtitle text-primary">Our Process</h6>
              {/* <h2 className="display-4">Promoting Eco Friendly World</h2> */}
            </div>
          </div>
        </div>

        <div className="row"></div>
        <div className="row">
          <div className="col-lg-12">
            <p>
              The beginning of any relationship with our customers starts with a
              contact request. After qualifying your E-Waste collection needs,
              our team makes an assessment and issues a quote. Once we get
              official approval and sign off a collection date is set and our
              logistics team arranges the necessary vehicles and removal
              equipment to suit. Our drivers will make advance contact to
              confirm collection details. Once vehicles are loaded, all E-Waste
              is securely transported to our recycling facility channel partners
              for processing.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading">
              <h6 className="subtitle text-primary">What Do We Collect ?</h6>
              {/* <h2 className="display-4">Promoting Eco Friendly World</h2> */}
            </div>
          </div>
        </div>
        <p>At present we collect all dry electronic equipment including:</p>
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <ul>
              <li>Desktops</li>
              <li>Laptops</li>
              <li>Tablets</li>
              <li>Mobile Phones</li>
              <li>Desktop / IP Phones</li>
              <li>Monitors</li>
              <li>Audio / Video Equipment</li>
            </ul>
          </div>
          <div className="col-lg-6 col-sm-12">
            <ul>
              <li>Printers & Peripherals</li>
              <li>Components</li>
              <li>Cables</li>
              <li>Accompanying Brackets</li>
              <li>Networking Gear</li>
              <li>Electronic Stationery</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <div className="section information fill-bg">
      <div className="container">
        <div className="row column-reverse">
          <div className="col-lg-6 column">
            <div className="details">
              <div className="heading">
                <div className="title">
                  <p>Documentation</p>
                </div>
              </div>
              <div className="content features">
                <p className="description">
                  All data sensitive assets can be tagged with an asset number,
                  serial numbers can be recorded and a spreadsheet of collected
                  assets can be provided. If Data Destruction services are
                  required we can provide Certified Data Destruction
                  certificates for each storage medium collected ({" "}
                  <Link to="/data-destruction">See Data Destruction</Link> page)
                </p>
                <div className="row">
                  <div className="col-lg-12 column">
                    <div className="feature">
                      <div className="name heading">
                        <p className="title">{/*<Icon type="bulb"/>*/}Drop Off Service</p>
                      </div>
                      <div className="text">
                        <p>
                          Although we normally deliver most e-waste to our
                          recycling channel partners, we may be able to cater
                          for your e-waste drop off by appointment at our
                          warehouse facilities in Artarmon, Sydney. Drop off
                          service may not always be available depending on size
                          and quantity of your items. Feel free to Contact us to
                          discuss your drop off requirements to see if we can
                          arrange a drop off solution for you.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 column">
                    <div className="feature">
                      <div className="name heading">
                        <p className="title">{/*<Icon type="bulb"/>*/}Recycling Facility</p>
                      </div>
                      <div className="text">
                        <p>
                          Once all assets are assessed for their recyclability,
                          we attempt to salvage any devices / components before
                          forwarding any unrepairable e-waste to our recycling
                          channel partners who strip down all machines into
                          their core components and process them by weight,
                          making sure almost nothing goes to landfill.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="action">
                <ModalTrigger
                  triggerTitle={"Get Started Today"}
                  modalContent={<Form/>}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 column">
            <div className="image">
              <img src={bucket} alt={"Why Us"}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default WastePage
