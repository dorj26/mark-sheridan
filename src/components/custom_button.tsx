import { Button } from "@mui/material";
import React from "react";

interface props {
    title: string;
    variant?: any;
    sx?: any;
    onClick?: any;
    disabled?: boolean;
}

const CustomButton: React.FunctionComponent<props> = ({
    title,
    sx,
    variant,
    onClick,
    disabled,
}) => {
    return (
        <Button
            variant={variant ? variant : "contained"}
            sx={{
                ...sx,
                textTransform: "none",
                fontSize: 16,
            }}
            onClick={onClick}
            disabled={disabled ? disabled : false}
        >
            {title}
        </Button>
    );
};

export default CustomButton;
