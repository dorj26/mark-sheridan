import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import fileIcon from "../../assets/alternate_file_icon.svg";

const DownloadFile = () => {
    const handleClickDownload = () => {};

    return (
        <Box
            sx={{
                boxShadow: "0px 1px 4px 0px #00000040",
                borderRadius: "6px",
                height: "45px",
                mt: 4,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                px: 1,
                background: "#f6f6f8",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                }}
            >
                <img src={fileIcon} alt="" />
                <Typography sx={{ color: "#0089e4" }}>
                    Generated File
                </Typography>
            </Box>
            <IconButton onClick={handleClickDownload}>
                <DownloadRoundedIcon sx={{ color: "#0089e4" }} />
            </IconButton>
        </Box>
    );
};

export default DownloadFile;
