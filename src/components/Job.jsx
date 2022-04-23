import React from 'react';

const Job = ({ job }) => {
    console.log(job)
    return (
        <div>
            <h2>{job.fields.Position}</h2>
            <div>
                <h3>Description:</h3>
                <p>{job.fields.Description}</p>
                <p>{job.fields.Link}</p>
                <p>{job.fields.City.join(", ")}</p>
                <div><p>Fast Track Interview</p>
                <input type="checkbox" defaultChecked={job.fields.FTI} disabled/></div>
            </div> 
        </div>
    )     
}

export default Job