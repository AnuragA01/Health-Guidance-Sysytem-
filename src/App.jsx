import React from "react";
import { ArtContextProvider } from "./components/Dhruv-components/context/artContextProv";

import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Sagar-components/Home";
import { Navbar } from "./components/Sagar-components/Navbar";
import { Articles } from "./components/Dhruv-components/components/articles";
import { About } from "./components/Dhruv-components/components/about";
import { Profile } from "./components/Sagar-components/Profile";
import { Login } from "./components/Sagar-components/Login";
import { Signup } from "./components/Sagar-components/Signup";
import { ForgotPassword } from "./components/Sagar-components/ForgotPassword";
import { ResetPassword } from "./components/Sagar-components/ResetPassword";
import { LearnMore } from "./components/Dhruv-components/components/learnmore";
import { PhysicalHealthExercises } from "./components/Aski-components/PhysicalHealthExercises";
import { NutritionFactsComponent } from "./components/Aski-components/NutritionFactsComponent";
import { DietPlanning } from "./components/Aski-components/MealLogger";
import { BMICalculator } from "./components/Dhruv-components/components/BMICalculator";
import { Chatbot } from "./components/Sagar-component/Chatbot";
import WeightManager from "./components/Aski-components/WeightManager";

function App() {
  return (
    <>
      <ArtContextProvider>
        <Navbar />
        {/* <Chatbot /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/learn" element={<LearnMore />} />
          <Route path="/physicalHealth" element={<PhysicalHealthExercises />} />
          <Route path="/nutration" element={<NutritionFactsComponent />} />
          <Route path="/mealLoger" element={<DietPlanning />} />
          <Route path="/bmiCal" element={<BMICalculator />} />
          <Route path="/WeightManager" element={<WeightManager />} />
        </Routes>
      </ArtContextProvider>
    </>
  );
}

export default App;
