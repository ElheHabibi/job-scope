import SaveButton from "../saveButton/SaveButton";

function JobHeader() {
  return (
    <section className="rounded-2xl border border-border p-6 sm:p-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
          <div className="h-20 w-20 shrink-0 flex items-center justify-center rounded-xl bg-primary text-4xl font-bold text-white">
            CS
          </div>

          <div>
            <span className="rounded-md bg-success-light px-3 py-1 text-xs font-medium text-success">
              Full-time
            </span>

            <h1 className="mt-2 text-2xl font-bold text-text-primary sm:text-3xl">
              Frontend React Developer
            </h1>

            <div className="mt-2 flex items-center gap-2 text-sm text-secondary">
              <span>CapSoft</span>
              <span>•</span>
              <span>Remote</span>
            </div>

            <p className="mt-2 text-sm text-muted">Posted 2 hours ago</p>

            <div className="mt-4 flex flex-wrap gap-2">
              <span>
                skills skills skills skills skills skills skills skills skills
                skills skills skills skills skills skills
              </span>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col gap-3 md:w-44">
          <button
            type="button"
            className="rounded-lg bg-primary px-5 py-3 text-sm text-white font-meduim transition-colors hover:bg-primary-hover"
          >
            Apply Now
          </button>

          <button
            className="flex gap-4 rounded-lg border border-border px-5 py-3 text-sm font-medium text-secondary transition-colors hover:text-primary"
          >

                <div className="ml-3">
                  <SaveButton />
                </div>
                <span>Save Job</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default JobHeader;
