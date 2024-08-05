
const validateForm = () => {
    let valid = true;
    const newErrors = { passwordError: "", formError: "" };

    for (const [key, value] of Object.entries(formData)) {
        if (key !== "checked" && (value === "" || /^\s+$/.test(value))) {
            newErrors.formError = "Please fill out all fields properly.";
            valid = false;
            break;
        }
    }

    if (formData.password.length < 8 || !/[!@#$%^&*(),.?":{}|<>]/.test(formData.password)) {
        newErrors.passwordError = "Password must be at least 8 characters long and contain a special character.";
        valid = false;
    }

    if (formData.password !== formData["re-type-password"] && auth === "Sign Up") {
        newErrors.passwordError = "Passwords do not match.";
        valid = false;
    }

    setErrors(newErrors);
    return valid;
};

export default validateForm