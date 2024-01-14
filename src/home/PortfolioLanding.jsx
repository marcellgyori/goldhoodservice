import React from "react";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import HeaderThree from "../component/header/HeaderThree";
import ContactOne from "../elements/contact/ContactOne";
import ServiceList from "../elements/service/ServiceList";



const SlideList = [
  {
    textPosition: "text-left",
    category: "GoldHood Service",
    title: "Contact us <span>now</span> <br>386-216-4836<br><br>",
    description: "",
    buttonText: "",
    buttonLink: "",
  },
];


const PortfolioLanding = () => {
  let title = "About us",
    description =
      `As a family-owned and operated business, we established our company with immense passion, relentless hard work, unyielding dedication, and meticulous attention to detail. 
      We approach every project, whether commercial or residential, with the same level of care and attention we would give our own home, ensuring top-quality service at fair and competitive prices. Our commitment is to offer the finest commercial hood cleaning services, aiming to surpass our clients' expectations consistently. 
      Based in Florida, we are proud to serve the Deltona area and its surroundings, including Orlando and Cocoa Beach. We understand how busy life can be, especially in these bustling regions, and we aim to relieve you of any concerns related to your exhaust system. 
      We are dedicated to maintaining a clean and healthy kitchen environment for our clients' staff and visitors alike, ensuring peace of mind across Central Florida's vibrant communities.`;
    const descriptionWithBreaks = description.split('\n').map((text, index) => (
      <React.Fragment key={index}>
        {text}
        <br />
      </React.Fragment>
    ));
    return (
    <div>
      {/* <Helmet pageTitle="GoldHood Service" /> */}
      {/* <PageHelmet pageTitle='GoldHood Service' /> */}
      <HeaderThree homeLink="/" logo="symbol-dark" color="color-black" />
      {/* Start Slider Area   */}
      <div id="home" className="fix">
        <div className="slider-wrapper">
          {/* Start Single Slide */}
          {SlideList.map((value, index) => (
            <div
              className="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image bg_image--36"
              key={index}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className={`inner ${value.textPosition}`}>
                      {value.category ? <span>{value.category}</span> : ""}
                      {value.title ? (
                        <h1
                          className="title"
                          dangerouslySetInnerHTML={{ __html: value.title }}
                        ></h1>
                      ) : (
                        ""
                      )}
                      {value.description ? (
                        <p className="description">{value.description}</p>
                      ) : (
                        ""
                      )}
                      {value.buttonText ? (
                        <div className="slide-btn">
                          <a
                            className="rn-button-style--2 btn-primary-color"
                            href={`${value.buttonLink}`}
                          >
                            {value.buttonText}
                          </a>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* End Single Slide */}
        </div>
      </div>
      {/* End Slider Area   */}

      {/* Start About Area */}
      <div id="about" className="fix">
        <div className="about-area ptb--120  bg_color--1">
          <div className="about-wrapper">
            <div className="container">
              <div className="row row--35 align-items-center">
                <div className="col-lg-5">
                  <div className="thumbnail">
                    <img
                      className="w-100"
                      src="/assets/images/about/about-10.png"
                      alt="About Images"
                    />
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="about-inner inner">
                    <div className="section-title">
                      <h2 className="title">{title}</h2>
                      <p className="description">{descriptionWithBreaks}</p>
                    </div>
                    <div className="row mt--30">
                      {/* <TabTwo tabStyle="tab-style--1" /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* End About Area */}

      {/* Start Service Area  */}
      <div id="service" className="fix">
        <div className="service-area creative-service-wrapper ptb--120 bg_color--5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                  <h2 className="title">Services</h2>
                  <p>We provide a wide range of services.</p>
                </div>
              </div>
            </div>
            <div className="row creative-service">
              <div className="col-lg-12">
                <ServiceList
                  item="6"
                  column="col-lg-4 col-md-6 col-sm-6 col-12 text-left"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Service Area  */}

      {/* Start COntact Area */}
      <div id="contact" className="fix">
        <div className="rn-contact-area ptb--120 bg_color--1">
          <ContactOne />
        </div>
      </div>
      {/* End COntact Area */}

      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}
    </div>
  );
};

export default PortfolioLanding;
