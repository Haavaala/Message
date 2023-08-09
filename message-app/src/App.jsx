import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import MessagePage from "./pages/MessagePage/MessagePage";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./components/Navigation/Navigation";


export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<MessagePage />} />
      </Routes>
      <NavigationContainer>
        <Navigation/>
      </NavigationContainer>
    </div>
  );
}
