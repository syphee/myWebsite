/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import Image from "next/image";

import { getProjectsRows, getWorkExperienceRows,getTechStacksRows } from "../controller/notion";

export default function LandingPage() {
  const [notionWorkExperience, setNotionWorkExperience] = useState([]);
  const [notionTechStacks, setNotionTechStacks] = useState([]);
  
  const [notionProjects, setNotionProjects] = useState([]);

  const getWorkExperience = async () => {
    const data = await getWorkExperienceRows();
    setNotionWorkExperience(data);
  };

  const getProjects = async () => {
    const data = await getProjectsRows();
    setNotionProjects(data);
  };

  const getTechStacks = async () => {
    const data = await getTechStacksRows();
    setNotionTechStacks(data);
  };

  return (
    <main className="p-8 bg-gray-50 min-h-screen space-y-12">
      <h1 className="text-3xl font-bold border-b pb-4">
        API Testing Dashboard
      </h1>

      {/* WORK EXPERIENCE SECTION */}
      <section>
        <div className="flex items-center gap-4 mb-4">
          <h2 className="text-xl font-semibold text-black">Work Experience</h2>
          <button
            onClick={getWorkExperience}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Fetch Experience
          </button>
        </div>

        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
          <table className="w-full text-left border-collapse bg-white text-sm">
            <thead className="bg-gray-50 text-gray-600 font-medium border-b">
              <tr>
                <th className="p-4">Job Name</th>
                <th className="p-4">Role</th>
                <th className="p-4">Dates</th>
                
                <th className="p-4">Skills</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {notionWorkExperience?.length > 0 ? (
                notionWorkExperience.map((job) => (
                  <tr
                    key={job.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="p-4 font-semibold text-gray-900">
                      {job.job_name}
                    </td>
                    <td className="p-4 text-gray-600">{job.job_role}</td>
                    <td className="p-4 text-gray-500 whitespace-nowrap">
                      {job.employment_date}
                    </td>
                    <td className="p-4">
                      <div className="flex flex-wrap gap-1">
                        {job.job_skills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded-md text-xs border border-gray-200"
                          >
                            {skill.name}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    className="p-8 text-center text-gray-400 italic"
                  >
                    No experience data found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section>
        <div className="flex items-center gap-4 mb-4">
          <h2 className="text-xl font-semibold text-black">Projects</h2>
          <button
            onClick={getProjects}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
          >
            Fetch Projects
          </button>
        </div>

        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
          <table className="w-full text-left border-collapse bg-white text-xs">
            <thead className="bg-gray-50 text-gray-600 font-bold uppercase tracking-wider border-b">
              <tr>
                <th className="p-4">Project & Type</th>
                <th className="p-4">Live Status</th>
                <th className="p-4">Description</th>
                <th className="p-4">Tech Stack</th>
                <th className="p-4">Context (Problem/Challenges)</th>
                <th className="p-4">Media & Cover</th>
                <th className="p-4">Links</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {notionProjects?.length > 0 ? (
                notionProjects.map((data) => (
                  <tr
                    key={data.id}
                    className="hover:bg-gray-50 transition-colors align-top"
                  >
                    {/* Name & Type */}
                    <td className="p-4">
                      <div className="font-bold text-gray-900 text-sm">
                        {data.project_name}
                      </div>
                      <div className="flex flex-wrap gap-1 w-32">
                        {data.project_type.map((skill, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 bg-green-50 text-green-700 rounded border border-green-100 font-medium"
                          >
                            {skill.name}
                          </span>
                        ))}
                      </div>
                    </td>

                    <td className="p-4 min-w-[200px]">
                      <p className={`text-${data.project_live_status_colour.toLowerCase()}-600 `}>
                        {data.project_live_status}
                      </p>
                    </td>

                    {/* Description */}
                    <td className="p-4 min-w-[200px]">
                      <p className="text-gray-600 leading-relaxed">
                        {data.project_description}
                      </p>
                    </td>

                    {/* Tech Stack */}
                    <td className="p-4">
                      <div className="flex flex-wrap gap-1 w-32">
                        {data.project_stack.map((skill, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 bg-green-50 text-green-700 rounded border border-green-100 font-medium"
                          >
                            {skill.name}
                          </span>
                        ))}
                      </div>
                    </td>

                    {/* Problem & Challenges */}
                    <td className="p-4 min-w-[250px]">
                      <div className="space-y-2">
                        <div>
                          <span className="text-[10px] font-bold text-gray-400 uppercase">
                            Problem:
                          </span>
                          <p className="text-gray-700">
                            {data.project_problem_statement}
                          </p>
                        </div>
                        <div>
                          <span className="text-[10px] font-bold text-gray-400 uppercase">
                            Challenges:
                          </span>
                          <p className="text-gray-700">
                            {data.project_challenges}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Media & Cover */}
                    <td className="p-4 whitespace-nowrap">
                      <div className="flex flex-col gap-1 text-gray-500 italic">
                        <div
                          className="truncate w-32"
                          title={data.project_cover_img}
                        >
                          🖼️ {data.project_cover_img}
                        </div>
                        <div
                          className="truncate w-32"
                          title={data.project_media}
                        >
                          📽️ {data.project_media}
                        </div>
                      </div>
                    </td>

                    {/* Links */}
                    <td className="p-4 whitespace-nowrap">
                      <div className="flex flex-col gap-2">
                        <a
                          href={data.project_url}
                          target="_blank"
                          className="text-blue-500 hover:text-blue-700 font-semibold underline"
                        >
                          Live Site
                        </a>
                        <a
                          href={data.project_source_code}
                          target="_blank"
                          className="text-gray-500 hover:text-gray-700 underline"
                        >
                          View Code
                        </a>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="p-12 text-center text-gray-400">
                    No project data loaded yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* TECH STACKS SECTION */}
      <section>
        <div className="flex items-center gap-4 mb-4">
          <h2 className="text-xl font-semibold text-black">Tech Stacks</h2>
          <button
            onClick={getTechStacks}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Fetch Tech Stacks
          </button>
        </div>

        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
          <table className="w-full text-left border-collapse bg-white text-sm">
            <thead className="bg-gray-50 text-gray-600 font-medium border-b">
              <tr>
                <th className="p-4">Name</th>
                <th className="p-4">Logo</th>
                <th className="p-4">Type</th>
                <th className="p-4">Gradient start</th>
                <th className="p-4">Gradient end</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {notionTechStacks?.length > 0 ? (
                notionTechStacks.map((job,index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="p-4 text-gray-600">{job.id}</td>
                    <td className="p-4 font-semibold text-gray-900">
                      <Image
                      src={job.logo}
                      width={50}
                      height={50}
                      className=" "
                      alt="My portrait photo-lg"
                    />
                    </td>
                    <td className="p-4 text-gray-600">{job.type}</td>
                    <td className="p-4 text-gray-600">{job.from}</td>
                    <td className="p-4 text-gray-600">{job.to}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    className="p-8 text-center text-gray-400 italic"
                  >
                    No experience data found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
