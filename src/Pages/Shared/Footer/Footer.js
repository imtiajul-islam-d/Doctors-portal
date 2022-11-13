import React from "react";
import { Link } from "react-router-dom";
import footer from '../../../assets/images/footer.png'

const Footer = () => {
  return (
    <section style={
        {
            background: `url(${footer})`,
            backgroundSize: 'fit'
        }
    }>
      <footer className="footer p-10 text-center">
        <div className="md:mx-auto">
          <span className="footer-title">Services</span>
          <Link className="link link-hover">Branding</Link>
          <Link className="link link-hover">Design</Link>
          <Link className="link link-hover">Marketing</Link>
          <Link className="link link-hover">Advertisement</Link>
        </div>
        <div className="md:mx-auto">
          <span className="footer-title">Company</span>
          <Link className="link link-hover">About us</Link>
          <Link className="link link-hover">Contact</Link>
          <Link className="link link-hover">Jobs</Link>
          <Link className="link link-hover">Press kit</Link>
        </div>
        <div className="md:mx-auto">
          <span className="footer-title">Legal</span>
          <Link className="link link-hover">Terms of use</Link>
          <Link className="link link-hover">Privacy policy</Link>
          <Link className="link link-hover">Cookie policy</Link>
        </div>
      </footer>
      <footer className="footer footer-center p-4 text-base-content">
        <div>
          <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
