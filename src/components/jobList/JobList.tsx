import { Link } from "react-router-dom";
import JobListItem from "../jobListItem/JobListItem";

function JobList({ jobItems }) {
  return (
    <ul>
      {jobItems.map((job) => {
        return(
        <Link to="/jobs/job-details" key={job.slug}>
          <JobListItem job={job} />
        </Link>
        )
      })}
    </ul>
  );
}

export default JobList;
