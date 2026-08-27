import { useState } from "react";
import { Link } from "react-router-dom";

function JobListItem() {
  const [isSaveActive, setIsSaveActive] = useState(false);
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
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsSaveActive(!isSaveActive);
            }}
            className="cursor-pointer"
          >
            {isSaveActive ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#3155e7"
                viewBox="0 0 24 24"
              >
                <path d="M18 2H6c-1.1 0-2 .9-2 2v17c0 .36.19.69.5.87s.69.18 1 0l6.5-3.72 6.5 3.72c.15.09.33.13.5.13s.35-.04.5-.13c.31-.18.5-.51.5-.87V4c0-1.1-.9-2-2-2"></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#8a93a5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2H6c-1.1 0-2 .9-2 2v17c0 .36.19.69.5.87s.69.18 1 0l6.5-3.72 6.5 3.72c.15.09.32.13.5.13s.35-.04.5-.13c.31-.18.5-.51.5-.87V4c0-1.1-.9-2-2-2m0 8v9.28l-5.5-3.14a.98.98 0 0 0-.99 0l-5.5 3.14V4h12v6Z"></path>
              </svg>
            )}
          </button>

          <time className="text-xs font-medium">2d</time>
        </div>
      </Link>
    </li>
  );
}

export default JobListItem;
