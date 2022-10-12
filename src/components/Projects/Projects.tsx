import React, {memo, useCallback, useState} from 'react';
import styles from "./Projects.module.css";
import foodelity from "../../images/project_images/foodelity.png";
import irina from "../../images/project_images/irina.png";
import kausar from "../../images/project_images/kausar.png";
import minivan from "../../images/project_images/minivan.png";
import printers from "../../images/project_images/printers.png";
import sozaev from "../../images/project_images/sozaev.png";
import {useDispatch} from "react-redux";
import {
  changeFoodelityPage,
  changeIrinaPage,
  changeKausarPage,
  changeMainStatus, changePrintersPage,
  changeQuickerPage, changeSozaevPage
} from "../../redux/models/main";

const Projects = () => {
  const dispatch = useDispatch()
  const [openAddProjects, setOpenAddProjects] = useState(true);

  function openAllProjects() {
    setOpenAddProjects(false);
  }

  const disableMainPageStatus = useCallback(
      () => {
        dispatch(changeMainStatus(false));
      },
      [dispatch],
  );

  const enableQuickerStatus = useCallback(
      () => {
        dispatch(changeQuickerPage(true));
        disableFoodelityStatus();
        disableIrinaStatus();
        disableKausarStatus();
        disablePrintersStatus();
        disableSozaevStatus();
        disableMainPageStatus();
      },
      [dispatch],
  );

  const disableQuickerStatus = useCallback(
      () => {
        dispatch(changeQuickerPage(false));
      },
      [dispatch],
  );

  const enableFoodelityStatus = useCallback(
      () => {
        dispatch(changeFoodelityPage(true));
        disableQuickerStatus();
        disableIrinaStatus();
        disableKausarStatus();
        disablePrintersStatus();
        disableSozaevStatus();
        disableMainPageStatus();
      },
      [dispatch],
  );

  const disableFoodelityStatus = useCallback(
      () => {
        dispatch(changeFoodelityPage(false));
      },
      [dispatch],
  );

  const enableIrinaStatus = useCallback(
      () => {
        dispatch(changeIrinaPage(true));
        disableQuickerStatus();
        disableFoodelityStatus();
        disableKausarStatus();
        disablePrintersStatus();
        disableSozaevStatus();
        disableMainPageStatus();
      },
      [dispatch],
  );

  const disableIrinaStatus = useCallback(
      () => {
        dispatch(changeIrinaPage(false));
      },
      [dispatch],
  );

  const enableKausarStatus = useCallback(
      () => {
        dispatch(changeKausarPage(true));
        disableQuickerStatus();
        disableFoodelityStatus();
        disableIrinaStatus();
        disablePrintersStatus();
        disableSozaevStatus();
        disableMainPageStatus();
      },
      [dispatch],
  );

  const disableKausarStatus = useCallback(
      () => {
        dispatch(changeKausarPage(false));
      },
      [dispatch],
  );

  const enablePrintersStatus = useCallback(
      () => {
        dispatch(changePrintersPage(true));
        disableQuickerStatus();
        disableFoodelityStatus();
        disableIrinaStatus();
        disableKausarStatus();
        disableSozaevStatus();
        disableMainPageStatus();
      },
      [dispatch],
  );

  const disablePrintersStatus = useCallback(
      () => {
        dispatch(changePrintersPage(false));
      },
      [dispatch],
  );

  const enableSozaevStatus = useCallback(
      () => {
        dispatch(changeSozaevPage(true));
        disableQuickerStatus();
        disableFoodelityStatus();
        disableIrinaStatus();
        disableKausarStatus();
        disablePrintersStatus();
        disableMainPageStatus();
      },
      [dispatch],
  );

  const disableSozaevStatus = useCallback(
      () => {
        dispatch(changeSozaevPage(false));
      },
      [dispatch],
  );

  return (
      <>
        <div className={styles.projects_container}>
          <section className={styles.flex_projects1}>
            <a href="#at_the_top">
              <img
                  src={minivan}
                  alt="quicker"
                  onClick={enableQuickerStatus}
                  className={styles.img_project}
              />
            </a>
            <a href="#at_the_top">
              <img
                  src={irina}
                  alt="irina"
                  className={styles.img_project}
                  onClick={enableIrinaStatus}
              />
            </a>
            {!openAddProjects &&
              <a href="#at_the_top">
                <img
                  src={foodelity}
                  alt="food"
                  className={styles.img_project}
                  onClick={enableFoodelityStatus}
                />
              </a>
            }
          </section>
          <section className={styles.flex_projects2}>
            <a href="#at_the_top">
              <img
                  src={kausar}
                  alt="kausar"
                  className={styles.img_project}
                  onClick={enableKausarStatus}
              />
            </a>
            <a href="#at_the_top">
              <img
                  src={printers}
                  alt="printers"
                  className={styles.img_project}
                  onClick={enablePrintersStatus}
              />
            </a>
            {openAddProjects ?
                (
                    <button
                        className={styles.open_btn}
                        onClick={openAllProjects}
                    >
                      Cмотреть все проекты {'>'}
                    </button>
                ) : (
                    <>
                      <a href="#at_the_top">
                        <img
                            src={sozaev}
                            alt="sozaev"
                            className={styles.img_project}
                            onClick={enableSozaevStatus}
                        />
                      </a>
                    </>
                )}
          </section>
        </div>
      </>
  );
};

export default memo(Projects);
