import SaveButton from "../saveButton/SaveButton";

function JobListItem({job}) {
  return (
    <li className="nth-[n+6]:hidden flex justify-between items-center p-4 border-b border-border">
      <div className="flex items-center px-4 py-2 min-w-0 flex-1">
        <div className="bg-muted rounded p-4 font-bold shrink-0">CS</div>
        <div className="ml-4 min-w-0 flex-1">
          <h3 className="font-bold overflow-hidden text-ellipsis whitespace-nowrap">
            {job.title}
          </h3>
          <p className="font-medium overflow-hidden text-ellipsis whitespace-nowrap">
            {job.company_name}
          </p>
        </div>
      </div>

      <div className="flex items-center flex-col gap-2 shrink-0">
        <SaveButton />
        {
          (job.remote)&&(

            <span className="text-xs font-medium rounded-4xl px-2 py-0.5 bg-success-light">remote</span> 
          )
        }
      </div>
    </li>
  );
}

export default JobListItem;
