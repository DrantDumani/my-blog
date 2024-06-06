import style from "./PostCard.module.css";
import { humanReadable } from "../../utils/humanDate";
import PropTypes from "prop-types";

export function PostCard({ title, subTitle, date }) {
  return (
    <article className={style.card}>
      <h3>{title}</h3>
      <h4>{subTitle}</h4>
      <p className={style.dateText}>Date: {humanReadable(date)}</p>
    </article>
  );
}

PostCard.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  date: PropTypes.string,
};
