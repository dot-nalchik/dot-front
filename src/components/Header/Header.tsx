import {memo, useCallback, useState} from 'react';
import styles from "./Header.module.css";
import logo from "../../images/got_logo.png";
import clsx from "clsx";
import {useAppSelector} from "../../redux/hooks";
import {changeMainStatus} from "../../redux/models/main";
import {useDispatch} from "react-redux";
import {useMediaQuery} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import HeaderModal from "./HeaderModal";

const Header = () => {
  const isMainPage = useAppSelector((state) => state.main.isMainPage);
  const dispatch = useDispatch();
  const [modelOpen, setModalOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:480px)');

  const enableMainStatus = useCallback(
      () => {
        dispatch(changeMainStatus(true));
      },
      [dispatch],
  );

  const changeModalState = useCallback(
      () => {
        setModalOpen((pref) => !pref);
      },
      [],
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
        {!isMobile && (
            <div className={styles.flex_btn}>
              <a href="#projects">
                <button className={styles.btn}>Проекты</button>
              </a>
              <a href="#contacts">
                <button className={styles.btn}>Контакты</button>
              </a>
              <a href="#request">
                <button className={clsx(styles.request_btn, styles.btn)}>Заявка</button>
              </a>
            </div>
        )}
        {isMobile && <MenuIcon className={styles.bar_logo} onClick={changeModalState}/>}
        <HeaderModal open={modelOpen} changeModalState={changeModalState}/>
      </div>
  );
};

export default memo(Header);
