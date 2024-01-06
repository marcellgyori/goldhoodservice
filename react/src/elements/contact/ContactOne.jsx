import React, { Component } from "react";
import emailjs from 'emailjs-com';

class ContactOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rnName: "",
      rnEmail: "",
      rnSubject: "",
      rnMessage: "",
    };
    this.sendEmail = this.sendEmail.bind(this);
  }

  sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_6jy6gza', 'template_54r6hoe', e.target, '6tPUj3BKHrCRTrVRQ')
      .then((result) => {
        console.log(result.text);
        this.setState({
          rnName: "",
          rnEmail: "",
          rnSubject: "",
          rnMessage: "",
          formSubmitted: true,
          formSuccess: true
        });
      }, (error) => {
        console.log(error.text);
        this.setState({
          formSubmitted: true,
          formSuccess: false
        });
      });
  }
  render() {
    const {formSubmitted, formSuccess } = this.state;

    return (
      <div className="contact-form--1">
        <div className="container">
          <div className="row row--35 align-items-start">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="section-title text-left mb--50">
                <h2 className="title">Contact us.</h2>
                <p className="description">
                  We provide free estimates. Connect with us via phone:{" "}
                  <a href="tel:+3862164836">386-216-4836</a> or email:
                  <a href="mailto:GoldHoodService@hotmail.com"> GoldHoodService@hotmail.com</a>{" "}
                </p>
              </div>
              <div className="form-wrapper">
                {formSubmitted && (
                  <div className={`alert ${formSuccess ? "alert-success" : "alert-danger"}`}>
                    {formSuccess ? "Message sent successfully!" : "An error occurred. Please try again later."}
                  </div>
                )}
                <form onSubmit={this.sendEmail}>
                  <label htmlFor="item01">
                    <input
                      type="text"
                      name="from_name"
                      id="item01"
                      value={this.state.rnName}
                      onChange={(e) => {
                        this.setState({ rnName: e.target.value });
                      }}
                      placeholder="Your Name *"
                    />
                  </label>

                  <label htmlFor="item02">
                    <input
                      type="email"
                      name="from_email"
                      id="item02"
                      value={this.state.rnEmail}
                      onChange={(e) => {
                        this.setState({ rnEmail: e.target.value });
                      }}
                      placeholder="Your email *"
                    />
                  </label>

                  <label htmlFor="item03">
                    <input
                      type="text"
                      name="subject"
                      id="item03"
                      value={this.state.rnSubject}
                      onChange={(e) => {
                        this.setState({ rnSubject: e.target.value });
                      }}
                      placeholder="Write a Subject"
                    />
                  </label>

                  <label htmlFor="item04">
                    <textarea
                      name="message"
                      id="item04"
                      value={this.state.rnMessage}
                      onChange={(e) => {
                        this.setState({ rnMessage: e.target.value });
                      }}
                      placeholder="Your Message"
                    />
                  </label>

                  <button
                    className="rn-button-style--2 btn-solid"
                    type="submit"
                    value="submit"
                    name="submit"
                    id="mc-embedded-subscribe"
                  >
                    Submit
                  </button>
                </form>

              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              <div className="thumbnail mb_md--30 mb_sm--30">
                <img src="/assets/images/about/asd.png" alt="trydo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ContactOne;
