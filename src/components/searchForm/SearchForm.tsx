import { useEffect, useState } from "react";
import ButtonComponent from "../button/ButtonComponent";
import Container from "../container/Container";
import { fetchJobs } from "../../services/api";

function SearchForm() {
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (!searchText) return;

    fetchJobs().then((res) => {
      console.log(res.data.data);
    });
  }, [searchText]);

  return (
    <Container>
      <form
        className="flex w-full lg:w-1/2 justify-center mx-auto mt-10"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex flex-1 items-center gap-2 rounded-l-lg border border-border focus-within:border-primary px-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="gray"
            viewBox="0 0 24 24"
          >
            <path d="M18 10c0-4.41-3.59-8-8-8s-8 3.59-8 8 3.59 8 8 8c1.85 0 3.54-.63 4.9-1.69l5.1 5.1L21.41 20l-5.1-5.1A8 8 0 0 0 18 10M4 10c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6-6-2.69-6-6"></path>
          </svg>

          <input
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            type="text"
            placeholder="search"
            className="w-full text-sm text-text-primary outline-none placeholder:text-secondary"
          />
        </div>

        <ButtonComponent type="submit" variant="search">
          Search
        </ButtonComponent>
      </form>
    </Container>
  );
}

export default SearchForm;
