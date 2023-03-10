import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
// import About from "./components/About";
import React, { useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (massage, type) => {
    setAlert({
      type: type,
      massage: massage,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  // const [color, setColor] = useState("light");
  // const [text, setText] = useState("Enable Dark Mode");
  // const [textColor, setTextColor] = useState("light");
  // const toggle1 = () => {
  //   if (color === "light") {
  //     setColor("success");
  //     document.body.style.backgroundColor = "green";
  //   } else {
  //     setColor("light");
  //     document.body.style.backgroundColor = "white";
  //   }
  // };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("dark mode has been Enable", "success");
      document.title = "practice-Dark Mode";

      // setText("Enable Light Mode");
      // setTextColor("light");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been Enable", "success");
      document.title = "Practice App";
      // setText("Enable Dark Mode");
      // setTextColor("dark");
    }
  };
  return (
    <>
      {/* <BrowserRouter> */}
      <Navbar
        title="Add"
        about="about us"
        mode={mode}
        toggleMode={toggleMode}
        // toggle1={toggle1}
        // color={color}
        // text={text}
        // textColor={textColor}
      />
      {/* <Navbar /> */}
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Routes>
            <Route
              path="/" */}
        <Textform heading="Enter the text" mode={mode} />
        {/* ></Route>
            <Route path="/about" element={<About />} />
          </Routes> */}
      </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
