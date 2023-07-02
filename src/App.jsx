import { useEffect, useState } from "react";
import { MyDetail } from "./MyDetail";
import "./App.css";
function App() {
  let data = {
    name: "Sujata Dongol",
    url: "https://i.imgur.com/MK3eW3Am.jpg",
    homeAddress: "Kathmandu",
    officeAddress: "Patan",
    email: "sujata.dongol@treeleaf.ai",
  };
  let [inputCurrent, setCurrentInput] = useState("");
  let [arrayName, setArrayName] = useState([]);

  useEffect(() => {
    //do something
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((res) => res.json())
      .then((json) => setArrayName(json));
  }, []);

  function handleAddName(e) {
    e.preventDefault();
    setArrayName([
      {
        title: inputCurrent,
        url: "https://i.imgur.com/MK3eW3Am.jpg",
        homeAddress: "Kathmandu",
        officeAddress: "Patan",
        email: "sujata.dongol@treeleaf.ai",
      },
      ...arrayName,
    ]);
    setCurrentInput("");
  }

  function handleFetch() {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((res) => res.json())
      .then((json) => setArrayName(json));
  }

  function clearAllData() {
    setArrayName([]);
  }

  return (
    <div className="container">
      <h1>My photos</h1>

      <input
        type="text"
        value={inputCurrent}
        onChange={(e) => {
          e.preventDefault();
          setCurrentInput(e.target.value);
        }}
      />
      <button onClick={handleAddName}>add</button>

      <button onClick={handleFetch}>fetch data from backend</button>
      <button onClick={clearAllData}>clearAllData</button>
      {arrayName.map((item) => {
        return <MyDetail detailObj={item} />;
      })}
    </div>
  );
}

export default App;
https://github.com/sujatadongol/react-workshop