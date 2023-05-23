import classes from "./MyButton.module.css";
import { button, leftb_hov, rightb_hov } from "../svgComponent/svg";

const MyButtonNone = () => {
  return (<button style={{display:"none"}}></button>);
};

const MyButtonLeft = ({ onClick, id }) => {
  return (
    <button
      className="custom-next-button"
      onClick={onClick}
      style={{
        background: "transparent",
        border: "0px",
        position: id === "2" ? "absolute" : "static",
      }}
    >
      <div className={classes.leftbdiv}>
        <svg className={id === "2" ? classes.leftb2 : classes.leftb}>
          <use href="#button"></use>
        </svg>
        <svg className={id === "2" ? classes.leftb_hov2 : classes.leftb_hov}>
          <use href="#leftb_hov"></use>
        </svg>
      </div>
      {button()}
      {leftb_hov()}
    </button>
  );
};

const MyButtonRight = ({ onClick, id }) => {
  return (
    <button
      className="custom-next-button"
      onClick={onClick}
      style={{
        background: "transparent",
        border: "0px",
        position: id === "2" ? "absolute" : "static",
      }}
    >
      <div className={classes.leftbdiv}>
        <svg className={id === "2" ? classes.leftb2 : classes.leftb}>
          <use href="#button"></use>
        </svg>
        <svg className={id === "2" ? classes.leftb_hov2 : classes.leftb_hov}>
          <use href="#rightb_hov"></use>
        </svg>
      </div>
      {rightb_hov()}
      {button()}
    </button>
  );
};

export { MyButtonLeft, MyButtonRight, MyButtonNone };
