import { Box, Card, Grid, Typography } from "@mui/material";
import React from "react";
import logo1 from "../assets/logo1.svg";
import logo2 from "../assets/logo2.svg";
import logo3 from "../assets/logo3.svg";
import logo4 from "../assets/logo4.svg";

const CardSection = () => {
    return (
        <Box sx={{ maxWidth: "1100px", width: "100%", margin: "0 auto 72px" }}>
            <Typography
                sx={{ fontSize: "32px", textAlign: "center", color: "#212427" }}
            >
                Odio aenean sed adipiscing
            </Typography>
            <Typography
                sx={{
                    fontSize: "18px",
                    textAlign: "center",
                    color: "#212427",
                    mb: 6,
                }}
            >
                Integer enim neque volutpat ac tincidunt vitae. Sit amet
                facilisis magna etiam tempor orci eu.
            </Typography>

            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Card
                    sx={{
                        width: "200px",
                        height: "200px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#212427",
                        borderRadius: "14px",
                        boxShadow: "0px 1px 4px 0px #00000040",
                        position: "relative",
                    }}
                >
                    <Box sx={{ position: "relative" }}>
                        <img src={logo1} alt="" />
                        <Typography
                            sx={{
                                color: "#fff",
                                position: "absolute",
                                left: 6,
                                mt: 1,
                            }}
                        >
                            Amet
                        </Typography>
                    </Box>
                </Card>
                <Card
                    sx={{
                        width: "200px",
                        height: "200px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#212427",
                        borderRadius: "14px",
                        boxShadow: "0px 1px 4px 0px #00000040",
                        position: "relative",
                    }}
                >
                    <Box sx={{ position: "relative" }}>
                        <img src={logo2} alt="" />
                        <Typography
                            sx={{
                                color: "#fff",
                                position: "absolute",
                                left: 6,
                                mt: 1,
                            }}
                        >
                            Vitoe
                        </Typography>
                    </Box>
                </Card>
                <Card
                    sx={{
                        width: "200px",
                        height: "200px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#212427",
                        borderRadius: "14px",
                        boxShadow: "0px 1px 4px 0px #00000040",
                        position: "relative",
                    }}
                >
                    <Box sx={{ position: "absolute" }}>
                        <img src={logo3} alt="" />
                        <Typography
                            sx={{
                                color: "#fff",
                                position: "absolute",
                                left: 6,
                                mt: 1,
                            }}
                        >
                            Odio
                        </Typography>
                    </Box>
                </Card>
                <Card
                    sx={{
                        width: "200px",
                        height: "200px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#212427",
                        borderRadius: "14px",
                        boxShadow: "0px 1px 4px 0px #00000040",
                        position: "relative",
                    }}
                >
                    <Box sx={{ position: "absolute" }}>
                        <img src={logo4} alt="" />
                        <Typography
                            sx={{
                                color: "#fff",
                                position: "absolute",
                                left: 6,
                                mt: 1,
                            }}
                        >
                            Etiom
                        </Typography>
                    </Box>
                </Card>
            </Box>
        </Box>
    );
};

export default CardSection;
