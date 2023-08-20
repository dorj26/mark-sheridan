import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import CustomInputField from "../ui/custom_textfield";
import CustomButton from "../custom_button";
import { postForm } from "../../config/axiosClient";

interface props {
    setShowToastMessage: any;
    setSeverity: any;
    setToastMessage: any;
    setOpenCustomLoader: any;
    onSuccessChangeStep: any;
    saveFirstFile: any;
}

const UploadFile1: React.FunctionComponent<props> = ({
    setShowToastMessage,
    setSeverity,
    setToastMessage,
    setOpenCustomLoader,
    onSuccessChangeStep,
    saveFirstFile,
}) => {
    const [file, setFile] = useState<any | {}>({});
    const [uploadedFile, setUploadedFile] = useState<any | {}>({});

    const handleFieldClick = () => {
        document.getElementById("file-upload-field-1")?.click();
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
        setTimeout(() => {
            let tempObj: any = { name: file?.name };
            // remove setTimeout. In response of Api, store file in uploadFile state.
            // Add Toast Message.
            setUploadedFile(tempObj);
            setOpenCustomLoader(false);
            setShowToastMessage(true);
            setSeverity("success");
            onSuccessChangeStep();
            saveFirstFile(tempObj);
            setToastMessage("Please upload the second file");
            return;
        }, 2000);
        return;
        let formData = new FormData();
        formData.set("file", file);
        postForm("upload", formData).then((res: any) => {
            console.log(res);

            setShowToastMessage(true);
            setSeverity("success");
            setToastMessage("Your file is ready for download");
            onSuccessChangeStep();
            return;
        });
    };

    return (
        <>
            <Typography
                sx={{ color: "#fff", mb: 1, fontSize: "14px", fontWeight: 500 }}
            >
                Please upload the first file:
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                }}
            >
                <input
                    type="file"
                    hidden
                    id={"file-upload-field-1"}
                    onChange={handleFileChange}
                    multiple={false}
                />
                <CustomInputField
                    fieldName={"file-upload-field-1"}
                    sx={{
                        width: "100%",
                        backgroundColor: "#fff",
                        cursor: "pointer",
                        ".MuiTextField-root": {
                            cursor: "pointer",
                        },
                    }}
                    onClick={handleFieldClick}
                    placeholder="Select a file to upload"
                    InputProps={{
                        readOnly: true,
                    }}
                    value={file?.name}
                />

                <CustomButton
                    title={"Upload"}
                    sx={{
                        height: "48.5px",
                        width: "120px",
                        background: "#fff",
                        color: "#1976d2",
                        borderRadius: "0px",
                        boxShadow: "none",
                        "&:hover": {
                            backgroundColor: "#efefef",
                        },
                        "&.Mui-disabled": {
                            backgroundColor: "#c3c3c3 !important",
                        },
                        fontWeight: 400,
                    }}
                    disabled={file?.name ? false : true}
                    onClick={handeClickUpload}
                />
            </Box>
        </>
    );
};

export default UploadFile1;
