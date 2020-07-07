import routes from "../routers/routes";

export const home = async(req, res) => {
    res.render("home.html");
}