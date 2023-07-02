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

  let arrayName = [
    {
      name: "Sujata Dongol",
      url: "https://i.imgur.com/MK3eW3Am.jpg",
      homeAddress: "Kathmandu",
      officeAddress: "Patan",
      email: "sujata.dongol@treeleaf.ai",
    },
    {
      name: "Chintan Karki",
      url: "https://i.imgur.com/MK3eW3Am.jpg",
      homeAddress: "Kathmandu",
      officeAddress: "Patan",
      email: "sujata.dongol@treeleaf.ai",
    },
    {
      name: "ABC..",
      url: "https://i.imgur.com/MK3eW3Am.jpg",
      homeAddress: "Kathmandu",
      officeAddress: "Patan",
      email: "sujata.dongol@treeleaf.ai",
    },
  ];

  let arrayOfStr = ["Abc", "123", "000"];
  return (
    <div className="container">
      <h1>My photos</h1>

      {arrayName.map((item) => {
        return <MyDetail detailObj={item} />;
      })}

      {arrayOfStr.map((item) => (
        <div>{item}</div>
      ))}
    </div>
  );
}

export default App;
