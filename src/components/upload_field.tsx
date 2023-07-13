import { Box, IconButton, Input, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import CustomButton from "./custom_button";
import CustomLoader from "./custom_loader";
import fileIcon from "../assets/file_icon.svg";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import ToastMessage from "./toast_message";
import { postForm } from "../config/axiosClient";

const UploadField = () => {
    const [file, setFile] = useState<any | {}>({});
    const [uploadedFile, setUploadedFile] = useState<any | {}>({});
    const [openCustomLoader, setOpenCustomLoader] = useState<boolean>(false);

    const [toastMessage, setToastMessage] = useState<string>("");
    const [severity, setSeverity] = useState<any>(undefined);
    const [showToastMessage, setShowToastMessage] = useState<boolean>(false);

    const handleFieldClick = () => {
        document.getElementById("file-upload-field")?.click();
    };

    const handleFileChange = (event: any) => {
        let files: any = event.target.files;
        if (files.length) {
            if (files[0].type !== "text/csv") {
                setShowToastMessage(true);
                setSeverity("error");
                setToastMessage("File type is incorrect");
                return;
            }
            setFile(files[0]);
            return;
        }
    };

    const handeClickUpload = () => {
        setOpenCustomLoader(true);
        let formData = new FormData();
        formData.set("file", file);
        // api goes here.
        postForm("", formData).then((res: any) => {
            console.log(res);

            setShowToastMessage(true);
            setSeverity("success");
            setToastMessage("Your file is ready for download");
            return;
        });
        setTimeout(() => {
            let tempObj: any = { name: file?.name };
            // remove setTimeout. In response of Api, store file in uploadFile state.
            // Add Toast Message.
            setUploadedFile(tempObj);
            setOpenCustomLoader(false);
        }, 2000);
    };

    const handleClickDownload = () => {
        // Download api goes here.
    };

    const closeToastMessageCallback = (
        event?: React.SyntheticEvent | Event,
        reason?: string
    ) => {
        if (reason === "clickaway") {
            return;
        }

        setShowToastMessage(false);
        setToastMessage("");
        setSeverity(undefined);
    };

    return (
        <>
            <CustomLoader open={openCustomLoader} />
            <Box
                sx={{
                    maxWidth: "920px",
                    width: "100%",
                    margin: "0 auto",
                    position: "relative",
                    top: "-28px",
                }}
            >
                <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <input
                        type="file"
                        hidden
                        id={"file-upload-field"}
                        onChange={handleFileChange}
                        multiple={false}
                    />
                    <TextField
                        sx={{
                            width: "100%",
                            backgroundColor: "#fff",
                            cursor: "pointer",
                            ".MuiTextField-root": {
                                cursor: "pointer",
                            },
                        }}
                        placeholder="Select a file to upload"
                        InputProps={{
                            readOnly: true,
                        }}
                        value={file?.name}
                        fullWidth
                        onClick={handleFieldClick}
                    />

                    <CustomButton
                        title={"Upload"}
                        sx={{
                            height: "48px",
                            width: "120px",
                            background: "#212427",
                            color: "#fff",
                            boxShadow: "0px 1px 4px 0px #00000040",
                            "&:hover": {
                                backgroundColor: "#212427",
                            },
                        }}
                        disabled={file?.name ? false : true}
                        onClick={handeClickUpload}
                    />
                </Box>
                {uploadedFile?.name ? (
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
                            <Typography>{uploadedFile?.name}</Typography>
                        </Box>
                        <IconButton onClick={handleClickDownload}>
                            <DownloadRoundedIcon sx={{ color: "#212427" }} />
                        </IconButton>
                    </Box>
                ) : null}
            </Box>
            <ToastMessage
                open={showToastMessage}
                message={toastMessage}
                severity={severity}
                handleClose={closeToastMessageCallback}
            />
        </>
    );
};

export default UploadField;
