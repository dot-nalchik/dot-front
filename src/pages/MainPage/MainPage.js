import React, {memo} from 'react';
import Header from "../../components/Header/Header";
import TitleOfProject from "../../components/TitleOfProject/TitleOfProject";
import Options from "../../components/Options/Options";
import Contacts from "../../components/Contacts/Contacts";
import Projects from "../../components/Projects/Projects";

const MainPage = () => {
  return (
    <div>
      <Header/>
      <TitleOfProject/>
      <Projects />
      <Options />
      <Contacts />
    </div>
  );
};

export default memo(MainPage);
