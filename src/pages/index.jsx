import React, { useState } from "react";
import JobTable from "../components/JobTable";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import HeroSection from "../components/HeroSection";
import { TABLE } from "../components/constants"



const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  const [currentTab, setCurrentTab] = useState("")
  
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <JobTable table={TABLE.DATA}/>
    </>
  );
};

export default Home;
