import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import CustomInputField from "../ui/custom_textfield";

const ContactUsBlue = () => {
    return (
        <Box sx={{ maxWidth: "1140px", margin: "0 auto", pt: "10px" }}>
            <Box sx={{ background: "#0274be", padding: "86px", mb: "94px" }}>
                <Typography
                    sx={{
                        fontSize: "30px",
                        color: "#fff",
                        fontWeight: 600,
                        textAlign: "center",
                        mb: 2.5,
                    }}
                >
                    Contact us Today
                </Typography>
                <Grid container>
                    <Grid item xs={4}>
                        <Typography
                            sx={{
                                fontSize: "25px",
                                color: "#fff",
                                fontWeight: 600,
                                mb: 2.5,
                            }}
                        >
                            Reach Us
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: "18px",
                                color: "#fff",
                                fontWeight: 600,
                                mb: 2.5,
                            }}
                        >
                            Email :
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: "15px",
                                color: "#fff",
                                mb: "44px",
                            }}
                        >
                            info@kode.legal
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: "18px",
                                color: "#fff",
                                fontWeight: 600,
                                mb: 2.5,
                            }}
                        >
                            Phone :
                        </Typography>
                        <Typography
                            sx={{ fontSize: "15px", color: "#fff", mb: "24px" }}
                        >
                            +44 742 535 0070
                        </Typography>
                    </Grid>
                    <Grid xs={12} md={8}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <CustomInputField
                                    fieldName={"name-blue"}
                                    placeholder="Name"
                                    sx={{ mb: 2.5 }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <CustomInputField
                                    fieldName={"email-blue"}
                                    placeholder="Email"
                                    sx={{ mb: 2.5 }}
                                />
                            </Grid>
                        </Grid>
                        <CustomInputField
                            fieldName={"organisation-blue"}
                            placeholder="Organisation"
                            sx={{ mb: 2.5 }}
                        />
                        <CustomInputField
                            fieldName={"requirement"}
                            placeholder="Tell us your requirement"
                            multiline={true}
                            sx={{ mb: 2.5 }}
                            rows={5}
                        />
                        <Button
                            color={"primary"}
                            variant="contained"
                            sx={{
                                height: "49px",
                                boxShadow: "none",
                                textTransform: "none",
                                borderRadius: 0,
                                width: "150px",
                                fontWeight: 400,
                                mb: "40px",
                                background: "#0089e4",
                            }}
                        >
                            Get Started
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default ContactUsBlue;
