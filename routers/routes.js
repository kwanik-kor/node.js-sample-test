//Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";

//사용자 관리
const USER = "/user";
const USER_DETAIL = "/:id";
const CHANGE_PASSWORD = "/change-password";

const routes = {
    home: HOME,
    join: JOIN,
    login: LOGIN,
    logout: LOGOUT,
    user: USER,
    userDetail: (id) => {
        
    },
    changePassword: CHANGE_PASSWORD
}

export default routes;