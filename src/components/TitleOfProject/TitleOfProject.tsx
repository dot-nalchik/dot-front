import React, {memo, useState} from "react";
import styles from "./TitleOfProject.module.css";
import {useAppSelector} from "../../redux/hooks";
import clsx from "clsx";

const TitleOfProject = () => {
  const isMainPage = useAppSelector((state) => state.main.isMainPage);
  const isQuicker = useAppSelector((state) => state.main.isQuickerPage);
  const isFoodelityPage = useAppSelector((state) => state.main.isFoodelityPage);
  const isIrinaPage = useAppSelector((state) => state.main.isIrinaPage);
  const isKausarPage = useAppSelector((state) => state.main.isKausarPage);
  const isPrintersPage = useAppSelector((state) => state.main.isPrintersPage);

  function projectName() {
    return isQuicker ?
        "Quicker" : isFoodelityPage ?
            "Foodelity" : isIrinaPage ?
                "Irina" : isKausarPage ?
                    "Kausar" : isPrintersPage ?
                        "Печатники" : "Sozaev blog";
  }

  function projectDescription() {
    return isQuicker ?
        "– служба доставки" : isFoodelityPage ?
            "– полуфабрикаты" : isIrinaPage ?
                "– мастер маникюра" : isKausarPage ?
                    "– магазин строительных материалов" : isPrintersPage ?
                        "– хостелы" : "– блог предпринимателя";
  }

  function btnInfo() {
    return isQuicker ?
        "Брендинг" : isFoodelityPage ?
            "Веб-сайт" : isIrinaPage ?
                "Брендинг" : isKausarPage ?
                    "Веб-сайт" : isPrintersPage ?
                        "Веб-сайт" : "Брендинг";
  }

  function projectLink() {
    return isFoodelityPage ?
        "www.foodelity.ru" : isKausarPage ?
            "www.kausar.ru" : isPrintersPage ?
                "www.hostel-pechatniki.ru" : "";

  }

  return (
      <>
        {!isMainPage ? (
            <div className={clsx(styles.title_container, styles.project_container)}>
              <h1 className={clsx(styles.title, styles.project_title)}>{projectName()}</h1>
              <p>{projectDescription()}</p>
              <button className={styles.project_descr}>{btnInfo()}</button>
              {
                  (isPrintersPage || isKausarPage || isFoodelityPage) &&
                <a
                    // href={`https://${projectLink()}`}
                  className={styles.link}
                >
                  {projectLink()}
                </a>
              }
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
