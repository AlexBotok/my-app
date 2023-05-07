import classes from "./Elem3.module.css";
const Elem3 = ({name, id}) => {
const checkid = () => {
    if (id === "1") {
      return (
        <div>
          <p className={classes.rect4__2}>{name}</p>
          <p className={classes.rect4__2_1}>Акція</p>
        </div>
      );
    } else if (id === "2") {
      return (
        <div className={classes.rect4__2}>
          <p>{name}</p>
        </div>
      );
    }
}
  return (
    checkid()
  );
};

export default Elem3;
