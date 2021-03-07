import React, { Component } from "react"
import logo from "../images/logo.png"
import scrollToElement from "scroll-to-element"
import { Link } from "gatsby"

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scrolled: false,
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll.bind(this))
    if (window.location.hash && window.location.hash !== "") {
      scrollToElement(window.location.hash)
    }
    this.listener = window.addEventListener(
      "hashchange",
      this.scrollToWindowHash
    )
  }

  componentWillUnmount() {
    window.removeEventListener("hashchange", this.scrollToWindowHash)
  }

  scrollToWindowHash() {
    if (window.location.hash !== "") {
      scrollToElement(window.location.hash)
    }
  }

  scrollToMenu(id) {
    scrollToElement(id)
    document.querySelector(".navbar-toggler").click()
  }

  onScroll() {
    if (window.pageYOffset > 200) {
      this.setState({
        scrolled: true,
      })
    } else {
      this.setState({
        scrolled: false,
      })
    }
  }

  render() {
    const { scrolled } = this.state
    const { isHomePage } = this.props
    return (
      <header className="header-bar">
        <nav
          className={
            "navbar navbar-expand-lg navbar-light transparent-white fixed-top main-nav2 " +
            (scrolled ? "top-nav-collapse" : "")
          }
        >
          <div className="container">
            <div className="nav-box">
              <Link className="navbar-brand" to="/">
                <img src={logo} alt="logo" className="img-fluid" />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="ion-navicon"></i>
              </button>
            </div>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  {isHomePage ? (
                    <a
                      className="nav-link"
                      onClick={this.scrollToMenu.bind(this, "#banner")}
                    >
                      Home
                    </a>
                  ) : (
                    <Link className="nav-link" to={"/"}>
                      Home
                    </Link>
                  )}
                </li>             
                <li className="nav-item">
                  <Link className="nav-link" to="/e-waste-collection">
                    E-Waste Collection
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/data-destruction">
                    Data Destruction
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/pricing">
                    Pricing
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/service-area">
                    Service Area
                  </Link>
                </li>
                <li className="nav-item">
                  {isHomePage ? (
                    <a
                      className="nav-link"
                      onClick={this.scrollToMenu.bind(this, "#about")}
                    >
                      About
                    </a>
                  ) : (
                    <Link className="nav-link" to={"/about"}>
                      About
                    </Link>
                  )}
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header
