import { Box, Button, IconButton, Typography } from "@mui/material";
import React from "react";

interface props {
    onSuccessChangeStep: any;
}

const GenerateFileStep3: React.FunctionComponent<props> = ({
    onSuccessChangeStep,
}) => {
    const handleClickGenerateFile = () => {
        onSuccessChangeStep();
    };
    return (
        <>
            <Typography sx={{ color: "#f6f6f8", textAlign: "center", mb: 2 }}>
                Both files have been successfully uploaded. Please click the
                button below to generate the outpute file
            </Typography>
            <Box sx={{ textAlign: "center" }}>
                <Button
                    variant={"contained"}
                    sx={{
                        height: "49px",
                        boxShadow: "none",
                        borderRadius: 0,
                        textTransform: "unset",
                        background: "#fff",
                        color: "#1976d2",
                        width: "145px",
                        "&:hover": {
                            backgroundColor: "#efefef",
                        },
                    }}
                    onClick={handleClickGenerateFile}
                >
                    Generate
                </Button>
            </Box>
        </>
    );
};

export default GenerateFileStep3;
