// import "bootstrap/dist/css/bootstrap.min.css";
// import { useState, useRef } from "react";
// import Button from "react-bootstrap/Button";
// import Col from "react-bootstrap/Col";
// import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";
// import Row from "react-bootstrap/Row";
// import emailjs from "@emailjs/browser";

// // service_c38ajgf
// // template_l5fpe5q
// // RM3NuvEdP0PYVz8Iz

// const ContactForm = () => {
//   const [validated, setValidated] = useState(false);
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const formRef = useRef();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     emailjs.send(
//       "service_c38ajgf",
//       "template_l5fpe5q",
//       {
//         from_name: form.name,
//         to_name: "Mauricio",
//         from_email: form.email,
//         to_email: "mauricio.zavala.ar@gmail.com",
//         message: form.message,
//       },
//       "RM3NuvEdP0PYVz8Iz"
//     )
//     .then(()=>{
//         alert('Thank you, I will get back to you as soon as possible');
//         setForm({
//             name: "",
//             email: "",
//             message: ""
//         })
//     },
//         (error) => {
//             setLoading(false);
//             console.log(error, 'Hey, we have an error!');
//             alert('Oh no! Something went wrong, please try again.')
//         }
//     )
//   };

//   const handleChange = (e:any) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   return (
//     <Row>
//       <Col>
//         <Form noValidate validated={validated} onSubmit={handleSubmit} ref={formRef}>
//           <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//             <Form.Label>Name</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Your name"
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               />
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//             <Form.Label>Email</Form.Label>
//             <Form.Control type="email" placeholder="Your email" name="email" value = {form.email} onChange={handleChange} />
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//             <Form.Label>Message</Form.Label>
//             <Form.Control
//               as="textarea"
//               rows={4}
//               placeholder="Send me a message"
//               name="message"
//               value={form.message}
//               onChange={handleChange}
//             />
//           </Form.Group>

//           <Button type="submit">{loading? "Sending..." : "Send"}</Button>
//         </Form>
//       </Col>
//     </Row>
//   );
// };

// export default ContactForm;
////
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useRef, ChangeEvent, FormEvent } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import emailjs from "@emailjs/browser";

// service_c38ajgf
// template_l5fpe5q
// RM3NuvEdP0PYVz8Iz

interface FormState {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [validated, setValidated] = useState(false);
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formRef.current) {
      if (formRef.current.checkValidity()) {
        setLoading(true);
        emailjs
          .send(
            "service_c38ajgf",
            "template_l5fpe5q",
            {
              from_name: form.name,
              to_name: "Mauricio",
              from_email: form.email,
              to_email: "mauricio.zavala.ar@gmail.com",
              message: form.message,
            },
            "RM3NuvEdP0PYVz8Iz"
          )
          .then(
            () => {
              alert(
                "Thank you, I will get back to you as soon as possible"
              );
              setForm({
                name: "",
                email: "",
                message: "",
              });
            },
            (error) => {
              setLoading(false);
              console.log(error, "Hey, we have an error!");
              alert("Oh no! Something went wrong, please try again.");
            }
          );
      } else {
        setValidated(true);
      }
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <Row>
      <Col>
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Your email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Send me a message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button type="submit">
            {loading ? "Sending..." : "Send"}
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default ContactForm;




///

// import React from 'react'
// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Row from 'react-bootstrap/Row';

// const ContactForm = () => {
//     const [validated, setValidated] = useState(false);

//   const handleSubmit = (event) => {
//     const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//       event.preventDefault();
//       event.stopPropagation();
//     }

//     setValidated(true);
//   };
//     return (

// <Row>
//     <Col>
//     <Form noValidate validated={validated} onSubmit={handleSubmit}>
//     <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//         <Form.Label>Name</Form.Label>
//         <Form.Control type="text" placeholder="Your name" />
//       </Form.Group>
//     <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control type="email" placeholder="name@example.com" />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//         <Form.Label>Message</Form.Label>
//         <Form.Control as="textarea" rows={3} placeholder="Send me a message" />
//       </Form.Group>
//       <Button type="submit">Send</Button>
//     </Form>
//     </Col>
// </Row>
//   );
// }

// export default ContactForm
