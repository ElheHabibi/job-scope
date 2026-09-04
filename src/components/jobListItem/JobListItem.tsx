import SaveButton from "../saveButton/SaveButton";
import type { IJobs } from "../../types/servers";

type TJobListItem = IJobs;

function JobListItem({ company_name, title, remote }: TJobListItem) {
  function getCompanyInitials(companyName: string): string {
    return companyName
      .split(" ")
      .filter(Boolean)
      .map((word) => word[0].toUpperCase())
      .slice(0, 2)
      .join("");
  }

  return (
    <li className="nth-[n+6]:hidden flex justify-between items-center p-4 border-b border-border">
      <div className="flex items-center px-4 py-2 min-w-0 flex-1">
        <div className="bg-muted rounded h-12 w-12 font-bold flex justify-center text-center items-center">
          {getCompanyInitials(company_name)}
        </div>
        <div className="ml-4 min-w-0 flex-1">
          <h3 className="font-bold overflow-hidden text-ellipsis whitespace-nowrap">
            {title}
          </h3>
          <p className="font-medium overflow-hidden text-ellipsis whitespace-nowrap">
            {company_name}
          </p>
        </div>
      </div>

      <div className="flex items-center flex-col gap-2 shrink-0">
        <SaveButton />
        {remote && (
          <span className="text-xs font-medium rounded-4xl px-2 py-0.5 bg-success-light">
            remote
          </span>
        )}
      </div>
    </li>
  );
}

export default JobListItem;
