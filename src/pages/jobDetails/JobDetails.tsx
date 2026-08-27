import JobDescription from "../../components/jobDetails/JobDescription";
import JobHeader from "../../components/jobDetails/JobHeader";

const JobDetails = () => {
  return (
    <main className="bg-surface py-8">
      <div className="mx-auto max-w-7xl space-y-6 px-4 sm:px-6 lg:px-8">
        <JobHeader />
        <JobDescription />
      </div>
    </main>
  );
};

export default JobDetails;