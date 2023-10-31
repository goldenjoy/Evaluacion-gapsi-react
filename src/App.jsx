import { Header } from "./Header";
import { BodyContent } from "./BodyContent";
import { useState } from "react";
import "./App.css";

function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    //console.log(option);
    setSelectedOption(option);
  };

  return (
    <>
      <Header onOptionClick={handleOptionClick} />
      <BodyContent selectedOption={selectedOption} />
    </>
  );
}

export default App;
