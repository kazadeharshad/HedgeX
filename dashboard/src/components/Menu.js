import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";
import axios from "axios";
import {ToastContainer, toast} from "react-toastify";
import {useLocation} from "react-router-dom";
import {Margin} from "@mui/icons-material";

const Menu = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [cookies, removeCookie] = useCookies(["token"]);
    const [username, setUsername] = useState("User");
    useEffect(() => {
        const verifyCookie = async () => {
            try {
                const {data} = await axios.get("http://localhost:3002/verify", {withCredentials: true});

                if (data.status) {
                    setUsername(data.user);
                } else {
                    setUsername("User");
                }
            } catch {
                setUsername("User");
            }
        };

        verifyCookie();
    }, []);
    const Logout = async () => {
        await axios.post("http://localhost:3002/logout", {}, {withCredentials: true});

        setUsername("User");
        navigate("/login", {replace: true});
    };

    const [selectedMenu, setSelectedMenu] = useState(0);
    const [isProfileDropDownOpen, setIsProfileDropDownOpen] = useState(false);

    const menuClass = "menu";
    const activeMenuClass = "menu selected";

    const handleMenuclick = (index) => {
        setSelectedMenu(index);
    };

    const handleProfileClick = () => {
        setIsProfileDropDownOpen(!isProfileDropDownOpen);
    };

    return (
        <div className="menu-container">
            <img src="logo.png" style={{width: "50px"}} alt=" " />
            <div className="menus">
                <ul>
                    <li>
                        <Link
                            style={{textDecoration: "none"}}
                            to="/"
                            onClick={() => {
                                handleMenuclick(0);
                            }}
                        >
                            <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            style={{textDecoration: "none"}}
                            to="/orders"
                            onClick={() => {
                                handleMenuclick(1);
                            }}
                        >
                            <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>Orders</p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            style={{textDecoration: "none"}}
                            to="/holdings"
                            onClick={() => {
                                handleMenuclick(2);
                            }}
                        >
                            <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>Holdings</p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            style={{textDecoration: "none"}}
                            to="/positions"
                            onClick={() => {
                                handleMenuclick(3);
                            }}
                        >
                            <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>Positions</p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            style={{textDecoration: "none"}}
                            to="/funds"
                            onClick={() => {
                                handleMenuclick(4);
                            }}
                        >
                            <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>Funds</p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            style={{textDecoration: "none"}}
                            to="/apps"
                            onClick={() => {
                                handleMenuclick(5);
                            }}
                        >
                            <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>Apps</p>
                        </Link>
                    </li>
                </ul>
                <hr />
                <div
                    className="profile"
                    onClick={() => {
                        handleProfileClick();
                    }}
                >
                    <div className="avatar">ZU</div>
                    <p className="username pe-5">{username}</p>
                </div>
                {isProfileDropDownOpen}
                <Link style={{margin: "2rem", textDecoration: "none", fontSize: "0.8rem  "}} onClick={Logout}>
                    LOGOUT
                </Link>
            </div>

            <ToastContainer />
        </div>
    );
};

export default Menu;
