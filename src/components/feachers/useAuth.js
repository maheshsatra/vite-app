export const useAuth = () => {
    const user = JSON.parse(localStorage.getItem("loginInfo"))?.token;
    // console.log(user)
    if (user) {
        return true;
    } else {
        return false
    }
};

