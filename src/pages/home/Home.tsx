import { useState } from "react";
import JobList from "../../components/jobList/JobList";
import PaginationControls from "../../components/paginationControls/PaginationControls";
import ResultCounter from "../../components/resultcounter/ResultCounter";
import SearchForm from "../../components/searchForm/SearchForm";
import SortingControls from "../../components/sortingControls/SortingControls";
import { useJobItems } from "../../lib/Hooks";

function Home() {
  const [searchText, setSearchText] = useState("");
  const JobItemsSliced = useJobItems(searchText)

  return (
    <div className="min-h-screen">
      <SearchForm searchText={searchText} setSearchText={setSearchText} />
      <main className="w-full lg:w-1/2 m-auto rounded mt-4 border border-border overflow-hidden">
        <div className="flex justify-between font-medium text-secondary border-b border-border">
          <ResultCounter />
          <SortingControls />
        </div>
        <JobList jobItems={JobItemsSliced} />
        <PaginationControls />
      </main>
    </div>
  );
}

export default Home;
