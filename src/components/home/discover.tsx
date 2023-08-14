import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import logo from "../../assets/kode-logo-large.png";

const Discover = () => {
    return (
        <Box
            sx={{
                padding: "120px 0",
            }}
        >
            <Box sx={{ maxWidth: "780px", width: "100%", margin: "0 auto" }}>
                <Typography
                    sx={{
                        fontSize: "42px",
                        color: "#000",
                        fontWeight: 600,
                        textAlign: "center",
                        mb: "50px",
                    }}
                >
                    Expert legal talent on-demand
                </Typography>

                <Typography
                    sx={{
                        textAlign: "center",
                        fontSize: "15px",
                        color: "#192730",
                        mb: "96px",
                    }}
                >
                    kode takes the guesswork out of finding the perfect legal
                    expert for your business. Our comprehensive screening
                    process ensures you access highly skilled and experienced
                    professionals who deliver exceptional results.
                </Typography>
                <Divider variant="middle" />
            </Box>
            <Box sx={{ maxWidth: "937px", width: "100%", margin: "0 auto" }}>
                <Grid container>
                    <Grid item md={6} sx={{ margin: "auto" }}>
                        <Box sx={{ padding: "50px 0" }}>
                            <Typography
                                sx={{
                                    fontSize: "42px",
                                    fontWeight: 600,
                                    color: "#000",
                                    mb: "44px",
                                }}
                            >
                                Discover the future of legal work
                            </Typography>
                            <Box sx={{ width: "448.5px" }}>
                                <img src={logo} alt="" width={"100%"} />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={6}>
                        <Box sx={{ padding: "50px" }}>
                            <Typography
                                sx={{
                                    fontSize: "18px",
                                    fontWeight: 600,
                                    mb: "20px",
                                }}
                            >
                                Simple and Easy Solution
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: "15px",
                                    color: "#192730",
                                    mb: "94px",
                                }}
                            >
                                Hire lawyers and paralegals on-demand for your
                                team and experience the benefits of flexibility,
                                cost savings, and diverse expertise, surpassing
                                the limitations of the traditional legal service
                                industry.
                            </Typography>
                            <Box sx={{ mb: 6 }}>
                                <Box sx={{ display: "flex" }}>
                                    <KeyboardDoubleArrowRightIcon
                                        sx={{ mr: 1, color: "#0089e4" }}
                                    />
                                    <Typography
                                        sx={{
                                            fontSize: "15px",
                                            color: "#192730",
                                        }}
                                    >
                                        Tell us your requirement
                                    </Typography>
                                </Box>
                                <Box sx={{ display: "flex" }}>
                                    <KeyboardDoubleArrowRightIcon
                                        sx={{ mr: 1, color: "#0089e4" }}
                                    />
                                    <Typography
                                        sx={{
                                            fontSize: "15px",
                                            color: "#192730",
                                        }}
                                    >
                                        Get matched with top legal professionals
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <KeyboardDoubleArrowRightIcon
                                        sx={{ mr: 1, color: "#0089e4" }}
                                    />
                                    <Typography
                                        sx={{
                                            fontSize: "15px",
                                            color: "#192730",
                                        }}
                                    >
                                        Review candidate profiles and engage the
                                        perfect candidate for your project
                                    </Typography>
                                </Box>
                            </Box>

                            <Button
                                variant="contained"
                                sx={{
                                    color: "white",
                                    textTransform: "none",
                                    fontWeight: 400,
                                    borderRadius: "0",
                                    height: "49px",
                                    width: "161px",
                                    boxShadow: "none",
                                }}
                            >
                                Hire now
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Discover;
