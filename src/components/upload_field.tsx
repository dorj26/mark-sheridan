import { Box, IconButton, Input, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import CustomLoader from "./custom_loader";
import ToastMessage from "./toast_message";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import UploadFile1 from "./demo/upload_file1";
import GenerateFileStep3 from "./demo/generate_file_step3";
import UploadFile2 from "./demo/upload_file2";
import DownloadFile from "./demo/download_file";
import { postForm } from "../config/axiosClient";

const steps = ["Upload 1st file", "Upload 2nd file", "Generate"];

const UploadField = () => {
    const [openCustomLoader, setOpenCustomLoader] = useState<boolean>(false);

    const [toastMessage, setToastMessage] = useState<string>("");
    const [severity, setSeverity] = useState<any>(undefined);
    const [showToastMessage, setShowToastMessage] = useState<boolean>(false);
    const [first_file, set_first_file] = useState<any>({});
    const [second_file, set_second_file] = useState<any>({});

    const [downloadFile, setDownloadFile] = useState<any>({});

    // Stepper Values
    const [activeStep, setActiveStep] = useState<number>(0);
    const [completed, setCompleted] = useState<{
        [k: number]: boolean;
    }>({});

    const totalSteps = () => {
        return steps.length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };
    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? // It's the last step, but not all steps have been completed,
                  // find the first step that has been completed
                  steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
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

    const handleUploadFile = () => {
        setOpenCustomLoader(true);
        let formData = new FormData();
        formData.set("file_1", first_file);
        formData.set("file_2", second_file);
        postForm("upload", formData).then((res: any) => {
            let blob = new Blob([res.data], {
                type: "text/csv",
            });
            console.log(res);
            setDownloadFile(blob);
            setShowToastMessage(true);
            setSeverity("success");
            setToastMessage("Your file is ready for download");
            setOpenCustomLoader(false);
            return;
        });
    };

    const handleClickDownload = () => {
        // Download api goes here.
        const url = window.URL.createObjectURL(downloadFile);

        // Create a temporary link element
        const link = document.createElement("a");
        link.href = url;
        link.download = "data.csv";

        // Trigger the download
        link.click();

        // Clean up the temporary URL
        URL.revokeObjectURL(url);
    };

    return (
        <>
            <CustomLoader open={openCustomLoader} />
            <Box
                sx={{
                    backgroundColor: "#0089e4",
                    padding: "120px 0",
                }}
            >
                <Box
                    sx={{
                        maxWidth: "920px",
                        width: "100%",
                        margin: "0 auto",
                    }}
                >
                    <Box sx={{ width: "100%", mb: "72px" }}>
                        <Stepper activeStep={activeStep}>
                            {steps.map((label, index) => (
                                <Step
                                    key={label}
                                    completed={completed[index]}
                                    sx={{
                                        ".MuiStepIcon-root": {
                                            color: "#c3c3c3",
                                            ".MuiStepIcon-text": {
                                                fill: "#3c3c3c",
                                            },
                                        },
                                        ".MuiStepIcon-root.Mui-active": {
                                            color: "#fff",
                                            ".MuiStepIcon-text": {
                                                fill: "#0089e4",
                                            },
                                        },
                                        ".MuiStepIcon-root.Mui-completed": {
                                            color: "#6fbf73",
                                            background: "#fff",
                                            borderRadius: "50%",
                                        },
                                    }}
                                >
                                    <StepLabel
                                        sx={{
                                            color: "#0089e4",
                                            ".MuiStepLabel-label": {
                                                color: "#c3c3c3",
                                                fontWeight: 500,
                                            },
                                            ".MuiStepLabel-label.Mui-active": {
                                                color: "#fff",
                                            },
                                            ".MuiStepLabel-label.Mui-completed":
                                                {
                                                    color: "#fff",
                                                },
                                        }}
                                    >
                                        {label}
                                    </StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                    </Box>
                    {activeStep === 0 ? (
                        <UploadFile1
                            onSuccessChangeStep={handleComplete}
                            setShowToastMessage={setShowToastMessage}
                            setOpenCustomLoader={setOpenCustomLoader}
                            setSeverity={setSeverity}
                            setToastMessage={setToastMessage}
                            saveFirstFile={(obj: any) => set_first_file(obj)}
                        />
                    ) : null}
                    {activeStep === 1 ? (
                        <UploadFile2
                            onSuccessChangeStep={handleComplete}
                            setShowToastMessage={setShowToastMessage}
                            setOpenCustomLoader={setOpenCustomLoader}
                            setSeverity={setSeverity}
                            setToastMessage={setToastMessage}
                            saveSecondFile={(obj: any) => set_second_file(obj)}
                        />
                    ) : null}
                    {activeStep === 2 ? (
                        <GenerateFileStep3
                            onSuccessChangeStep={handleComplete}
                            handleUploadFile={handleUploadFile}
                        />
                    ) : null}

                    {allStepsCompleted() ? (
                        <DownloadFile
                            handleClickDownload={handleClickDownload}
                        />
                    ) : null}
                </Box>
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
