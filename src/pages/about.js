import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import worker from "../images/workerr.png"
import secure from "../images/worker.jpg"
import ModalTrigger from "../components/modal-trigger"
import Form from "../components/form"

const AboutPage = () => (
  <Layout>
    <section id="about" className="section general-page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8  text-center">
            <div className="page-heading">
              <h2 className="display-4">About Us</h2>
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <Link to={"/"}>Home </Link>
                </li>
                <li className="list-inline-item">
                  <a>/</a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="text-muted">
                    About
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
              <h6 className="subtitle text-primary">What Is E-Waste ?</h6>
              {/* <h2 className="display-4">Let’s paint the world green.</h2> */}
            </div>
          </div>
        </div>

        <div className="row"></div>
        <div className="row">
          <div className="col-lg-12">
            <p>
              Electronic waste or e-waste describes end-of-life discarded
              electrical or electronic devices. Used electronics which are
              destined for refurbishment, reuse, resale, salvage recycling
              through material recovery, or disposal are also considered
              e-waste.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading">
              <h6 className="subtitle text-primary">Our Grassroots</h6>
              {/* <h2 className="display-4">Let’s paint the world green.</h2> */}
            </div>
          </div>
        </div>

        <div className="row"></div>
        <div className="row">
          <div className="col-lg-12">
            <p>
              eWastage.com.au started as a second hand computer store bringing
              in stock from e-waste and recycling specialist wholesalers
              specifically for repurpose and refurbishment. Our mantra has
              always been to provide an eco-friendly facility to minimise the
              toxic effects of e-waste on the environment. We have learned a lot
              from the industry and wanted to help in the cause for a greener
              community which is how we transitioned into e-waste management.
            </p>
          </div>
        </div>
      </div>
    </section>
    <div className="section information fill-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="image">
              <img src={worker} alt={"About"} />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="details">
              <div className="heading">
                <div className="title">
                  <p>How Do We Do It ?</p>
                </div>
              </div>
              <div className="content description">
                <p>
                  Everything we collect is first and foremost considered for
                  repurpose and refurbishment. Our vehicle drivers contact our
                  customers in advance to confirm collection. Anything deemed
                  unrepairable is broken down into individual parts and
                  processed categorically through a recycling process with our
                  channel partners, resulting in almost nothing that goes to
                  landfill.
                </p>
              </div>
              <div className="action">
                <ModalTrigger
                  triggerTitle={"Get Started Today"}
                  modalContent={<Form />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="section information">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="image">
              <img src={secure} alt={"About"} />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="details">
              <div className="heading">
                <div className="title">
                  <p>Our Promise</p>
                </div>
              </div>
              <div className="content description">
                <p>
                  At eWastage.com.au we pride ourselves on individual and
                  corporate on time logistics, safe and secure handoff and
                  handle all data in accordance with Australian data breach
                  laws. We make sure all assets are documented, tracked and if
                  required, an appropriate data destruction process is provided
                  - issued with fully certified Data Destruction Certificates
                  where applicable. Our service is affordable and in many
                  circumstances absolutely FREE ! ({" "}
                  <Link to="/pricing">See Pricing page</Link> for more information)
                </p>
              </div>
              <div className="action">
                <ModalTrigger
                  triggerTitle={"Get Started Today"}
                  modalContent={<Form />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default AboutPage
