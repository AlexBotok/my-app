import classes from "./signIn.module.css";

const Admin = () => {
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
            <input type="email" name="email" placeholder="Email" required />
            <i></i>
          </div>
          <div className={classes.inputBox}>
            <input
              type="password"
              name="password"
              id=""
              placeholder="Password"
              required
            />
            <i></i>
          </div>
          <input type="submit" value="Login" id="login"/>
        </form>
      </div>
    </div>
  );
};

export default Admin;
