import { useEffect, useState, useRef } from "react";
import classes from "./Section.module.css";
import { MyButtonLeft, MyButtonRight } from "../../../UI/button/MyButton";
import withTranslation from "../../../../withTranslation.js";
import { Link } from "react-router-dom";

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    };
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

const Section1 = ({ t }) => {
  const [num, setNum] = useState(1);
  const [ligko, setLigko] = useState(t("l1"));
  const [bg, setBg] = useState({ backgroundImage: `url(/img/bg.png)` });
  const [delay, setDelay] = useState(5000);

  const change = (newNum) => {
    const data = {
      1: {
        ligko: t("l1"),
        bg: "/img/bg.png",
      },
      2: {
        ligko: t("l2"),
        bg: "/img/california.png",
      },
      3: {
        ligko: t("l3"),
        bg: "/img/BlackBed.png",
      },
      4: {
        ligko: t("l4"),
        bg: "/img/krovatk.png",
      },
    };
    setLigko(data[newNum].ligko);
    setBg({ backgroundImage: `url(${data[newNum].bg})` });
  };

  const increment = () => {
    setNum((prevNum) => {
      const newNum = prevNum >= 4 ? 1 : prevNum + 1;
      change(newNum);
      return newNum;
    });
  };

  const decrement = () => {
    setNum((prevNum) => {
      const newNum = prevNum <= 1 ? 4 : prevNum - 1;
      change(newNum);
      return newNum;
    });
  };

  useInterval(() => {
    increment();
  }, delay);

  useEffect(() => {
    setLigko(t("l1"));
  }, [t]);
  return (
    <section className={classes.section} style={bg} id="section">
      <div className={classes.container}>
        <div className={classes.sect1}>
          <div className={classes.rect}></div>
          <div className={classes.rect1}>
            <p className={classes.rect1_1}>{t("t2")}</p>
            <p className={classes.rect1_2} id="rect1_2">
              {ligko}
            </p>
            <p className={classes.rect1_3}>{t("t3")}</p>
            <Link to={`?language=${localStorage.getItem("language")}`}>
              <div className={classes.rect1_4}>
                <p>{t("t4")}</p>
              </div>
            </Link>
            <div className={classes.numberp1}>
              <p id="numliz">0{num}</p>
              <p>/ 04</p>
            </div>
            <div className={classes.sect1_buttons}>
              <MyButtonLeft id="1" onClick={decrement} />
              <MyButtonRight id="1" onClick={increment} />
            </div>
          </div>
        </div>
        <div className={classes.nn}></div>
      </div>
    </section>
  );
};

export default withTranslation(Section1);
