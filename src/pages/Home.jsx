import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import JobList from "../components/JobList";
import { getJobs } from "../services/jobService";
import "../pages/Home.css";

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      const data = await getJobs();
      setJobs(data);
    };
    fetchJobs();
  }, []);

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Available Jobs</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <JobList jobs={filteredJobs} />
    </div>
  );
};

export default Home;
