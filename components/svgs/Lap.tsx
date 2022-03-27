import { NextPage } from "next";
import styles from "styles/components/svg.module.scss";

interface Props {
  isActive: boolean;
}

const RankSvg: NextPage<Props> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      className={props.isActive ? styles.active : styles.inactive}
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M18 4H6v2l6.5 6L6 18v2h12v-3h-7l5-5-5-5h7V4z" />
    </svg>
  );
};

export default RankSvg;