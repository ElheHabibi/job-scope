import JobList from "../../components/jobList/JobList";
import PaginationControls from "../../components/paginationControls/PaginationControls";
import ResultCounter from "../../components/resultcounter/ResultCounter";
import SearchForm from "../../components/searchForm/SearchForm";
import SortingControls from "../../components/sortingControls/SortingControls";

function Home() {
  return (
    <div className="min-h-screen">
      <SearchForm />
      <main className="w-full lg:w-1/2 m-auto rounded mt-4 border border-border overflow-hidden">
        <div className="flex justify-between font-medium text-secondary border-b border-border">
          <ResultCounter />
          <SortingControls />
        </div>
          <JobList />
          <PaginationControls />
      </main>
    </div>
  );
}

export default Home;
