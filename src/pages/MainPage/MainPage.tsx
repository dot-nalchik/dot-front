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

type MyType = {
  id: number;
  name: string;
}

type MyGroupType = {
  [key:string]: MyType;
}

const MainPage = () => {
  const isQuicker = useAppSelector((state) => state.main.isMinivanPage);

const renderQuicker: { id: number, name: string }[] = [
  {
    id: Math.random(),
    name: quicker1,
  },
  {
    id: Math.random(),
    name: quicker2,
  },
  {
    id: Math.random(),
    name: quicker3,
  },
  {
    id: Math.random(),
    name: quicker4,
  },
  {
    id: Math.random(),
    name: quicker5,
  },
  {
    id: Math.random(),
    name: quicker6,
  },
]

  return (
    <div>
      <Header/>
      <TitleOfProject/>
      <Projects data={{renderQuicker}}/>
      {!isQuicker && <Options />}
      <Contacts />
    </div>
  );
};

export default memo(MainPage);
