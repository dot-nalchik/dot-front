import React, {memo, useState} from 'react';
import styles from "./Projects.module.css";
import foodelity from "../../images/project_images/foodelity.png";
import irina from "../../images/project_images/irina.png";
import kausar from "../../images/project_images/kausar.png";
import minivan from "../../images/project_images/minivan.png";
import printers from "../../images/project_images/printers.png";
import sozaev from "../../images/project_images/sozaev.png";

const Projects = () => {
  const [openAddProjects, setOpenAddProjects] = useState(true);

  function openAllProjects() {
    setOpenAddProjects(false);
  }

  return (
      <div className={styles.projects_container}>
        <section className={styles.flex_projects1}>
          <img src={minivan} alt="quicker"/>
          <img src={irina} alt="quicker"/>
          {!openAddProjects && <img src={foodelity} alt="quicker"/>}
        </section>
        <section className={styles.flex_projects2}>
          <img src={kausar} alt="quicker"/>
          <img src={printers} alt="quicker"/>
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
                    <img src={sozaev} alt="quicker"/>
                  </>)}

        </section>
      </div>
  );
};

export default memo(Projects);
