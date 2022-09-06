import React from "react";
import './App.css';
import MainList from "./pages/MainList";
import Carousel from "./component/Carousel";
import Header from "./component/Header";

function App() {
  return (
    <div className="App">
      <Header/>
      <Carousel/>
      <MainList/>
    </div>
  );
}

export default App;
