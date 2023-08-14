import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import dollar_sign from "../../assets/card_icons/dollar_sign.svg";
import { card_details } from "../../utils/card_section_data";

const CardSection = () => {
    return (
        <Box sx={{ background: "#f6f6f8", padding: "50px 0" }}>
            <Box
                sx={{
                    maxWidth: "1140px",
                    width: "100%",
                    margin: "0 auto",
                }}
            >
                <Box sx={{ padding: "10px" }}>
                    <Typography
                        sx={{
                            textAlign: "center",
                            fontSize: "42px",
                            color: "#000",
                            fontWeight: 600,
                        }}
                    >
                        Why choose us?
                    </Typography>
                    <Grid container>
                        {card_details?.map((option: any) => (
                            <Grid
                                item
                                xs={12}
                                md={4}
                                sx={{ textAlign: "center" }}
                            >
                                <Box sx={{ padding: "35px" }}>
                                    <img
                                        src={option?.icon}
                                        alt=""
                                        width={"42px"}
                                        height={"42px"}
                                        style={{
                                            marginBottom: "20px",
                                        }}
                                    />
                                    <Typography
                                        sx={{
                                            fontSize: "18px",
                                            lineHeight: 1.7,
                                            fontWeight: 600,
                                            mb: "20px",
                                        }}
                                    >
                                        {option?.title}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: "15px",
                                            mb: "24px",
                                            color: "#192730",
                                        }}
                                    >
                                        {option?.content}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
};

export default CardSection;
