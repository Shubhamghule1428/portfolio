import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experince from "./components/experince/Experince";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/Footer";

export const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experince />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
