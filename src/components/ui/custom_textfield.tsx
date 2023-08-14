import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import { InputLabel, Theme } from "@mui/material";

interface InputFieldProps {
    label?: any;
    fieldName: any;
    helperText?: any;
    required?: boolean;
    value?: any;
    type?: string;
    multiline?: boolean;
    rows?: number;
    disabled?: boolean;
    onChange?: any;
    max?: any;
    placeholder?: string;
    endAdornment?: any;
    sx?: any;
    startAdornment?: any;
    onClick?: any;
    InputProps?: any;
}

const classes: any = {
    outlinedInput: {
        minHeight: "auto",
        height: "48px",
        fontSize: "15px !important",
        color: "#495057",
        borderRadius: "0 !important",
        paddingRight: "0 !important",
    },
};

const CustomInputField: React.FC<InputFieldProps> = ({
    label,
    fieldName,
    helperText,
    required,
    value,
    type,
    multiline,
    rows,
    disabled,
    onChange,
    max,
    placeholder,
    endAdornment,
    sx,
    startAdornment,
    onClick,
    InputProps,
}) => {
    //   const classes = useStyles();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    return (
        <Box
            sx={{
                // margin: "0 0 16px",
                ...sx,
            }}
        >
            {label ? (
                <InputLabel htmlFor={fieldName} className={classes.inputLabel}>
                    {label}{" "}
                    {required && (
                        <Typography component="span" color={"red"}>
                            *
                        </Typography>
                    )}
                </InputLabel>
            ) : null}
            <TextField
                fullWidth
                placeholder={placeholder}
                id={fieldName}
                name={fieldName}
                disabled={disabled ? disabled : false}
                type={type}
                value={value}
                multiline={multiline ? multiline : false}
                rows={multiline ? rows : 1}
                onClick={onClick}
                InputProps={InputProps ? InputProps : null}
                sx={{
                    ".MuiInputBase-root": {
                        background: "#fff",
                        minHeight: "auto",
                        height: multiline ? "unset" : "48.5px !important",
                        fontSize: "15px !important",
                        color: "#495057",
                        borderRadius: "0 !important",
                        paddingRight: "0 !important",
                    },
                }}
            />
        </Box>
    );
};

export default CustomInputField;
