/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import { getProjectsRows, getWorkExperienceRows } from "../controller/notion";

export default function LandingPage() {
  const [notionWorkExperience, setNotionWorkExperience] = useState();
  const [notionProjects, setNotionProjects] = useState();

  const [refreshPage, setRefreshPage] = useState(true);

  const updateWorkExperience = () => {
    const data = getWorkExperienceRows();
    setNotionWorkExperience(data);
  };

  const updateProjects = () => {
    const data = getProjectsRows();
    setNotionProjects(data);
  };

  useEffect(() => {}, [notionWorkExperience, notionProjects]);

  return (
    <main className="h-screen">
      <h1>API Testing</h1>
      <br />

      <div>
        <h2>Get work experience</h2>
        <a>
          <button onClick={updateWorkExperience} className="bg-gray-500">
            button
          </button>
        </a>
        <br />
        result :
        <br />
        <br />
        {notionWorkExperience}
        <br />
        <br />
      </div>

      <div>
        <h2>Get Projects</h2>
        <a>
          <button onClick={updateProjects} className="bg-gray-500">
            button
          </button>
        </a>
        <br />
        result :
        <br />
        <br />
        {notionProjects}
        <br />
        <br />
      </div>
    </main>
  );
}
