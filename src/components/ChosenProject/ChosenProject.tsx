import quicker1 from "../../images/project_images/quicker/quicker1.png";
import quicker2 from "../../images/project_images/quicker/quicker2.png";
import quicker3 from "../../images/project_images/quicker/quicker3.png";
import quicker4 from "../../images/project_images/quicker/quicker4.png";
import quicker5 from "../../images/project_images/quicker/quicker5.png";
import quicker6 from "../../images/project_images/quicker/quicker6.png";
import quicker7 from "../../images/project_images/quicker/quicker7.png";
import quicker8 from "../../images/project_images/quicker/quicker8.png";
import printers1 from "../../images/project_images/printers/printers1.png";
import printers2 from "../../images/project_images/printers/printers2.png";
import printers3 from "../../images/project_images/printers/printers3.png";
import printers4 from "../../images/project_images/printers/printers4.png";
import printers5 from "../../images/project_images/printers/printers5.png";
import foodelity1 from "../../images/project_images/foodelity/foodelity1.png";
import foodelity2 from "../../images/project_images/foodelity/foodelity2.png";
import foodelity3 from "../../images/project_images/foodelity/foodelity3.png";
import foodelity4 from "../../images/project_images/foodelity/foodelity4.png";
import irina1 from "../../images/project_images/irina/irina1.png";
import irina2 from "../../images/project_images/irina/irina2.png";
import irina3 from "../../images/project_images/irina/irina3.png";
import irina4 from "../../images/project_images/irina/irina4.png";
import irina5 from "../../images/project_images/irina/irina5.png";
import irina6 from "../../images/project_images/irina/irina6.png";
import kausar1 from "../../images/project_images/kausar/kausar1.png";
import kausar2 from "../../images/project_images/kausar/kausar2.png";
import kausar3 from "../../images/project_images/kausar/kausar3.png";
import kausar4 from "../../images/project_images/kausar/kausar4.png";
import kausar5 from "../../images/project_images/kausar/kausar5.png";
import kausar6 from "../../images/project_images/kausar/kausar6.png";
import sozaev1 from "../../images/project_images/sozaev/sozaev1.png";
import sozaev2 from "../../images/project_images/sozaev/sozaev2.png";
import sozaev3 from "../../images/project_images/sozaev/sozaev3.png";
import sozaev4 from "../../images/project_images/sozaev/sozaev4.png";
import sozaev5 from "../../images/project_images/sozaev/sozaev5.png";
import sozaev6 from "../../images/project_images/sozaev/sozaev6.png";
import styles from "./ChosenProject.module.css";
import {useAppSelector} from "../../redux/hooks";
import {memo, useState} from "react";

const ChosenProject = () => {
  const [result1, setResult1] = useState(sozaev1);
  const [result2, setResult2] = useState(sozaev2);
  const [result3, setResult3] = useState(sozaev3);
  const [result4, setResult4] = useState(sozaev4);
  const [result5, setResult5] = useState(sozaev5);
  const [result6, setResult6] = useState(sozaev6);
  const [result7, setResult7] = useState("");
  const [result8, setResult8] = useState("");
  const isMainPage = useAppSelector((state) => state.main.isMainPage);
  const isQuicker = useAppSelector((state) => state.main.isQuickerPage);
  const isFoodelityPage = useAppSelector((state) => state.main.isFoodelityPage);
  const isIrinaPage = useAppSelector((state) => state.main.isIrinaPage);
  const isKausarPage = useAppSelector((state) => state.main.isKausarPage);
  const isSozaevPage = useAppSelector((state) => state.main.isSozaevPage);
  const isPrintersPage = useAppSelector((state) => state.main.isPrintersPage);

  const renderPages: { id: number, name: string }[] = [
    {
      id: Math.random(),
      name: isQuicker ?
          quicker1 : isFoodelityPage ?
              foodelity1 : isIrinaPage ?
                  irina1 : isKausarPage ?
                      kausar1 : isSozaevPage ?
                          sozaev1 : printers1,
    },
    {
      id: Math.random(),
      name: isQuicker ?
          quicker2 : isFoodelityPage ?
              foodelity2 : isIrinaPage ?
                  irina2 : isKausarPage ?
                      kausar2 : isSozaevPage ?
                          sozaev2 : printers2,
    },
    {
      id: Math.random(),
      name: isQuicker ?
          quicker3 : isFoodelityPage ?
              foodelity3 : isIrinaPage ?
                  irina3 : isKausarPage ?
                      kausar3 : isSozaevPage ?
                          sozaev3 : printers3,
    },
    {
      id: Math.random(),
      name: isQuicker ?
          quicker4 : isFoodelityPage ?
              foodelity4 : isIrinaPage ?
                  irina4 : isKausarPage ?
                      kausar4 : isSozaevPage ?
                          sozaev4 : printers4,
    },
    {
      id: Math.random(),
      name: isQuicker ?
          quicker5 : isFoodelityPage ?
              "" : isIrinaPage ?
                  irina5 : isKausarPage ?
                      kausar5 : isSozaevPage ?
                          sozaev5 : printers5,
    },
    {
      id: Math.random(),
      name: isQuicker ?
          quicker6 : isFoodelityPage ?
              "" : isIrinaPage ?
                  irina6 : isKausarPage ?
                      kausar6 : isSozaevPage ?
                          sozaev6 : "",
    },
    {
      id: Math.random(),
      name: isQuicker ?
          quicker7 : "",
    },
    {
      id: Math.random(),
      name: isQuicker ? quicker8 : "",
    },
  ]
  return (
      <>
        <section className={styles.project_box}>
          {renderPages.map((item) => (
                  <div key={item.id}>
                    {item.name &&
                      <img
                        className={styles.projects_item}
                        src={item.name}
                      />}

                  </div>
              )
          )}
        </section>
      </>
  )
}

export default memo(ChosenProject);

