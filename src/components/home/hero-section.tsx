import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import ContactUsForm from "./contact-us-form";

const HeroSection = () => {
    return (
        <Box sx={{ background: "#0089e4", paddingY: "120px" }}>
            <Box
                sx={{
                    maxWidth: "1140px",
                    width: "100%",
                    margin: "0 auto",
                }}
            >
                <Grid container>
                    <Grid item xs={12} md={6} sx={{ margin: "auto" }}>
                        <Typography
                            sx={{
                                fontSize: "48px",
                                color: "#fff",
                                fontWeight: 600,
                                mb: "20px",
                            }}
                        >
                            Hire lawyers and paralegals on-demand with kode
                        </Typography>
                        <Typography
                            sx={{ fontSize: "15px", color: "#fff", mb: "40px" }}
                        >
                            We connect businesses, law firms and in-house legal
                            teams with top-tier, pre-vetted lawyers and
                            paralegals for unparalleled, cost-effective legal
                            solutions. Experience the efficiency of hiring legal
                            talent on-demand, empowering businesses and legal
                            professionals alike.
                        </Typography>
                        <Button
                            sx={{
                                color: "#0089e4",
                                background: "#fff",
                                fontWeight: 400,
                                textTransform: "none",
                                borderRadius: "0",
                                height: "49px",
                                width: "170px",
                            }}
                        >
                            Know More
                        </Button>
                    </Grid>
                    <Grid xs={12} md={6}>
                        <ContactUsForm />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default HeroSection;
