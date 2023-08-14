import { Box } from "@mui/material";
import React from "react";
import HeroSection from "../components/home/hero-section";
import Discover from "../components/home/discover";
import CardSection from "../components/home/card-section";
import ContactUsBlue from "../components/home/contact-us-blue";

const Home = () => {
    return (
        <Box>
            <HeroSection />
            <Discover />
            <CardSection />
            <ContactUsBlue />
        </Box>
    );
};

export default Home;
