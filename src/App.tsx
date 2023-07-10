import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import HeroSection from "./components/hero-section";
import UploadField from "./components/upload_field";
import CardSection from "./components/card-section";
import Footer from "./components/footer";

function App() {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <UploadField />
            <CardSection />
            <Footer />
        </div>
    );
}

export default App;
