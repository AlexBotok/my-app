import React from "react";
import classes from "./Section.module.css";
import { MyButtonLeft, MyButtonRight } from "../UI/button/MyButton";

const Section1 = () => {
  return (
    <section className={classes.section} id="section">
      <div className={classes.container}>
        <div className={classes.sect1}>
          <div className={classes.rect}></div>
          <div className={classes.rect1}>
            <p className={classes.rect1_1}>Новинка!</p>
            <p className={classes.rect1_2} id="rect1_2">
              Ліжко Ornella
            </p>
            <p className={classes.rect1_3}>Це новий рівень комфортного сну</p>
            <a href="/#">
              <div className={classes.rect1_4}>
                <p>Детальніше</p>
              </div>
            </a>
            <div className={classes.numberp1}>
              <p id="numliz">01</p>
              <p>/ 04</p>
            </div>
            <div className={classes.sect1_buttons}>
              <MyButtonLeft id="1"/>
              <MyButtonRight id="1"/>
            </div>
          </div>
        </div>
        <div className={classes.nn}></div>
      </div>
    </section>
  );
};

export default Section1;
