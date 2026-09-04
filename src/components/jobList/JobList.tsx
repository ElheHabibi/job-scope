import { Link } from "react-router-dom";
import JobListItem from "../jobListItem/JobListItem";
import type { IJobs } from "../../types/servers";

type TJobListProps = {
  jobItems: IJobs[];
};

function JobList({ jobItems }: TJobListProps) {
  return (
    <ul>
      {jobItems.map((job: IJobs) => {
        return (
          <Link to="/jobs/job-details" key={job.slug}>
            <JobListItem {...job} />
          </Link>
        );
      })}
    </ul>
  );
}

export default JobList;
