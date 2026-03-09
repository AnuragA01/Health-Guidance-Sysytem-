import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import initAOS from "./assets/aos";

export const AboutUs = () => {
  useEffect(() => {
    initAOS();
  }, []);
  return (
    <>
      <div
        id="about"
        style={{
          backgroundColor: "#f9f9f9",
          textAlign: "center",
          paddingBottom: "75px",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          ></div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "25px",
              gap: "30px",
              flexWrap: "wrap",
            }}
          >
            
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              style={{
                width: "225px",
                borderRadius: "10px",
                padding: "15px",
                backgroundColor: "white",
                objectFit: "cover",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
            >
              <img
                style={{
                  width: "200px",
                  height: "175px",
                  objectFit: "cover",
                  borderRadius: "15px",
                }}
                src="https://img.freepik.com/free-vector/man-profile-account-picture_24908-81754.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1719273600&semt=ais_user"
                alt="sagar"
              />
              <h4
                style={{
                  textAlign: "center",
                  margin: "0px",
                  padding: "0px",
                }}
              >
                Suraj Babar
              </h4>
            </div>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              style={{
                width: "225px",
                borderRadius: "10px",
                padding: "15px",
                backgroundColor: "white",
                objectFit: "cover",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
            >
              <img
                style={{
                  width: "185px",
                  height: "175px",
                  objectFit: "cover",
                  borderRadius: "15px",
                }}
                src="https://cdn.vectorstock.com/i/500p/87/43/modern-circle-avatar-vector-50758743.jpg"
                alt="sagar"
              />
              <h4
                style={{
                  textAlign: "center",
                  margin: "0px",
                  padding: "0px",
                }}
              >
                Dhruv Sakhare
              </h4>
              
            </div>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              style={{
                width: "225px",
                borderRadius: "10px",
                padding: "15px",
                backgroundColor: "white",
                objectFit: "cover",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
            >
              <img
                style={{
                  width: "185px",
                  height: "175px",
                  objectFit: "cover",
                  borderRadius: "15px",
                }}
                src="https://img.freepik.com/premium-vector/handsome-arabian-man-semi-flat-vector-character-head-brunette-curly-hair-editable-cartoon-avatar-icon-face-emotion-colorful-spot-illustration-web-graphic-design-animation_151150-16177.jpg"
                alt="sagar"
              />
              <h4
                style={{
                  textAlign: "center",
                  margin: "0px",
                  padding: "0px",
                }}
              >
                Anurag Aski 
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
