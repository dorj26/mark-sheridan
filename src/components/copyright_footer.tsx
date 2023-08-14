import { Box, Typography } from "@mui/material";
import React from "react";

const CopyrightFooter = () => {
    return (
        <Box sx={{ background: "#000" }}>
            <Box
                sx={{
                    maxWidth: "1200px",
                    width: "100%",
                    margin: "0 auto",
                    padding: "28px 0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <Typography sx={{ color: "#f6f6f8", fontSize: "15px" }}>
                    Copyright &copy; 2023 kode
                </Typography>
                <Typography sx={{ color: "#f6f6f8", fontSize: "15px" }}>
                    Powered by kode
                </Typography>
            </Box>
        </Box>
    );
};

export default CopyrightFooter;
