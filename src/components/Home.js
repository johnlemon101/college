import React from 'react';
import './home.css';
import Footer from './Footer';


import ambika from '../images/hero-bg.png';
import about from '../images/pic5.jpg';
import sec1 from '../images/s1.png';
import sec2 from '../images/s2.png';
import sec3 from '../images/s3.png';
import sec4 from '../images/s4.png';
import doc1 from '../images/doc1.png';
import doc2 from '../images/doc2.jpeg';
import doc3 from '../images/doc3.png';
import { FiFacebook} from 'react-icons/fi';
// import { Link } from 'react-router-dom';
import {AiOutlineTwitter} from 'react-icons/ai';
import {TiSocialYoutubeCircular} from 'react-icons/ti';
import {AiOutlineInstagram} from 'react-icons/ai';
import Header from './Header';


export default function Home() {
  return <div>
     <Header />
    <div className="hero_area">

<div className="hero_bg_box">
  <img src={ambika} alt=""/>
</div>



<section className="slider_section ">
  <div id="customCarousel1" className="carousel slide" data-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <div className="container ">
          <div className="row">
            <div className="col-md-7">
              <div className="detail-box">
                <h1>
                  We Provide Best Healthcare
                </h1>
                <p>
                The primary aim of WeCare is to provide quality, state-of-the-art, and affordable healthcare services to all patients.
                </p>
                <div className="btn-box">
                  <a href="" className="btn1"> 
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item ">
        <div className="container ">
          <div className="row">
            <div className="col-md-7">
              <div className="detail-box">
                <h1>
                  We Provide Best Healthcare
                </h1>
                <p>
                The primary aim of WeCare is to provide quality, state-of-the-art, and affordable healthcare services to all patients.
                </p>
                <div className="btn-box">
                  <a href="" className="btn1">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <div className="container ">
          <div className="row">
            <div className="col-md-7">
              <div className="detail-box">
                <h1>
                  We Provide Best Healthcare
                </h1>
                <p>
                The primary aim of WeCare is to provide quality, state-of-the-art, and affordable healthcare services to all patients.
                </p>
                <div className="btn-box">
                  <a href="" className="btn1">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ol className="carousel-indicators">
      <li data-target="#customCarousel1" data-slide-to="0" className="active"></li>
      <li data-target="#customCarousel1" data-slide-to="1"></li>
      <li data-target="#customCarousel1" data-slide-to="2"></li>
    </ol>
  </div>

</section>
{/* <!-- end slider section --> */}
</div>


{/* <!-- department section --> */}

<section className="department_section layout_padding">
<div className="department_container">
  <div className="container ">
    <div className="heading_container heading_center">
      <h2>
        Our Departments
      </h2>
      <p>
      Our team of experts is always ready for your treatment. 
      We believe  in treating patients with extra personal care. 
      Our departments are headed by the following dynamic consultants.
      </p>
    </div>
    <div className="row">
      <div className="col-md-3">
        <div className="box ">
          <div className="img-box">
          <img src={sec1} alt=""/>
          </div>
          <div className="detail-box">
            <h5>
              Cardiology
            </h5>
            <p>
            Cardiology is a medical specialty and a branch of internal medicine concerned with disorders of the heart.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="box ">
          <div className="img-box">
          <img src={sec2} alt=""/>
          </div>
          <div className="detail-box">
            <h5>
              Diagnosis
            </h5>
            <p>
            The act of identifying a disease, illness, or problem by examining someone or something.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="box ">
          <div className="img-box">
          <img src={sec3} alt=""/>
          </div>
          <div className="detail-box">
            <h5>
              Surgery
            </h5>
            <p>
            Surgery is a medical or dental specialty that uses operative manual.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="box ">
          <div className="img-box">
          <img src={sec4} alt=""/>
          </div>
          <div className="detail-box">
            <h5>
              First Aid
            </h5>
            <p>
            First aid is the first and immediate assistance given to any person suffering from either a minor or serious illness or injury.
            </p>
          </div>
        </div>
      </div>
    </div>
    {/* <div className="btn-box">
      <a href="">
        View All
      </a>
    </div> */}
  </div>
</div>
</section>
{/* 
<!-- end department section -->

<!-- about section --> */}

<section className="about_section layout_margin-bottom">
<div className="container  ">
  <div className="row">
    <div className="col-md-6 ">
      <div className="img-box">
      <img src={about} alt=""/>
      </div>
    </div>
    <div className="col-md-6">
      <div className="detail-box">
        <div className="heading_container">
          <h2>
            About <span>Us</span>
          </h2>
        </div>
        <p>
        WeCare is a convenient platform to get doctors’ appointments where patients can make an appointment from anywhere in Nepal.</p>
        <p>Our services not only help doctors get patients but it also improves their overall reputation and also expands their work to a larger audience. Patients can also keep a record of their medical history along with their profiles, saving them from the hassle of carrying medical files and reports here and there.</p>
        {/* <a href="">
          Read More
        </a> */}
      </div>
    </div>
  </div>
</div>
</section>

{/* <!-- end about section -->

<!-- doctor section --> */}

<section className="doctor_section layout_padding">
<div className="container">
  <div className="heading_container heading_center">
    <h2>
      Our Doctors
    </h2>
    <p className="col-md-10 mx-auto px-0">
    Observation, Reason, Human Understanding, Courage; these make the physician." “Wear the white coat with dignity and pride. It is an honor and privilege to get to serve the public as a physician
    </p>
  </div>
  <div className="row">
    <div className="col-sm-6 col-lg-4 mx-auto">
      <div className="box">
        <div className="img-box">
        <img src={doc1} alt=""/>
        </div>
        <div className="detail-box">
          <div className="social_box">
            <a href="">
              < FiFacebook></FiFacebook>
            </a>
            <a href="">
              <AiOutlineTwitter></AiOutlineTwitter>
            </a>
            <a href="">
              <TiSocialYoutubeCircular></TiSocialYoutubeCircular>
            </a>
            <a href="">
              <AiOutlineInstagram></AiOutlineInstagram>
            </a>
          </div>
          <h5>
            Amita Adhikari
          </h5>
          <h6 className="">
            Doctor
          </h6>
        </div>
      </div>
    </div>
    <div className="col-sm-6 col-lg-4 mx-auto">
      <div className="box">
        <div className="img-box">
        <img src={doc2} alt=""/>
        </div>
        <div className="detail-box">
          <div className="social_box">
          <a href="">
              < FiFacebook></FiFacebook>
            </a>
            <a href="">
              <AiOutlineTwitter></AiOutlineTwitter>
            </a>
            <a href="">
              <TiSocialYoutubeCircular></TiSocialYoutubeCircular>
            </a>
            <a href="">
              <AiOutlineInstagram></AiOutlineInstagram>
            </a>
          </div>
          <h5>
            Abhi Devkota
          </h5>
          <h6 className="">
            Doctor
          </h6>
        </div>
      </div>
    </div>
    <div className="col-sm-6 col-lg-4 mx-auto">
      <div className="box">
        <div className="img-box">
        <img src={doc3} alt=""/>
        </div>
        <div className="detail-box">
          <div className="social_box">
          <a href="">
              < FiFacebook></FiFacebook>
            </a>
            <a href="">
              <AiOutlineTwitter></AiOutlineTwitter>
            </a>
            <a href="">
              <TiSocialYoutubeCircular></TiSocialYoutubeCircular>
            </a>
            <a href="">
              <AiOutlineInstagram></AiOutlineInstagram>
            </a>
          </div>
          <h5>
            Anand Bhandari
          </h5>
          <h6 className="">
            Doctor
          </h6>
        </div>
      </div>
    </div>
  </div>
  <div className="btn-box">
    <a href="">
      View All
    </a>
    
  </div>
  
</div>




</section>
<br/>
<Footer/>
</div>

};

