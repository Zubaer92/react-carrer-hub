import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/Utility";


const AppliedJobs = () => {
    const jobs=useLoaderData();
    useEffect(()=>{
        const storedJobsIds=getStoredJobApplication();
        if(jobs.length >0){
            const jobsApplied=jobs.filter(job=> storedJobsIds.includes(job.id))
         console.log(jobsApplied)
        }
    },[])
    return (
        <div>
            <h2>Jobs I Applied</h2>
        </div>
    );
};

export default AppliedJobs;