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

const steps = ["Upload 1st file", "Upload 2nd file", "Generate"];

const UploadField = () => {
    const [openCustomLoader, setOpenCustomLoader] = useState<boolean>(false);

    const [toastMessage, setToastMessage] = useState<string>("");
    const [severity, setSeverity] = useState<any>(undefined);
    const [showToastMessage, setShowToastMessage] = useState<boolean>(false);

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
                        />
                    ) : null}
                    {activeStep === 1 ? (
                        <UploadFile2
                            onSuccessChangeStep={handleComplete}
                            setShowToastMessage={setShowToastMessage}
                            setOpenCustomLoader={setOpenCustomLoader}
                            setSeverity={setSeverity}
                            setToastMessage={setToastMessage}
                        />
                    ) : null}
                    {activeStep === 2 ? (
                        <GenerateFileStep3
                            onSuccessChangeStep={handleComplete}
                        />
                    ) : null}

                    {allStepsCompleted() ? <DownloadFile /> : null}
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
