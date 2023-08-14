import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import HeroSection from "./components/hero-section";
import UploadField from "./components/upload_field";
import CardSection from "./components/card-section";
import Footer from "./components/footer";
import { Box } from "@mui/material";
import Home from "./pages/home";
import Demo from "./pages/demo";
import CopyrightFooter from "./components/copyright_footer";

function App() {
    return (
        <Box>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path={"/"} element={<Home />} />

                    <Route path={"/demo"} element={<Demo />} />
                </Routes>
            </BrowserRouter>
            {/* <HeroSection />
            <UploadField />
            <CardSection />
            <Footer /> */}
            <CopyrightFooter />
        </Box>
    );
}

export default App;
