import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../Contexts";
import styles from "./Authentication.module.css";
import { toast } from "react-toastify";
import { SignupService } from "../../Services";

const Signup = () => {
  const { authDispatch } = useAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUser((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const submitHandler = async (e) => {
    if (user.firstName && user.email && user.password) {
      e.preventDefault();
      try {
        const response = await SignupService(user);
        if (response.status === 201) {
          authDispatch({
            type: "SIGNUP",
            payload: {
              token: response.data.encodedToken,
              user: response.data.createdUser,
            },
          });
          toast.success("Signup Successful !!");
          localStorage.setItem("token", response.data.encodedToken);
          localStorage.setItem(
            "user",
            JSON.stringify(response.data.createdUser)
          );
          navigate("/");
        }
      } catch (error) {
        toast.error(error.response.data.errors[0]);
        console.error("error", error);
      }
    } else {
      toast.error("Please enter all the fields");
    }
  };
  return (
    <div className=" body_style ">
      <form className={styles.form}>
        <div className={styles.logo}>
          <Link to="/">
            <h1 className={styles.logo_heading}>
              bloom
              <span>Note</span>
            </h1>
          </Link>
        </div>
        <h2>Sign In</h2>
        <div className={styles.name_container}>
          <div className={styles.name}>
            <label htmlFor="FirstName">First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={changeHandler}
              value={user.firstName}
              required
            />
          </div>
          <div className={styles.name}>
            <label htmlFor="LasttName">Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={changeHandler}
              value={user.lastName}
              required
            />
          </div>
        </div>
        <div className={styles.input_container}>
          <label htmlFor="email" className={styles.email}>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            onChange={changeHandler}
            value={user.email}
            required
          />
        </div>
        <div className={styles.input_container}>
          <label className={styles.password}>Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="*******"
            onChange={changeHandler}
            value={user.password}
            required
          />
        </div>
        <div className={styles.checkbox_container}>
          <label>
            <input
              type="checkbox"
              id="remember-me"
              className={`checkbox-input ${styles.checkbox}`}
            />
            I accept all terms & conditions
          </label>
        </div>
        <button
          className={`btn-link btn ${styles.btn}`}
          type="submit"
          onClick={submitHandler}
        >
          Sign In
        </button>
        <div className={styles.signup}>
          Already have an account ?{" "}
          <Link to="/login">
            <span className={styles.span_btn}>Login</span>
          </Link>
        </div>
      </form>
    </div>
  );
};
export { Signup };
