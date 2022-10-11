import {memo} from 'react';
import styles from "./Header.module.css";
import logo from "../../images/got_logo.png";
import clsx from "clsx";

const Header = () => {

  return (
    <div className={styles.header}>
      <img
        src={logo}
        alt="dot_logo"
        className={styles.logo}
      />
      <div className={styles.flex_btn}>
        <button className={styles.btn}>Проекты</button>
        <button className={styles.btn}>Контакты</button>
        <button className={clsx(styles.request_btn, styles.btn)}>Заявка</button>
      </div>

    </div>
  );
};

export default memo(Header);
