import React from "react";
import { Nav } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaLinkedinIn,
  FaLongArrowAltRight
} from "react-icons/fa";
import logo from "../../../images/logo-footer.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-area text-white pt-5">
      <div className="container">
        <div className="row py-5">
          <div className="col-md-3">
            <div className="footer-logo">
              <img className="mb-3" width="100px" src={logo} alt="" />
              <p>
                Restore is a U.S based computer repair service center. Basically
                we repair all major brands of PCs, Laptops, Smartphone, Tablet,
                Flash Drive and Gaming Console devices issues.
              </p>
            </div>
            <hr />
            <div className="icons-container d-flex text-center ">
              <div className="icon">
                <FaFacebookF />
              </div>
              <div className="icon">
                <FaTwitter />
              </div>
              <div className="icon">
                <FaPinterestP />
              </div>
              <div className="icon">
                <FaLinkedinIn />
              </div>
            </div>
          </div>
            <div className="col-md-3">
                <h5>Shop Info</h5>
                <table>
                    <tr>
                        <td>Address:</td>
                        <td>965 East Avenu, Sector 9 Russel Squire, UK</td>
                    </tr>
                    <tr>
                        <td>Phone:</td>
                        <td>(+1)755-650-5212</td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td>info@codeecstasy.com</td>
                    </tr>
                </table>
            </div>
          <div className="col-md-3">
            <div className="footer-menu-container">
              <h5>Services</h5>
              <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="/home"> <FaLongArrowAltRight className="theme-color" /> Laptop Repair</Nav.Link>
                <Nav.Link eventKey="link-1"><FaLongArrowAltRight className="theme-color"  /> Smartphone Repair</Nav.Link>
                <Nav.Link eventKey="link-2"><FaLongArrowAltRight className="theme-color"  /> iPhone Repair</Nav.Link>
                <Nav.Link eventKey="link-3"><FaLongArrowAltRight className="theme-color"  /> iPad Repair</Nav.Link>
              </Nav>
            </div>
          </div>
          <div className="col-md-3">
            <h5>Newsletter</h5>
            <p>
              Signup for regular newsletter and stay upto date with our latest
              news
            </p>
            <div className="input-group mt-4 mb-3 mx-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Your email address"
              />
              <button className="btn text-white theme-bg ">Signup</button>
            </div>
          </div>
        </div>
        <hr />
        <div className="row py-3">
          <div className="col pt-2">
            <p className="text-muted">
              Copyright &copy;2021 Restore. All rights reserved.
            </p>
          </div>
          <div className="col">
            <Nav className="justify-content-end" activeKey="/home">
              <Nav.Item>
                <Nav.Link href="/home">Privacy & Policy</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">Terms of Use</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">Pricing</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
