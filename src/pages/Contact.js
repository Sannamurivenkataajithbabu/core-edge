import React from "react";
import "./Contact.css";

function Contact() {
  return (

      <div className="contact-page">

        <div className="contact-wrapper">

          {/* CONNECT FORM */}
          <h2 className="title">Connect With Us. . . . . . .</h2>

          <div className="contact-card">
            <div className="image-box">
              <img src="/images/contact us.png" alt="Contact" />
            </div>

            <div className="form-box">
              <form>
                <label>Full Name</label>
                <input type="text" />

                <label>Email</label>
                <input type="email" />

                <label>Select Course</label>
                <select>
                  <option>-- Select Course --</option>
                </select>

                <label>Training Method</label>
                <div className="radio-group">
                  <label><input type="radio" /> Online</label>
                  <label><input type="radio" /> Offline</label>
                </div>

                <label>Mobile Number</label>
                <input type="text" />

                <button type="submit">Submit</button>
              </form>
            </div>
          </div>

          {/* HELP SECTION (AFTER CONNECT) */}
          <div className="help-section">
            <h2 className="help-title">Didn’t you find what you looking for?</h2>
            <p className="help-subtitle">
              We’re here to help you anytime. Choose the best way to connect with us.
            </p>

            <div className="help-grid">
              <div className="help-card">
                <img src="/images/chat with us.jpg" alt="Chat" />
                <h3>Chat with Us</h3>
                <p>Instant support for your training queries.</p>
                <a href="https://wa.me/919121461544" target="_blank" rel="noopener noreferrer">Start Chat →</a>
              </div>

              <div className="help-card">
                <img src="/images/Email support.jpg" alt="Email" />
                <h3>Email Support</h3>
                <p>Reach us anytime via email.</p>
                <a href="mailto:coreedgeacademy@gmail.com">Send Email →</a>
              </div>

              <div className="help-card">
                <img src="/images/whats app.jpg" alt="WhatsApp" />
                <h3>WhatsApp Us</h3>
                <p>Quick replies & updates on WhatsApp.</p>
                <a href="https://wa.me/919121461544">Chat Now →</a>
              </div>
            </div>
          </div>

          {/* LOCATION */}
          <div className="location-section">
            <h2 className="location-title">Our Location</h2>
            <iframe
              src="https://www.google.com/maps?q=CORE EDGE ACADEMY Hyderabad&output=embed"
              width="100%"
              height="500"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="CORE EDGE ACADEMY Location"
            ></iframe>
          </div>

        </div>
      </div>
  );
}

export default Contact;
