import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Layout from "./components/layout/Layout";
import About from "./pages/about/About";
import SavedJobs from "./pages/savedJobs/SavedJobs";
import JobDetails from "./pages/jobDetails/JobDetails";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/saved-jobs" element={<SavedJobs />} />
          <Route path="/about" element={<About />} />
          <Route path="/Home/jobs/job-content" element={<JobDetails />}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
