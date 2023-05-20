import classes from "./Admin.module.css";

const AdminSignUp = () => {
  return (
    <div className={classes.body}>
      <div className={classes.box}>
        <form
          action="/register"
          method="post"
          autocomplete="off"
          className={classes.f1}
        >
          <h2 className={classes.h2}>Sign Up</h2>
          <div className={classes.inputBox}>
            <input type="name" name="name" placeholder="Name" />

            <i></i>
          </div>
          <div className={classes.inputBox}>
            <input type="surname" name="surname" placeholder="Surname" />

            <i></i>
          </div>
          <div className={classes.inputBox}>
            <input type="email" name="email" placeholder="Email" />

            <i></i>
          </div>
          <div className={classes.inputBox}>
            <input
              type="password"
              name="password"
              id=""
              placeholder="Password"
            />

            <i></i>
          </div>
          <input type="submit" value="Sign Up" id="login" />
        </form>
      </div>
    </div>
  );
};

export default AdminSignUp;
