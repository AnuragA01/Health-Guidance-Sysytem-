import { Footer } from "./Footer";
import "./styles/Profile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import initAOS from "./assets/aos";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const Profile = () => {
  useEffect(() => {
    initAOS();
  }, []);
  
  return (
    <>
      <section className="py-5">
        <Container className="my-5">
          <Row className="justify-content-center">
            <Col md={4} className="mb-4" data-aos="fade-up">
              <Card className="h-100 shadow-sm">
                <Card.Img 
                  variant="top" 
                  src="https://cdn1.cronometer.com/webflow/cronometer-features-11.svg"
                  className="p-4"
                  style={{ height: "200px", objectFit: "contain" }} 
                />
                <Card.Body className="text-center">
                  <Card.Title>Nutrition Facts</Card.Title>
                  <Card.Text>
                    Track your daily nutrition intake and make informed decisions about your diet.
                  </Card.Text>
                  <Button variant="warning" href="/nutration">
                    View Nutrition Facts
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={4} className="mb-4" data-aos="fade-up" data-aos-delay="100">
              <Card className="h-100 shadow-sm">
                <Card.Img 
                  variant="top" 
                  src="https://cdn1.cronometer.com/webflow/cronometer-features-14.svg"
                  className="p-4"
                  style={{ height: "200px", objectFit: "contain" }} 
                />
                <Card.Body className="text-center">
                  <Card.Title>BMI Calculator</Card.Title>
                  <Card.Text>
                    Calculate your Body Mass Index and understand what it means for your health.
                  </Card.Text>
                  <Button variant="warning" href="/BmiCal">
                    Calculate BMI
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={4} className="mb-4" data-aos="fade-up" data-aos-delay="200">
              <Card className="h-100 shadow-sm">
                <Card.Img 
                  variant="top" 
                  src="https://cdn1.cronometer.com/webflow/cronometer-features-16.svg"
                  className="p-4"
                  style={{ height: "200px", objectFit: "contain" }} 
                />
                <Card.Body className="text-center">
                  <Card.Title>Weight Manage</Card.Title>
                  <Card.Text>
                    Monitor your health metrics and progress toward your wellness goals.
                  </Card.Text>
                  <Button variant="warning" href="/WeightManager">
                    Track Weight
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        <div className="text-center my-5 pt-5">
          <h1>Develop healthy habits</h1>
          <p>
            Count your calories, ensure you're meeting nutrient targets, and see
            your progress over time.
          </p>
        </div>

        <div className="container my-4 pb-4">
          <div className="habbits row text-center">
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
              className="col-md-6 col-lg-4 mb-4"
            >
              <img
                src="https://cdn1.cronometer.com/webflow/cronometer-features-11.svg"
                alt=""
                className="img-fluid mb-3"
              />
              <h5>Track up to 82 micronutrients</h5>
              <p>Log your meals and track all your macro and micronutrients.</p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
              className="col-md-6 col-lg-4 mb-4"
            >
              <img
                src="https://cdn1.cronometer.com/webflow/cronometer-features-14.svg"
                alt=""
                className="img-fluid mb-3"
              />
              <h5>Log meals and exercise</h5>
              <p>
                Plus, you can create custom foods, recipes, exercises and
                biometrics!
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
              className="col-md-6 col-lg-4 mb-4"
            >
              <img
                src="https://cdn1.cronometer.com/webflow/cronometer-features-16.svg"
                alt=""
                className="img-fluid mb-3"
              />
              <h5>Custom diet settings</h5>
              <p>Set weight, macro & nutrient targets to meet your goals.</p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
              className="col-md-6 col-lg-4 mb-4"
            >
              <img
                src="https://cdn1.cronometer.com/webflow/cronometer-features-15.svg"
                alt=""
                className="img-fluid mb-3"
              />
              <h5>Fasting timer</h5>
              <p>
                Track your intermittent fasts and see their effect over time.
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
              className="col-md-6 col-lg-4 mb-4"
            >
              <img
                src="https://cdn1.cronometer.com/webflow/cronometer-features-12.svg"
                alt=""
                className="img-fluid mb-3"
              />
              <h5>Diet support</h5>
              <p>
                Whether your Keto, Vegan, or on one recommended by your doctor.
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
              className="col-md-6 col-lg-4 mb-4"
            >
              <img
                src="https://cdn1.cronometer.com/webflow/cronometer-features-15.svg"
                alt=""
                className="img-fluid mb-3"
              />
              <h5>Fasting timer</h5>
              <p>
                Track your intermittent fasts and see their effect over time.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export { Profile };