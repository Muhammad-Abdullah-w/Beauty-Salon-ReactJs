import React from 'react';
import './style.css';
import './style2.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faMapMarkerAlt, faSearch, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';

const Header = () => (
  <header className="main-header">
    <div className="main-info">
      <div className="container">
        <div className="row">
          <h1 className="logo">
              <p>Rozina's Salon </p>
          </h1>
          <div className="contact">
            <div className="contact-icon">
              <FontAwesomeIcon icon={faPhoneAlt} />
            </div>
            <div className="contact-main">
             +92 3131123256 
            </div>
          </div>
          <div className="contact">
            <div className="contact-icon">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </div>
            <div className="contact-main" >
              <a href="https://maps.app.goo.gl/xKx2od4bWqYcmr1E7"> Plot # R 767, Sector 15-B Bufferzone, Karachi</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="main-nav">
      <div className="container">
        <nav>
          <div>
            <a href="#" className="active">HOME</a>
          </div>
          <div>
            <a href="#Services">SERVICES</a>
          </div>
          <div>
            
            <a href="#blog">BLOG POSTS</a>
          </div>
          <div>
            <a href="#Contacts">CONTACTS</a>
          </div>
          
        </nav>
      </div>
    </div>
  </header>
);

const Slider = () => (
  <section className="kv">
    <div className="slider-banner">
      <div className="slider-container">
        <div className="item item-kv-1 active">
          <div className="container">
            <div className="row">
              <div className="item-kv-txt col-md-6 col-xl-4">
                <h2><br/>Take Care of YourSelf</h2>
                <h3>At Rozina's Salon, we provide best.</h3>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeZDO2qLbwydENxEqJulxaa7fhJXgmtO9QixGPbx18jR-NmTw/viewform?usp=sf_link" 
                className="btn">Make an Appointment</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section className="doc-section">
    <div className="container">
      <div className="row">
        <h2 className="col-12">National Assessor of Beauty Therapy</h2>
        <div className="col-12 ">
          <div className="icon icon-pills"></div>
          <h3>Miss Rozina Waseem</h3>
          <p>I am a NAVTTC Certified National Assessor in Beauty Therapy in Pakistan. I have been providing skincare treatment for over 18 years.</p>
        </div>
      </div>
    </div>
  </section>
);

const FillBanner = ({ className, title, subtitle, buttonText }) => (
  <section className={`fill-banner ${className}`}>
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-10 col-xl-5">
          <h2>{title}</h2>
          <p>{subtitle}</p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeZDO2qLbwydENxEqJulxaa7fhJXgmtO9QixGPbx18jR-NmTw/viewform?usp=sf_link"
           className="btn">{buttonText}</a>
        </div>
      </div>
    </div>
  </section>
);

const ServiceBox = ({ iconSrc, title, description }) => (
  <div className="service-box">
    <div className="service-icon">
      <img src={iconSrc} alt={title} />
    </div>
    <div className="service-title">
      <b>{title}</b>
    </div>
    <div className="description">{description}</div>
  </div>
);

const Services = () => (
  <div className="services-container" id="Services">
    <div className="inner-container">
      <h1 className="section-title">Services</h1>
      <div className="border"></div>
      <div className="service-container">
        <ServiceBox iconSrc="../images/Eyebrow-shaping-and-tinting.png" title="Eyebrow Shaping and Tinting" description="Enhance the shape and color of your eyebrows with our expert shaping and tinting services for a perfect look." />
        <ServiceBox iconSrc="../images/Facial-treatments.png" title="Facial Treatments" description="Revitalize your skin with our range of facial treatments designed to cleanse, exfoliate, and nourish your complexion." />
        <ServiceBox iconSrc="../images/Haircut-and-styling.png" title="Haircut and Styling" description="Transform your look with our professional haircut and styling services, tailored to suit your individual style and preferences." />
        <ServiceBox iconSrc="../images/Hair-removal.png" title="Hair Removal" description="Achieve smooth, hair-free skin with our effective hair removal services, ensuring comfort and lasting results." />
        <ServiceBox iconSrc="../images/skin-rejuvenation.png" title="Skin Rejuvenation" description="Renew your skin’s vitality with our skin rejuvenation treatments, designed to enhance texture, tone, and overall radiance." />
        <ServiceBox iconSrc="../images/Spa-treatments.png" title="Bridal Package" description="Pamper yourself with our comprehensive bridal package, including a range of treatments to ensure you look and feel your best on your special day." />
      </div>

    </div>
  </div>
);

