import React, {memo} from "react";
import styles from "./TitleOfProject.module.css";
import {useAppSelector} from "../../redux/hooks";
import clsx from "clsx";

const TitleOfProject = () => {
  const isQuicker = useAppSelector((state) => state.main.isQuickerPage);

  return (
      <>
        {isQuicker ? (
            <div className={clsx(styles.title_container, styles.project_container)}>
              <h1 className={clsx(styles.title, styles.project_title)}>Quicker</h1>
              <p>– служба доставки</p>
              <button className={styles.project_descr}>Брендинг</button>
            </div>
        ) : (
            <div className={styles.title_container}>
              <h1 className={styles.title}>Заголовок заголовок заголовок заголовок заголовок</h1>
              <button className={styles.client_btn}>Стать нашим клиентом {'>'} </button>
            </div>
        )}
      </>
  );
};

export default memo(TitleOfProject);
