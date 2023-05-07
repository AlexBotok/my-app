import classes from "./Section5.module.css";
const Section5 = () => {
  return (
    <div className={classes.container}>
      <div className={classes.sect6}>
        <div className={classes.sect6_1}>
          <div className={classes.sect4_16}>
            <div className={classes.rect3}></div>
            <p>Залишились питання?</p>
          </div>
        </div>
        <div className={classes.sect6_2}>
          <img
            src="/img/sect6_domik.png"
            alt="Kvartirka"
            className={classes.sect6img}
          />
          <div className={classes.sect6_4}>
            <div className={classes.sect6_palkag}></div>
            <div className={classes.windowkons}>
              <p className={classes.wind_1}>Замовте консультацію</p>
              <form className={classes.form1}>
                <input
                  type="text"
                  id="namew"
                  placeholder="Введіть ім'я"
                  className={classes.namew}
                />
              </form>
              <form className={classes.form1}>
                <input
                  type="text"
                  id="namew"
                  placeholder="Номер телефону"
                  className={classes.namew}
                />
              </form>
              <button className={classes.btn6}>Відправити</button>
              <p className={classes.zaiavka}>
                Залиште заявку або телефонуйте за номером
                <span className={classes.zaiavkanomer}>(099) 111 22 33</span>, і
                наш менеджер звяжеться з вами для кваліфікованої консультації.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
