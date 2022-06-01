import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../Contexts";
import styles from "./Header.module.css";

const Header = () => {
  const { authDispatch } = useAuth();
  const navigate = useNavigate();

  const logoutHandler = () => {
    navigate("/");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    authDispatch({ type: "LOGOUT" });
    toast.success("Logged Out Successfully");
  };
  return (
    <>
      <nav className={` glass ${styles.header}`}>
        <Link to="/">
          <div className={styles.logo}>
            <h1>
              bloom<span>Note</span>
            </h1>
          </div>
        </Link>
        <button
          className={`btn-link btn ${styles.btn_Logout}`}
          onClick={() => logoutHandler()}
        >
          Logout
        </button>
      </nav>
    </>
  );
};

export { Header };