const BlogPost = ({ imgSrc, title, date, content }) => (
  <article className="col-8 col-md-6 col-xl-4">
    <div className="post">
      <a className="img-hover" href="#">
        <img src={imgSrc} alt={title} />
      </a>
      <h2>
        <a href="#">{title}</a>
      </h2>
      <h3 className="time">{date}</h3>
      <p>{content}</p>
    </div>
  </article>
);

const Blog = () => (
  <section className="blog" id="blog">
    <div className="container">
      <div className="row">
        <h2 className="col-12">Blog Posts</h2>
        <BlogPost imgSrc="../images/blog-1.jpg" title="Best skin care products" date="JUly 1, 2024" content="" />
        <BlogPost imgSrc="../images/blog-2.jpg" title="Best Mehndi Designs" date="June 23, 2024" content="" />
        <BlogPost imgSrc="../images/blog-3.jpg" title="Nail polish design ideas" date="April 26, 2024" content="" />
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="main-footer">
    <div className="container">
      <div className="row">
        <div className="c2">
          <div className="footer-logo">
            <a href="#">
              <img src="../images/Logo.PNG" className="logo-light" alt="Logo" />
            </a>
          </div>
          <ul className="sns">
            <li className="icon-fb">
              <a href="https://www.facebook.com/people/Rozina-Beauty-Salon/100064067522139/?mibextid=ZbWKwL">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </li>
            <li className="icon-twitter">
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li className="icon-instagram">
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>

          </ul>
        </div>

        <div className="c3">
          <br/>
          <h3>For any inquiries, please contact me</h3><br/>
          <div className="contact" id="Contacts">
            <div className="contact-icon">
              <FontAwesomeIcon icon={faPhoneAlt} />
            </div>
            <div className="contact-main">
              +92 3131123256
              <br />
              
            </div>
          </div>
          <div className="contact">
            <div className="contact-icon">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </div>
            <div className="contact-main">
              <a href="https://maps.app.goo.gl/xKx2od4bWqYcmr1E7">Plot # R767, Sector 15-B Bufferzone, Karachi</a>
            </div>
          </div>
          <div className="contact">
            <div className="contact-icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="contact-main">
              rozinawaseem7@gmail.com
            </div>
          </div>
        </div>
        <br/><br/>

      </div>
      <div className="row">
        <div className="copyright">
          © 2024 Build by <a href="">Muhammad Abdullah</a><br/>
        </div>
      </div>
    </div>
  </footer>
);

const GoTop = () => {
  const handleScroll = () => {
    if (window.scrollY > 300) {
      document.getElementById('goTop').classList.add('active');
    } else {
      document.getElementById('goTop').classList.remove('active');
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="goTop" className="goTop" onClick={scrollToTop}></div>
  );
};

const App = () => (
  <>
    <Header />
    <Slider />
    <About />
    <FillBanner className="banner-1-bg" title="All Kinds of Skin-Treatment" subtitle="I provide free consultancy for all kinds skin treatment" buttonText="Free Consultation" />
    <Services />
     
    <FillBanner className="banner-2-bg" title="Best Quality Products" subtitle="
We use only the high quality products, carefully chosen to match each client's unique skin needs. Our approach ensures that every treatment is customized for optimal results and personalized care." buttonText="Free Consultation" />
    <Blog />
    <Footer />
    <GoTop />
  </>
);

export default App;
