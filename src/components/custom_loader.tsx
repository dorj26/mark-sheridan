import {
    Box,
    Dialog,
    DialogContent,
    LinearProgress,
    Typography,
    styled,
} from "@mui/material";
import React from "react";
import { ThreeDots } from "react-loader-spinner";

interface props {
    open: boolean;
}

const CustomLoader: React.FunctionComponent<props> = ({ open }) => {
    return (
        <Dialog open={open}>
            <DialogContent>
                <Box mb={3}>
                    <Box display={"flex"} gap={"2px"} justifyContent={"center"}>
                        <Box sx={{ width: "100%" }}>
                            <Typography textAlign={"center"} mb={2}>
                                Please wait while we generate your file for
                                download
                            </Typography>
                            {/* <ThreeDots color={"#212427"} height={25} width={20} /> */}
                            <LinearProgress
                                sx={{
                                    backgroundColor: "#d2d2d2",

                                    ".MuiLinearProgress-bar": {
                                        backgroundColor: "#212427",
                                    },
                                }}
                            />
                        </Box>
                    </Box>
                </Box>
            </DialogContent>
        </Dialog>
    );
};

export default CustomLoader;
