import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import CustomInputField from "../ui/custom_textfield";

const ContactUsForm = () => {
    return (
        <Box
            sx={{
                width: "456px !important",
                background: "#f6f6f8",
                margin: "auto",
            }}
        >
            <Box sx={{ padding: "40px" }}>
                <Typography
                    sx={{
                        fontSize: "22px",
                        color: "#000",
                        lineHeight: 1.8,
                        fontWeight: 600,
                        mb: 2.5,
                    }}
                >
                    Contact Us Today
                </Typography>
                <Typography
                    sx={{ color: "#192730", fontSize: "15px", mb: 3.5 }}
                >
                    Expand your legal team with on-demand lawyers and paralegals
                </Typography>
                <Box>
                    <CustomInputField
                        fieldName={"name"}
                        placeholder="Your Name"
                        sx={{ mb: 2.5 }}
                    />
                    <CustomInputField
                        fieldName={"email"}
                        placeholder="Your Email"
                        sx={{ mb: 2.5 }}
                    />
                    <CustomInputField
                        fieldName={"org"}
                        placeholder="Organisation"
                        sx={{ mb: 2.5 }}
                    />
                    <CustomInputField
                        fieldName={"requirement"}
                        placeholder="Tell us your requirement"
                        multiline={true}
                        sx={{ mb: 2.5 }}
                        rows={8}
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
                        }}
                    >
                        Get Started
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default ContactUsForm;
