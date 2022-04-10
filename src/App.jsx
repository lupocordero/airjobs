import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Airtable from "airtable";

import Home from "./pages";

const base = new Airtable({
  apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
}).base("appbiSYh8VpMd1f4R");

function App() {
  
  return (
    <Router>
      <Home/>
      {/* <JobTable table={TABLE.DATA} /> */}
    </Router>
  );
}

export default App;
