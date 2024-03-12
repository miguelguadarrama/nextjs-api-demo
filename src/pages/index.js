import { useState, useEffect } from "react";
import ProjectList from '@/components/projectList';
import PageHeader from "@/components/pageHeader";
import Page from "@/components/page";

const HomePage = () => {
  //useState is a hook that allows us to store state in a functional component
  const [projects, setProjects] = useState(null);

  //useEffect is a hook that runs after the first render of the component
  useEffect(() => {
    fetch("/api/projects") //we use the backend API to avoid CORS issues
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []); //empty array means this effect will only run once

  // return the JSX that will be rendered
  return (
    <Page title="GCF Projects" loading={!projects}>
      <p>
        This is a list of GCF projects coming from the public API.
      </p>
      <ProjectList data={projects} />
    </Page>
  );
}

export default HomePage;