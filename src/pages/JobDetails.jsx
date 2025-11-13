import React from "react";
import { useParams } from "react-router-dom";
import { getJobs } from "../services/jobService";
import "../pages/JobDetails.css";

const JobDetails = () => {
  const { id } = useParams();
  const job = getJobs().find((job) => job.id === parseInt(id));

  if (!job) return <p className="p-4">Job not found</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">{job.title}</h1>
      <p className="text-gray-600 mb-1">Company: {job.company}</p>
      <p className="text-gray-600 mb-1">Location: {job.location}</p>
      <p className="text-gray-400 mb-4">Posted on: {job.postedDate}</p>
      <p>{job.description}</p>
    </div>
  );
};

export default JobDetails;
