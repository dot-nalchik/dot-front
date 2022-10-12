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
      <div className={styles.header}>
        <img
            id="at_the_top"
            src={logo}
            alt="dot_logo"
            className={styles.logo}
            onClick={enableMainStatus}
        />
        <div className={styles.flex_btn}>
          <a href="#">
            <button className={styles.btn}>Проекты</button>
          </a>
          <a href="#">
            <button className={styles.btn}>Контакты</button>
          </a>
          <a href="#">
            <button className={clsx(styles.request_btn, styles.btn)}>Заявка</button>
          </a>
        </div>
      </div>
  );
};

export default memo(Header);
