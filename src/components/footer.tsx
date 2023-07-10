import { Box, Typography } from "@mui/material";
import React from "react";
import logo from "../assets/logo-white.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: "#212427", py: 10 }}>
            <Box
                sx={{
                    maxWidth: "1100px",
                    width: "100%",
                    margin: "0 auto",
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <Box>
                    <Box sx={{ mb: 2 }}>
                        <img src={logo} alt="" />
                    </Box>
                    <Typography sx={{ color: "#919191", fontSize: 16, mb: 1 }}>
                        About us
                    </Typography>
                    <Typography sx={{ color: "#919191", fontSize: 16, mb: 1 }}>
                        Careers
                    </Typography>
                    <Typography sx={{ color: "#919191", fontSize: 16, mb: 1 }}>
                        Blog
                    </Typography>
                </Box>

                <Box>
                    <Box sx={{ mb: 1.5 }}>
                        <Typography
                            sx={{
                                color: "#fff",
                                fontSize: 24,
                                mb: 1,
                                fontWeight: 600,
                            }}
                        >
                            Contact Us
                        </Typography>
                    </Box>
                    <Typography sx={{ color: "#919191", fontSize: 16, mb: 1 }}>
                        Help
                    </Typography>
                    <Typography sx={{ color: "#919191", fontSize: 16, mb: 1 }}>
                        FAQ
                    </Typography>
                </Box>

                <Box>
                    <Box sx={{ mb: 1.5 }}>
                        <Typography
                            sx={{
                                color: "#fff",
                                fontSize: 24,
                                mb: 1,
                                fontWeight: 600,
                            }}
                        >
                            Contact Us
                        </Typography>
                    </Box>
                    <Typography sx={{ color: "#919191", fontSize: 16, mb: 1 }}>
                        Abput us
                    </Typography>
                    <Typography sx={{ color: "#919191", fontSize: 16, mb: 1 }}>
                        Careers
                    </Typography>
                    <Typography sx={{ color: "#919191", fontSize: 16, mb: 1 }}>
                        Blog
                    </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box>
                        <Typography
                            sx={{
                                color: "#fff",
                                fontSize: 24,
                                mb: 1,
                                fontWeight: 600,
                            }}
                        >
                            Let's stay connected
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-around",
                            }}
                        >
                            <img src={facebook} alt="" />
                            <img src={twitter} alt="" />
                            <img src={instagram} alt="" />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;
