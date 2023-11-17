import React, { useState } from 'react';

import { Button, Form, InputGroup } from 'react-bootstrap';


import '../css/Contact.css'; // Import your Contact component CSS file

function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here, you can implement the logic to send the email using formData.
    // You can use an email library or an API to handle the email sending.
  };

  return (
   
    <div className="contact-me">
      
      <h2>Contact Me</h2>
      <div className="contact-form">
        <p>Email: mauricio.zavala.ar@gmail.com</p>
        <p>Cel Phone: +52 81 1044 4256</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <InputGroup>
            <Form.Control
              placeholder="Topic"
              as="textarea"
              aria-label="With textarea"
              value={formData.subject}
              onChange={handleChange}
            />
          </InputGroup>
          <InputGroup>
            <Form.Control
              placeholder="Description"
              as="textarea"
              aria-label="With textarea"
              value={formData.description}
              onChange={handleChange}
            />
          </InputGroup>
          <Button variant="info" type="submit">
            Send
          </Button>
        </form>
      </div>
    </div>
  
  );
}

export default Contact;