import { Link } from "react-router-dom";
import SaveButton from "../saveButton/SaveButton";

function JobListItem() {
  return (
<li className="nth-[n+6]:hidden">    
      <Link to="/Home/jobs/job-content"
        className="flex justify-between items-center p-4 border-b border-border"
      >
        <div className="flex items-center px-4 py-2 min-w-0 flex-1">
          <div className="bg-muted rounded p-4 font-bold shrink-0">CS</div>
          <div className="ml-4 min-w-0 flex-1">
            <h3 className="font-bold overflow-hidden text-ellipsis whitespace-nowrap">
              Frontend Developer React Engineer
            </h3>
            <p className="font-medium overflow-hidden text-ellipsis whitespace-nowrap">
              CapSoft
            </p>
          </div>
        </div>

        <div className="flex items-center flex-col gap-2 shrink-0">
          <SaveButton />
          <time className="text-xs font-medium">2d</time>
        </div>
      </Link>
    </li>
  );
}

export default JobListItem;
