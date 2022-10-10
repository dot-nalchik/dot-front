import React, {memo} from 'react';
import styles from "./Options.module.css";
import clsx from "clsx";

const data = [
  {
    id: Math.random(),
    number: "8",
    string: "профессионалов",
  },
  {
    id: Math.random(),
    number: "5+",
    string: "лет опыта",
  },
  {
    id: Math.random(),
    number: "10+",
    string: "чего-то ещё",
  },
  {
    id: Math.random(),
    number: "40+",
    string: "реализованных проектов",
  },
]

const Options = () => {
  return (
    <div className={styles.options_container}>
      <section>
        <h1 className={styles.title}>Мы создаём бренды и сайты, которые ...</h1>
      </section>
      <section className={styles.options}>
        {data.map((item) => (
          <div key={item.id} className={styles.box}>
            <h2>{item.number}</h2>
            <p>{item.string}</p>
          </div>
        ))}
      </section>
      <section className={styles.choose_flex}>
        <div className={clsx(styles.box_flex, styles.des)}>
          <h2>DES</h2>
          <p>Создание логотипов, гайдов, графический дизайн, UX/UI, прототипирование</p>
        </div>
        <div className={clsx(styles.box_flex, styles.dev)}>
          <h2>DEV</h2>
          <p>Разработка веб-сайтов и приложений</p>
        </div>
        <div className={clsx(styles.box_flex, styles.smm)}>
          <div className={styles.smm_flex}>
            <h2>SMM</h2>
            <p>Продвижение / Маркетинг</p>
          </div>
          <p>Таргетинг, контекстная реклама, продвижение в социальных сетях</p>
        </div>
        <div className={clsx(styles.box_flex, styles.sup)}>
          <h2>SUP</h2>
          <p>Установка и обновление ПО, сборка и ремонт ПК</p>
        </div>
      </section>
    </div>
  );
};

export default memo(Options);
