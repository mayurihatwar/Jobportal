import React from "react";
import "../components/JobCard.css";

const JobCard = ({ job }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md mb-4 hover:shadow-xl transition">
      <h2 className="text-lg font-bold">{job.title}</h2>
      <p className="text-gray-600">{job.company}</p>
      <p className="text-gray-500">{job.location}</p>
      <p className="text-sm text-gray-400">{job.postedDate}</p>
      <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        View Details
      </button>
    </div>
  );
};

export default JobCard;
