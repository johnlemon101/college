import React from 'react'
import "./home.css";
import { Link } from 'react-router-dom';
import { MdLocationOn } from 'react-icons/md';
import { HiMailOpen} from 'react-icons/hi';
import { AiTwotonePhone} from 'react-icons/ai';
import { FiFacebook} from 'react-icons/fi';
import {AiOutlineTwitter} from 'react-icons/ai';
import { FiLinkedin} from 'react-icons/fi';
import {AiOutlineInstagram} from 'react-icons/ai';

export default function Footer() {
    return (
      <footer className="footer_section">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-3 footer_col">
          <div className="footer_contact">
            <h4>
              Reach at..
            </h4>
            <div className="contact_link_box">
              <a href="">
                <MdLocationOn></MdLocationOn>
                <span>
                  Solteemode, Kathmandu
                </span>
              </a>
              <a href="">
                <AiTwotonePhone></AiTwotonePhone>

                <span>
                  Call +977 9876543210
                </span>
              </a>
              <a href="">
                <HiMailOpen></HiMailOpen>
                <span>
                  wecare@gmail.com
                </span>
              </a>
            </div>
          </div>
          <div className="footer_social">
            <a href="">
              <FiFacebook></FiFacebook>
            </a>
            <a href="">
              <AiOutlineTwitter></AiOutlineTwitter>
            </a>
            <a href="">
              <FiLinkedin></FiLinkedin>
            </a>
            <a href="">
              <AiOutlineInstagram></AiOutlineInstagram>
            </a>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 footer_col">
          <div className="footer_detail">
            <h4>
              About
            </h4>
            <p>
            WeCare is a convenient platform to get doctors’ appointments where patients can make an appointment from anywhere in Nepal.            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-2 mx-auto footer_col">
          <div className="footer_link_box">
            <h4>
              Links
            </h4>
            <div className="footer_links">
              <Link className="active" to="/">
                Home
              </Link>
              <Link className="" to="/register">
                Register
              </Link>
              
              
              <Link className="" to="/login">
                Login
              </Link>
              <Link className="" to="/bookappoint">
                Appointment
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 footer_col ">
          <h4>
            Newsletter
          </h4>
          <form action="#">
            <input type="email" placeholder="Enter email" />
            <button type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>
     
      </div> 
      {/* <div className="footer-info">
        <p>
          &copy; <span id="displayYear"></span> All Rights Reserved By
          <a href="https://html.design/">Civil Service Hospital<br/></a>
            &copy; <span id="displayYear"></span> Distributed By
            <a href="https://themewagon.com/">ThemeWagon</a>
        </p>
       
      </div>   */}
  
  </footer>
    
    )
}
