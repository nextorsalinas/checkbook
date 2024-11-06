import React from "react";
import Header from "./components/Header";
import Carousel from "./components/Carousel";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Carousel />
      </main>
    </div>
  );
}

export default App;
