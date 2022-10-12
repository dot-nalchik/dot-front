import React, {memo} from 'react';
import Header from "../../components/Header/Header";
import TitleOfProject from "../../components/TitleOfProject/TitleOfProject";
import Options from "../../components/Options/Options";
import Contacts from "../../components/Contacts/Contacts";
import Projects from "../../components/Projects/Projects";
import {useAppSelector} from "../../redux/hooks";
import ChosenProject from "../../components/ChosenProject/ChosenProject";

const MainPage = () => {
  const isMainPage = useAppSelector((state) => state.main.isMainPage);

  return (
      <div>
        <Header/>
        <TitleOfProject/>
        {isMainPage ? (
            <>
              <Projects/>
              <Options/>
            </>
        ) : (
            <ChosenProject/>
        )}
        <Contacts/>
      </div>
  );
};

export default memo(MainPage);
