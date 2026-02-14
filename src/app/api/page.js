/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import { getProjectsRows, getWorkExperienceRows } from "../controller/notion";

export default function LandingPage() {
  const [notionWorkExperience, setNotionWorkExperience] = useState();
  const [notionProjects, setNotionProjects] = useState();

  const [refreshPage, setRefreshPage] = useState(true);

  const updateWorkExperience = async () => {
    const data = await getWorkExperienceRows();
    console.log(data);
    setNotionWorkExperience(data);
  };

  const updateProjects = async () => {
    const data = await getProjectsRows();
    console.log(data);
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
        <div>
          {notionWorkExperience?.length > 0 ? (
            <>
              {notionWorkExperience.map((job) => (
                // job is the object with keys: {id, job_name, job_role, etc.}
                // DO NOT do: <div>{job}</div>
                <div key={job.id}>
                  <h1>{job.job_name}</h1>
                  <h2>{job.job_role}</h2>
                  <p>{job.employment_date}</p>

                  {/* If rendering skills, you must map them too */}
                  <div>
                    {job.job_skills.map((skill, index) => (
                      <span key={index}>{skill.name}</span>
                    ))}
                  </div>
                </div>
              ))}
              <br />
            </>
          ) : (
            <>bruh</>
          )}
        </div>
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
