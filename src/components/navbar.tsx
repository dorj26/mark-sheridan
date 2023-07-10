import { AppBar, Box, Container, Typography } from "@mui/material";
import logo from "../assets/logo.png";
import React from "react";
import CustomButton from "./custom_button";

const navbarOptions: any = [
    { title: "Pricing" },
    { title: "FAQs" },
    { title: "Careers" },
    { title: "Demo" },
];

const Navbar = () => {
    const handleClickLogin = () => {};
    return (
        <AppBar sx={{ height: "72px", background: "#fff", display: "block" }}>
            <Box
                className="container"
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: "100%",
                    width: "100%",
                }}
            >
                <Box>
                    <img src={logo} alt="" />
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: 4,
                    }}
                >
                    {navbarOptions?.map((option: any) => (
                        <CustomButton
                            title={option?.title}
                            variant={"text"}
                            sx={{
                                height: "48px",
                                color: "#212427",
                            }}
                        />
                    ))}

                    <CustomButton
                        title="Login"
                        onClick={handleClickLogin}
                        sx={{
                            height: "48px",
                            width: "144px",
                            background: "#212427",
                            color: "#fff",
                            boxShadow: "0px 1px 4px 0px #00000040",
                            "&:hover": {
                                backgroundColor: "#212427",
                            },
                        }}
                    />
                </Box>
            </Box>
        </AppBar>
    );
};

export default Navbar;
