import { useEffect, useState, useRef } from "react";
import classes from "./section1.module.css";
import { MyButtonLeft, MyButtonRight } from "../../../UI/button/MyButton";
import withTranslation from "../../../../i18next/withTranslation.js";
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
  const [beds, setBeds] = useState(t("l1"));
  const [bg, setBg] = useState({
    backgroundImage: `url(/img/section1Background1.png)`,
  });
  const delay = 5000;

  const change = (newNum) => {
    const data = {
      1: {
        beds: t("l1"),
        bg: "/img/section1Background1.png",
      },
      2: {
        beds: t("l2"),
        bg: "/img/section1Background2.png",
      },
      3: {
        beds: t("l3"),
        bg: "/img/section1Background3.png",
      },
      4: {
        beds: t("l4"),
        bg: "/img/section1Background4.png",
      },
    };
    setBeds(data[newNum].beds);
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

  return (
    <section className={classes.section} style={bg} id="section">
      <div className={classes.container}>
        <div className={classes.sect1}>
          <div className={classes.rect}></div>
          <div className={classes.rect1}>
            <p className={classes.rect1_1}>{t("t2")}</p>
            <p className={classes.rect1_2} id="rect1_2">
              {beds}
            </p>
            <p className={classes.rect1_3}>{t("t3")}</p>
            <Link to="/beds">
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
