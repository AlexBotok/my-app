import classes from "./signIn.module.css";
import React, { useEffect, useState } from "react";

const Admin = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/admin")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <div className={classes.body}>
      <div className={classes.box}>
        <form
          action="http://localhost:5000/login"
          method="post"
          autoComplete="off"
          className={classes.f1}
        >
          <h2 className={classes.h2}>Sign in</h2>
          <div className={classes.inputBox}>
            <input type="email" name="email" placeholder="Email" />

            <i></i>
          </div>
          <div className={classes.inputBox}>
            <input type="password" name="password" id="" placeholder="Password" />

            <i></i>
          </div>
          <input type="submit" value="Login" id="login" />
        </form>
      </div>
    </div>
  );
};

export default Admin;
