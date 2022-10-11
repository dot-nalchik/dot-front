import React, {memo} from 'react';
import Header from "../../components/Header/Header";
import TitleOfProject from "../../components/TitleOfProject/TitleOfProject";
import Options from "../../components/Options/Options";
import Contacts from "../../components/Contacts/Contacts";
import Projects from "../../components/Projects/Projects";
import {useAppSelector} from "../../redux/hooks";
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

type MyType = {
  id: number;
  name: any;
}

const MainPage = () => {
  const isMainPage = useAppSelector((state) => state.main.isMainPage);
  const isQuicker = useAppSelector((state) => state.main.isQuickerPage);
  const isFoodelityPage = useAppSelector((state) => state.main.isFoodelityPage);
  const isIrinaPage = useAppSelector((state) => state.main.isIrinaPage);
  const isKausarPage = useAppSelector((state) => state.main.isKausarPage);
  const isSozaevPage = useAppSelector((state) => state.main.isSozaevPage);
  const isPrintersPage = useAppSelector((state) => state.main.isPrintersPage);
  let result1 = "";
  let result2 = "";
  let result3 = "";
  let result4 = "";
  let result5 = "";
  let result6 = "";
  let result7 = "";
  let result8 = "";
  switch (true) {
    case isQuicker:
      result1 = quicker1;
      result2 = quicker2;
      result3 = quicker3;
      result4 = quicker4;
      result5 = quicker5;
      result6 = quicker6;
      result7 = quicker7;
      break;
    case isPrintersPage: result1 = printers1; break;
  }

const renderQuicker: { id: number, name: string }[] = [
  {
    id: Math.random(),
    name: result1,
  },
  {
    id: Math.random(),
    name: result2,
  },
  {
    id: Math.random(),
    name: result3,
  },
  {
    id: Math.random(),
    name: result4,
  },
  {
    id: Math.random(),
    name: result5,
  },
  {
    id: Math.random(),
    name: result6,
  },
  {
    id: Math.random(),
    name: result7,
  },
  {
    id: Math.random(),
    name: result8,
  },
]

  return (
    <div>
      <Header/>
      <TitleOfProject/>
      <Projects data={{renderQuicker}}/>
      {isMainPage && <Options />}
      <Contacts />
    </div>
  );
};

export default memo(MainPage);
