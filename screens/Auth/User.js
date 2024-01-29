export const userData  = {
    name : "",
    email : "",
    password : "",
    confirmPassword : ""
}

export const GetUserData = (field, value) => {
    if(!field || !value) return;
    userData[field] = value
};