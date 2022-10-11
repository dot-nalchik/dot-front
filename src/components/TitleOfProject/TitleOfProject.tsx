import React, {memo} from "react";
import styles from "./TitleOfProject.module.css";

const TitleOfProject = () => {
  return (
    <div className={styles.title_container}>
      <h1 className={styles.title}>Заголовок заголовок заголовок заголовок заголовок</h1>
      <button className={styles.client_btn}>Стать нашим клиентом {'>'} </button>
    </div>
  );
};

export default memo(TitleOfProject);
