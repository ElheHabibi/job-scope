import ResultCounter from "../../components/resultcounter/ResultCounter";
import SearchForm from "../../components/searchForm/SearchForm";
import SortingControls from "../../components/sortingControls/SortingControls";

function Home() {
  return (
    <div>
      <SearchForm />
      <main className="w-full lg:w-1/2 min-h-125 m-auto rounded mt-4 border border-border">
        <div className="flex justify-between font-medium text-secondary border-b border-border">
          <ResultCounter />
          <SortingControls />
        </div>
      </main>
    </div>
  );
}

export default Home;
