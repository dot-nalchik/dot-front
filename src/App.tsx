import './App.css';
import Header from "./components/Header/Header";
import TitleOfProject from "./components/TitleOfProject/TitleOfProject";
import Options from "./components/Options/Options";
import Contacts from "./components/Contacts/Contacts";

function App() {
  return (
    <div className="App">
      <Header/>
      <TitleOfProject/>
      <Options />
      <Contacts />
    </div>
  );
}

export default App;
