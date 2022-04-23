import "./Contact.css";
import undraw_scrum from "../undraw_message_sent.svg";

const Contact = () => {
  return (
    <div className="about__test" id="contact">
      <div className="Contact__me">
        <h1>Contact Me!</h1>
        <div className="Contact_Des">
          I am open to full time and freelance web develpoment opportunities.
          <br></br> Use the form to inquire about availability, or email me
          directly. <br></br>
          <br></br>abc@gmail.com | 281-111-2222
        </div>
      </div>
      <div className="container">
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
            <button className="btn btn-warning btn-lg" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
      <img src={undraw_scrum} className="App-logo" alt="logo" width="300" />
    </div>
  );
};

export default Contact;
