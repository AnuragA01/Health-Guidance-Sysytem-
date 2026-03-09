import { Footer } from "./Footer";
import "./styles/Homepage.css";
import React, { useEffect } from "react";
import initAOS from "./assets/aos";
import { useState } from "react";

export const Home = () => {
  useEffect(() => {
    initAOS();
  }, []);

  const [isHovered, setIsHovered] = useState(false);
  const [floatOffset, setFloatOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFloatOffset((prev) => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <main>
        <div className="min-vh-100 bg-dark position-relative overflow-hidden">
          {/* Animated background elements */}
          <div className="position-absolute top-0 start-0 w-100 h-100">
            {/* Floating clouds */}
            <div
              className="position-absolute top-20 start-10 w-50 h-32 bg-white bg-opacity-10 rounded-pill blur"
              style={{
                transform: `translateY(${Math.sin(floatOffset * 0.02) * 10}px)`,
              }}
            />
            <div
              className="position-absolute top-50 end-20 w-25 h-24 bg-white bg-opacity-8 rounded-pill blur"
              style={{
                transform: `translateY(${
                  Math.sin((floatOffset + 120) * 0.02) * 15
                }px)`,
              }}
            />

            {/* Geometric shapes */}
            <div
              className="position-absolute top-32 end-40 w-25 h-25 rounded-circle bg-white bg-opacity-5 border border-white border-opacity-10"
              style={{
                transform: `scale(${1 + Math.sin(floatOffset * 0.01) * 0.1})`,
              }}
            />

            {/* Animated gradient orbs */}
            <div
              className="position-absolute bottom-20 start-20 w-50 h-50 rounded-circle opacity-20"
              style={{
                background:
                  "radial-gradient(circle, #fbbf24, #f59e0b, transparent)",
                transform: `translate(${
                  Math.sin(floatOffset * 0.015) * 20
                }px, ${Math.cos(floatOffset * 0.015) * 20}px)`,
              }}
            />
          </div>

          {/* Main content */}
          <div className="position-relative z-10 d-flex flex-column align-items-center justify-content-center min-vh-100 px-3 text-center">
            {/* Main heading with animated dots */}
            <div className="mb-5">
              <h1 className="display-1 fw-bold text-white mb-4">
                Get fit
                <span
                  className="d-inline-block w-1 h-1 bg-warning rounded-circle ms-2 mb-4"
                  style={{
                    animation: "pulse 2s infinite",
                  }}
                />{" "}
                Have fun
                <span
                  className="d-inline-block w-1 h-1 bg-warning rounded-circle ms-2 mb-4"
                  style={{
                    animation: "pulse 2s infinite 0.5s",
                  }}
                />
              </h1>
            </div>

            {/* Subtitle */}
            <p
              className="h4 text-light mb-5 mx-auto"
              style={{ maxWidth: "800px" }}
            >
              It's fitness, but better! FunFit is how it should be. A fitness
              studio that takes the intensity and normality out of working out
              to create a fun and enjoyable environment.
            </p>

            {/* CTA Button */}
            <button
              className="btn btn-warning btn-lg px-5 py-3 fw-semibold rounded-pill transition-all overflow-hidden position-relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                transform: isHovered ? "scale(1.05)" : "scale(1)",
                boxShadow: isHovered ? "0 10px 20px rgba(0,0,0,0.2)" : "none",
              }}
            >
              <span className=" position-relative z-10 ">
                Join now!
              </span>
              <div
                className={`position-absolute top-0 start-0 w-100 h-100 bg-gradient transition-opacity ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  background: "linear-gradient(to right, #4299e1, #9f7aea)",
                }}
              />
            </button>

            {/* Illustrated characters section */}
            <div className="position-absolute bottom-0 start-0 end-0 h-50">
              {/* Person doing yoga pose */}
              <div
                className="position-absolute bottom-5 end-33 translate-middle-x"
                style={{
                  transform: `translateY(${
                    Math.sin((floatOffset + 60) * 0.02) * 8
                  }px) translateX(50%)`,
                }}
              >
                <div className="position-relative">
                  {/* Yoga person silhouette */}
                  <div className="w-4 h-4 bg-warning rounded-circle mb-2 mx-auto" />
                  <div className="w-2 h-6 bg-warning rounded mx-auto position-relative">
                    {/* Arms raised */}
                    <div className="position-absolute top-0 start-n5 w-3 h-1 bg-warning bg-opacity-75 rounded-pill rotate-n45" />
                    <div className="position-absolute top-0 end-n5 w-3 h-1 bg-warning bg-opacity-75 rounded-pill rotate-45" />
                  </div>
                  <div className="d-flex justify-content-center gap-1 mt-2">
                    <div className="w-1 h-2 bg-warning rounded-pill rotate-12" />
                    <div className="w-1 h-2 bg-warning rounded-pill rotate-n12" />
                  </div>
                </div>
              </div>

              {/* Person with weights */}
              <div
                className="position-absolute bottom-5 start-25"
                style={{
                  transform: `translateY(${
                    Math.sin(floatOffset * 0.025) * 6
                  }px)`,
                }}
              >
                <div className="position-relative">
                  <div className="w-3 h-3 bg-pink rounded-circle mb-2 mx-auto" />
                  <div className="w-1 h-5 bg-orange rounded mx-auto position-relative">
                    {/* Arms with weights */}
                    <div className="position-absolute top-0 start-n4 d-flex align-items-center">
                      <div className="w-1 h-1 bg-gray-600 rounded-circle" />
                      <div className="w-2 h-1 bg-pink rounded-pill" />
                    </div>
                    <div className="position-absolute top-0 end-n4 d-flex align-items-center">
                      <div className="w-2 h-1 bg-pink rounded-pill" />
                      <div className="w-1 h-1 bg-gray-600 rounded-circle" />
                    </div>
                  </div>
                  <div className="d-flex justify-content-center gap-1 mt-2">
                    <div className="w-1 h-2 bg-orange rounded-pill" />
                    <div className="w-1 h-2 bg-orange rounded-pill" />
                  </div>
                </div>
              </div>

              {/* Exercise equipment/mat */}
              <div className="position-absolute bottom-0 start-50 translate-middle-x">
                <div className="w-50 h-4 bg-purple bg-opacity-60 rounded-pill blur-sm" />
                <div className="w-25 h-2 bg-gray-700 rounded-pill mx-auto mt-n2 opacity-80" />
              </div>
            </div>
          </div>
        </div>

        <div className="container gympngs">
          <div className="row gympngs-1 container">
            <div className="col-12 col-md-4 mb-4 mb-md-0 d-flex flex-column align-items-center text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/256/10/10618.png"
                alt="Consistency Over Intensity"
                className="img-fluid mb-3"
              />
              <p className="text-wrap paragraph-adjust">
                Consistency Over Intensity: Focus on regular workouts rather
                than pushing too hard in a single session. Small, consistent
                efforts yield long-term results.
              </p>
            </div>
            <div className="col-12 col-md-4 mb-4 mb-md-0 d-flex flex-column align-items-center text-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfN8B-XLAu8DWyg_evevcYAaMpQuOtrUgwsmXvpQIeY8NUI6KWfdmnpkoE2qnrsshNx_8&usqp=CAU"
                alt="Mind-Muscle Connection"
                className="img-fluid mb-3"
              />
              <p className="text-wrap paragraph-adjust">
                Mind-Muscle Connection: Concentrate on the muscles you're
                working during each exercise. This improves form and maximizes
                gains from every rep.
              </p>
            </div>
            <div className="col-12 col-md-4 d-flex flex-column align-items-center text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/256/10/10699.png"
                alt="Rest and Recovery"
                className="img-fluid mb-3"
              />
              <p className="text-wrap paragraph-adjust">
                Rest and Recovery: Ensure you get adequate rest between
                workouts. Muscles grow and repair during recovery, making rest
                just as important as exercise.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center my-5 pt-5">
          <h1>Develop healthy habits</h1>
          <p className="lead">
            Count your calories, ensure you're meeting nutrient targets, and see
            your progress over time.
          </p>
        </div>

        <div className="container my-4">
          <div className="row text-center">
            <div className="col-md-6 col-lg-4 mb-4">
              <img
                src="https://cdn1.cronometer.com/webflow/cronometer-features-11.svg"
                alt=""
                className="img-fluid mb-3"
              />
              <h5>Track up to 82 micronutrients</h5>
              <p>Log your meals and track all your macro and micronutrients.</p>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
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
            <div className="col-md-6 col-lg-4 mb-4">
              <img
                src="https://cdn1.cronometer.com/webflow/cronometer-features-16.svg"
                alt=""
                className="img-fluid mb-3"
              />
              <h5>Custom diet settings</h5>
              <p>Set weight, macro & nutrient targets to meet your goals.</p>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
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
            <div className="col-md-6 col-lg-4 mb-4">
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
            <div className="col-md-6 col-lg-4 mb-4">
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
        <Footer />
      </main>
    </>
  );
};
