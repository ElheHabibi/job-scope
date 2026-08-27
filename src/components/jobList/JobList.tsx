import { Link } from "react-router-dom"
import JobListItem from "../jobListItem/JobListItem"

function JobList() {
  return (
    <ul>
      <Link to='/jobs/details'>
      <JobListItem />
      </Link>
      <Link to='/jobs/details'>
      <JobListItem />
      </Link>
      <Link to='/jobs/details'>
      <JobListItem />
      </Link>
      <Link to='/jobs/details'>
      <JobListItem />
      </Link>
      <Link to='/jobs/details'>
      <JobListItem />
      </Link>
      <Link to='/jobs/details'>
      <JobListItem />
      </Link>
    </ul>
  )
}

export default JobList
