import "./Contact1.css";
import undraw_scrum from "../undraw_message_sent.svg";

import { useState } from "react";

const Contact = () => {
  const [submit, setSubmit] = useState(false);

  const submission = () => {
    setSubmit(true);
  };

  return (
    <div className="contact" id="contact">
      <div className="contact__info">
        <h1>Contact Me!</h1>
        <h4>
          I am open to full time and freelance web develpoment opportunities.
          <br></br> Use the form to inquire about availability, or email me
          directly. <br></br>
          <br></br>abc@gmail.com | 281-111-2222
        </h4>
      </div>
      <div className="contact__form">
        <div className="container">
          {!submit ? (
            <form id="contactForm">
              <div className="mb-3">
                <label className="form-label" for="name">
                  Name
                </label>
                <input
                  className="form-control"
                  id="name"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div className="mb-3">
                <label className="form-label" for="emailAddress">
                  Email Address
                </label>
                <input
                  className="form-control"
                  id="emailAddress"
                  type="email"
                  placeholder="Email Address"
                />
              </div>
              <div className="mb-3">
                <label className="form-label" for="message">
                  Message
                </label>
                <textarea
                  className="form-control rounded-0"
                  id="exampleFormControlTextarea2"
                  rows="3"
                ></textarea>
              </div>
              <div className="d-grid">
                <button
                  className="btn btn-warning btn-lg"
                  type="submit"
                  onClick={submission}
                >
                  Submit
                </button>
              </div>
            </form>
          ) : (
            <h2 style={{ textAlign: "center" }}>Thank you for your inquiry</h2>
          )}
          {/* <form id="contactForm">
            <div className="mb-3">
              <label className="form-label" for="name">
                Name
              </label>
              <input
                className="form-control"
                id="name"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="mb-3">
              <label className="form-label" for="emailAddress">
                Email Address
              </label>
              <input
                className="form-control"
                id="emailAddress"
                type="email"
                placeholder="Email Address"
              />
            </div>
            <div className="mb-3">
              <label className="form-label" for="message">
                Message
              </label>
              <textarea
                className="form-control rounded-0"
                id="exampleFormControlTextarea2"
                rows="3"
              ></textarea>
            </div>
            <div className="d-grid">
              <button className="btn btn-warning btn-lg" type="submit">
                Submit
              </button>
            </div>
          </form> */}
        </div>
      </div>
      <div className="contact__pic">
        <img
          src={undraw_scrum}
          className="App-logo"
          alt="logo"
          width="300"
          border-sizing="border-box"
        />
      </div>
    </div>
  );
};

export default Contact;
