import React, {memo, useCallback, useState} from 'react';
import styles from "./Projects.module.css";
import foodelity from "../../images/project_images/foodelity.png";
import irina from "../../images/project_images/irina.png";
import kausar from "../../images/project_images/kausar.png";
import minivan from "../../images/project_images/minivan.png";
import printers from "../../images/project_images/printers.png";
import sozaev from "../../images/project_images/sozaev.png";
import {useAppSelector} from "../../redux/hooks";
import {useDispatch} from "react-redux";
import {changeMinivanPage} from "../../redux/models/main";

type MyType = {
  id: number;
  name: string;
}

type MyGroupType = {
  [key: string]: MyType;
}

type ProjectProps = {
  data: MyType
}

const Projects = ({data}: any) => {
  console.log(data);
  const dispatch = useDispatch()
  const [openAddProjects, setOpenAddProjects] = useState(true);
  const isQuicker = useAppSelector((state) => state.main.isMinivanPage);

  function openAllProjects() {
    setOpenAddProjects(false);
  }

  const enableNewsStatus = useCallback(
      () => {
        dispatch(changeMinivanPage(true))
      },
      [dispatch],
  );

  return (
      <>
        {!isQuicker ? (
            <div className={styles.projects_container}>
              <section className={styles.flex_projects1}>
                <img src={minivan} alt="quicker"
                     onClick={enableNewsStatus}
                />
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
        ) : (
            <div className={styles.new_project_container}>
              {data.renderQuicker.map((picture:any) => (
                  <img
                      className={styles.picture}
                      src={picture.name} alt="picture"
                      key={picture.id}
                  />
              ))}
            </div>
        )}
      </>
  );
};

export default memo(Projects);
