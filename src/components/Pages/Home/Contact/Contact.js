import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

const Contact = () => {
  return (
    <div className="py-5" style={{ backgroundColor: "#FBD062" }}>
      <Container>
        <Row className="justify-content-between">
          <Col xs={6} md={5}>
            <div className="left-contact">
              <h2 className="mb-3">
                Let us handle your project, professionally.
              </h2>
              <p className="">
                With well written codes, we build amazing apps for all
                platforms, mobile and web apps in general.
              </p>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="right-contact">
              <Form>
                  <Form.Control className="mb-3 rounded-0" type="email" placeholder="Your email address" />
                  <Form.Control className="mb-3 rounded-0" type="text" placeholder="Your name / company’s name" />
                  <Form.Control className="mb-3 rounded-0 " style={{height:'150px'}} as="textarea" placeholder="Your message" />
                <button className="btn btn-dark text-white px-5" type="submit">
                  Send
                </button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
