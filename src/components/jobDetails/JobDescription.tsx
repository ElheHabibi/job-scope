const JobDescription = () => {
  return (
    <article className="rounded-2xl border border-border bg-background p-6 shadow-sm sm:p-8">
      <div className="mb-8 flex gap-8 overflow-x-auto border-b border-border">
        <button
          type="button"
          className="shrink-0 border-b-2 border-primary pb-4 text-sm font-medium text-primary"
        >
          Job Description
        </button>

        <button
          type="button"
          className="shrink-0 pb-4 text-sm font-medium text-text-secondary hover:text-primary"
        >
          About Company
        </button>

        <button
          type="button"
          className="shrink-0 pb-4 text-sm font-medium text-secondary hover:text-primary"
        >
          Benefits
        </button>
      </div>

      <section>
        <h2 className="text-xl font-semibold text-text-primary">
          Overview
        </h2>

        <p className="mt-4 text-secondary">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis dolor alias consectetur quos fuga, voluptatibus obcaecati in ut possimus nam, quam at cum voluptates labore modi, placeat quod eius ipsum excepturi rem nemo illum minima. Quasi veritatis fugit porro doloremque pariatur unde placeat, iusto molestiae excepturi itaque autem odit rem ut reprehenderit praesentium mollitia eum quidem aspernatur voluptatibus quibusdam aperiam totam. Cumque perferendis excepturi saepe, similique consectetur distinctio temporibus dicta magni reprehenderit sapiente dolorem culpa explicabo. Quo fugit nemo libero dicta alias tempore quis! Optio similique neque pariatur nisi totam reprehenderit aliquam excepturi et, repellat accusamus quidem! Non, suscipit? Harum.
        </p>
      </section>

    
    </article>
  );
};

export default JobDescription;