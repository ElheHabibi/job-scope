import { useEffect, useState } from "react";
import JobList from "../../components/jobList/JobList";
import PaginationControls from "../../components/paginationControls/PaginationControls";
import ResultCounter from "../../components/resultcounter/ResultCounter";
import SearchForm from "../../components/searchForm/SearchForm";
import SortingControls from "../../components/sortingControls/SortingControls";
import { fetchJobs } from "../../services/api";

function Home() {
    const [searchText, setSearchText] = useState("");
    const [jobItems, setJobItems] = useState([]);

     useEffect(() => {
    if (!searchText) return;

    fetchJobs().then(res => {
          const filtered = res.data.data.filter((job) =>
            job.title.toLowerCase().includes(searchText.toLowerCase()) ||
            job.tags.some((tag) => tag.toLowerCase().includes(searchText.toLowerCase()))
          );
          setJobItems(filtered);
        })
  }, [searchText]);

  return (
    <div className="min-h-screen">
      <SearchForm searchText={searchText} setSearchText={setSearchText} />
      <main className="w-full lg:w-1/2 m-auto rounded mt-4 border border-border overflow-hidden">
        <div className="flex justify-between font-medium text-secondary border-b border-border">
          <ResultCounter />
          <SortingControls />
        </div>
          <JobList jobItems={jobItems}/>
          <PaginationControls />
      </main>
    </div>
  );
}

export default Home;
