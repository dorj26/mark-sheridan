import { Box, Typography } from "@mui/material";
import React from "react";
import background from "../assets/hero-background.png";

const HeroSection = () => {
    return (
        <Box
            sx={{
                mt: "72px",
                height: "327px",
                background: `url(${background})`,
                backgroundColor: "#fff",
                backgroundBlendMode: "difference",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Typography sx={{ fontSize: "36px", fontWeight: 600 }}>
                Lorem ipsum dolor sit amet
            </Typography>
        </Box>
    );
};

export default HeroSection;
