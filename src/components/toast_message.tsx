import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

interface toastProps {
    open: boolean;
    handleClose: any;
    severity?: Severity;
    message?: string;
}

type Severity = "error" | "success" | "info" | "warning" | undefined;

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref
) {
    return <MuiAlert elevation={6} ref={ref} variant={"filled"} {...props} />;
});

const ToastMessage: React.FunctionComponent<toastProps> = ({
    open,
    severity,
    message,
    handleClose,
}) => {
    return (
        <>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity={severity}
                    sx={{ width: "100%" }}
                >
                    {message}
                </Alert>
            </Snackbar>
        </>
    );
};

export default ToastMessage;
