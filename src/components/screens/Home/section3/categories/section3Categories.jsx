import classes from "./Section3_card.module.css";
import {
  divani,
  lijka,
  krisla,
  komodi,
  shafi,
  kuhnia,
} from "../../../UI/svgComponent/svg.jsx";
import { Link } from "react-router-dom";
const Section3_card = ({
  id,
  name,
  url,
  onCardHover,
  onCardMouseLeave,
  hoveredCard,
}) => {
  const isHovered = hoveredCard === id;

  const handleMouseOver = () => {
    onCardHover(id);
  };

  const handleMouseLeave = () => {
    onCardMouseLeave();
  };

  return (
    <div className={classes.sect4_svg}>
      <Link
        to={`${url}`}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <svg className={classes.r4svg}>
          <use href={`#${id}`}></use>
        </svg>
      </Link>
      <Link to={`${url}`}>
        <p
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
          className={`${classes.sect4p} ${isHovered ? classes.sect4pline : ""}`}
        >
          {`${name}`}
        </p>
      </Link>
      {divani({ hoveredCard })}
      {lijka({ hoveredCard })}
      {krisla({ hoveredCard })}
      {komodi({ hoveredCard })}
      {shafi({ hoveredCard })}
      {kuhnia({ hoveredCard })}
    </div>
  );
};

export default Section3_card;
