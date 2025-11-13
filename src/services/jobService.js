// Mock job data
const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Tech Solutions",
    location: "Mumbai, India",
    description:
      "We are looking for a skilled Frontend Developer proficient in React and Tailwind CSS.",
    postedDate: "2025-11-10",
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "Innovatech",
    location: "Bangalore, India",
    description:
      "Seeking an experienced Backend Developer with Node.js and Express knowledge.",
    postedDate: "2025-11-09",
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "WebWorks",
    location: "Pune, India",
    description:
      "Looking for a Full Stack Developer skilled in MERN stack to join our team.",
    postedDate: "2025-11-08",
  },
];

// Function to get all jobs (simulate API call)
export const getJobs = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(jobs);
    }, 500); // Simulate network delay
  });
};

// Function to get a single job by ID
export const getJobById = (id) => {
  return new Promise((resolve) => {
    const job = jobs.find((job) => job.id === parseInt(id));
    setTimeout(() => {
      resolve(job);
    }, 500);
  });
};

// Function to add a new job
export const postJob = (newJob) => {
  return new Promise((resolve) => {
    const id = jobs.length + 1;
    const jobToAdd = { id, postedDate: new Date().toISOString().split("T")[0], ...newJob };
    jobs.push(jobToAdd);
    setTimeout(() => {
      resolve(jobToAdd);
    }, 500);
  });
};
