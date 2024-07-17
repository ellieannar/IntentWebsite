import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: ''
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_q1ozox1',
      'website_email_response',
      formData,
      'erBTNbdAFEvboIeSC'
    ).then((response) => {
      setResponseMessage('Your message has been sent!');
    }).catch((error) => {
      setResponseMessage('Error sending message. Please try again.');
    });

    setFormData({
      from_name: '',
      from_email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-us">
      <div className="contact-form-container">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="from_name">Name</label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="from_email">Email</label>
            <input
              type="email"
              id="from_email"
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
        {responseMessage && <p>{responseMessage}</p>}
      </div>
      <div className="contact-info">
        <div>
            <h2>We'd Like to Hear From You</h2>
            <p>Thank you for reaching out! Please fill out the form on the left with any questions or comments you have. Our team will get back to you as soon as possible. We value your feedback and are here to assist you with anything you need.</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
