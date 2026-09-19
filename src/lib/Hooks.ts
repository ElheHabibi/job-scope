import { useState, useEffect } from "react";
import { fetchJobs } from "../services/api";
import type { IJobs } from "./types";

export function useJobItems(searchText: string){
  const [jobItems, setJobItems] = useState<IJobs[]>([]);
  const JobItemsSliced = jobItems.slice(0,7);

  useEffect(() => {
    if (!searchText) return;

    fetchJobs().then((res) => {
      const filtered = res.data.data.filter(
        (job: IJobs) =>
          job.title.toLowerCase().includes(searchText.toLowerCase()) ||
          job.tags.some((tag) =>
            tag.toLowerCase().includes(searchText.toLowerCase()),
          ),
      );
      setJobItems(filtered);
    });
  }, [searchText]);

  return JobItemsSliced
}