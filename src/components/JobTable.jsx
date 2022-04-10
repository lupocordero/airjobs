import React, { useEffect, useState } from "react";
import Airtable from "airtable";
import Job from "./Job";

const base = new Airtable({
  apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
}).base("appbiSYh8VpMd1f4R");

function JobTable({ table }) {
  const [jobs, setJobs] = useState([])
  useEffect(() => {
    base(table)
      .select({ view: "Grid view" })
      .eachPage((records, fetchNextPage) => {
        setJobs(records);
        fetchNextPage();
      });
  }, [table]);

  return (
    <>
     <h1>My Jobs</h1>
      {jobs.map(job => (
       <Job
        key={job.id}
        job={job}
        />
    ))}
  </>
  );
}

export default JobTable;