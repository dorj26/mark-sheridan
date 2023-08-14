import { AppBar, Box, Button, Container, Typography } from "@mui/material";
import logo from "../assets/kode-logo.png";
import { useNavigate } from "react-router-dom";
import React from "react";
import CustomButton from "./custom_button";

const navbarOptions: any = [
    { title: "Home", route: "/" },
    { title: "About", route: "/" },
    { title: "Join", route: "/" },
    { title: "FAQ", route: "/" },
];

const Navbar = () => {
    const navigate = useNavigate();
    const handleClickApply = () => {
        navigate("/demo");
    };

    return (
        <AppBar
            sx={{
                height: "100px",
                background: "#fff",
                display: "block",
                position: "unset",
                boxShadow: "none",
            }}
        >
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
                <Box sx={{ cursor: "pointer" }} onClick={() => navigate("/")}>
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
                            onClick={() => navigate(option.route)}
                        />
                    ))}

                    <Button
                        sx={{
                            boxShadow: "none",
                            borderRadius: 0,
                            textTransform: "none",
                            height: "49px",
                            fontSize: "18px",
                        }}
                        variant={"contained"}
                        onClick={handleClickApply}
                    >
                        Demo
                    </Button>
                </Box>
            </Box>
        </AppBar>
    );
};

export default Navbar;
