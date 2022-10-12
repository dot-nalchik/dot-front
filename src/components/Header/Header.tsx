import {memo, useCallback} from 'react';
import styles from "./Header.module.css";
import logo from "../../images/got_logo.png";
import clsx from "clsx";
import {useAppSelector} from "../../redux/hooks";
import {changeMainStatus} from "../../redux/models/main";
import {useDispatch} from "react-redux";

const Header = () => {
  const isMainPage = useAppSelector((state) => state.main.isMainPage);
  const dispatch = useDispatch();

  const enableMainStatus = useCallback(
      () => {
        dispatch(changeMainStatus(true));
      },
      [dispatch],
  );

  return (
    <div id="at_the_top" className={styles.header}>
      <img
        src={logo}
        alt="dot_logo"
        className={styles.logo}
        onClick={enableMainStatus}
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
