import React from "react";
import JobTable from "../components/JobTable";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { TABLE } from "../components/constants"


const Home = () => {
  return (
    <>
      <Sidebar />
      <Navbar />
      <JobTable table={TABLE.DATA}/>
    </>
  );
};

export default Home;
