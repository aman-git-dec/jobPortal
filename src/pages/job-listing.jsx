
import { getJobs } from "@/api/apiJobs";

import useFetch from "@/hooks/useFetch";
import { useEffect } from "react";

const JobListing = () =>{

    const {
        fn:fnJobs,
        data:dataJobs,
        loading:loadingJobs
    } = useFetch(getJobs,{})

    console.log(dataJobs)

    useEffect(()=>{
        fnJobs()
    },[])
    
    return(
        <div>JOb listing</div>
    )
};
export default JobListing;