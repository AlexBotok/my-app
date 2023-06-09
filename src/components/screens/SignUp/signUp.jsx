import classes from "./signUp.module.css";

const SignUp = () => {
  return (
    <div className={classes.body}>
      <div className={classes.box}>
        <form
          action="http://localhost:5000/register"
          method="post"
          className={classes.f1}
        >
          <h2 className={classes.h2}>Sign Up</h2>
          <div className={classes.inputBox}>
            <input type="name" name="name" placeholder="Name" required />

            <i></i>
          </div>
          <div className={classes.inputBox}>
            <input
              type="surname"
              name="surname"
              placeholder="Surname"
              required
            />

            <i></i>
          </div>
          <div className={classes.inputBox}>
            <input type="email" name="email" placeholder="Email" required />

            <i></i>
          </div>
          <div className={classes.inputBox}>
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />

            <i></i>
          </div>
          <input type="submit" value="Sign Up" id="login" />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
