import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import earth from "../images/earth.jpg"
import recycle from "../images/recycle.jpg"
import report from "../images/report.jpeg"
import logos from "../images/logos.png"
import drive from "../images/hard-disk_s.jpg"
import ModalTrigger from "../components/modal-trigger"
import Form from "../components/form"

const DestructionPage = () => (
  <Layout>
    <section id="about" className="section general-page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8  text-center">
            <div className="page-heading">
              <h2 className="display-4">Data Destruction</h2>
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <Link to={"/"}>Home </Link>
                </li>
                <li className="list-inline-item">
                  <a>/</a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="text-muted">
                    Data Destruction
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
              <h6 className="subtitle text-primary">
                What is Data Destruction ?
              </h6>
              {/* <h2 className="display-4">Your Data is Safe and Secure</h2> */}
            </div>
          </div>
        </div>

        <div className="row"></div>
        <div className="row">
          <div className="col-lg-12">
            <p>
              All computer related e-waste normally contains a storage component
              where personal and company data is stored. These storage
              components, normally hard drives and flash storage can contain
              sensitive and confidential information. Data Destruction is the
              process of eradicating any and all data by running a process on
              these storage components that guarantees no information can ever
              be retrieved.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading">
              <h6 className="subtitle text-primary">
                Safe & Secure Data Destruction Service
              </h6>
              {/* <h2 className="display-4">Your Data is Safe and Secure</h2> */}
            </div>
          </div>
        </div>

        <div className="row"></div>
        <div className="row">
          <div className="col-lg-12">
            <p>
              eWastage.com.au offers a guaranteed, fully certified Data
              Destruction service. Any erasable functioning storage media is
              wiped using a multipass binary overwipe. Any media that cannot be
              wiped for any reason is physically destroyed. All destroyed media
              can be documented and a report provided if required.
            </p>
          </div>
        </div>

        {/* <div className="action">
          <ModalTrigger triggerTitle={"Book a Collection"}
                        modalContent={<Form/>}
          />
        </div> */}
      </div>
    </section>
    <div className="section information fill-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="details">
              <div className="heading">
                <div className="title">
                  <p>Data Destruction Certificates</p>
                </div>
              </div>
              <div className="content description">
                <p>
                  eWastage.com.au can provide a detailed report of either entire
                  assets and their storage media or standalone media that have
                  been successfully wiped. All reports are generated digitally,
                  certified and securely provided to our customers.
                  <ModalTrigger
                    triggerLink
                    className={"large-modal"}
                    triggerTitle={"See Sample Report"}
                    modalContent={<img className={"report-img"} src={report}/>}
                  />
                </p>
              </div>
              <div className="action data-action">
                <ModalTrigger
                  triggerTitle={"Get Started Today"}
                  modalContent={<Form/>}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="image">
              <img src={drive} alt={"About"}/>
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
              <img src={earth} alt={"About"}/>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="details">
              <div className="heading">
                <div className="title">
                  <p>Internationally Certified</p>
                </div>
              </div>
              <div className="content description">
                <p>
                  eWastage.com.au guarantees all customer data is handled in
                  accordance with Australian data breach laws. Our Data
                  Destruction erasure process is fully compliant with Australian
                  Defense data privacy standards and multiple international
                  cyber security standards. eWastage.com.au
                  guarantees all customer data is handled in accordance with
                  Australian data breach laws. Our Data Destruction erasure
                  process is fully compliant with Australian Defense data
                  privacy standards and multiple international cyber security
                  standards. For a full list of worldwide compliance
                  certifications see below.
                </p>
              </div>
              <div className="action">
                <ModalTrigger
                  triggerTitle={"Get Started Today"}
                  modalContent={<Form/>}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="section information fill-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="details">
              <div className="heading">
                <div className="title">
                  <p>Certifications</p>
                </div>
              </div>
              <div className="content description">
                <p>
                  EAL 2+ Certification means that eWastage.com.au complies with all of the following U.S. and
                  international disk wiping standards:
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <ul>
                      <li>Common Criteria EAL 2+</li>
                      <li>US DoD 5220.22-M</li>
                      <li>NIST 800-88 REV 1 Compliant</li>
                      <li>Meets the Common Criteria Evaluation and Validation Scheme</li>
                      <li>HIPAA</li>
                      <li>FACTA standards</li>
                      <li>Sarbanes-Oxley</li>
                      <li>US Army AR380-19</li>
                      <li>US Air Force System Security Instruction 5020</li>
                      <li>US Navy Staff Office Publication P-5329-26</li>
                      <li>US National Computer Security Center TG-025</li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <li>NATO NIAPC</li>
                      <li>GB HMG Infosec Standard #5 Baseline</li>
                      <li>GB HMG Infosec Standard #5 Enhanced</li>
                      <li>German VSITR</li>
                      <li>Australian Defense Signals Directorate ACSI-33(X0-PD)</li>
                      <li>Australian Defense Signals Directorate ACSI-33(X1-P-PD)</li>
                      <li>Canadian RCMP TSSIT OPS-II Standard Wipe</li>
                      <li>CIS GOST P50739-95</li>
                      <li>CSEC ITSG-06</li>
                      <li>Standard single pass overwrite</li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="brands">
                      <img src={logos} className='logos'/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default DestructionPage
