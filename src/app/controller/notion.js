"use server";
const { Client } = require("@notionhq/client");

// Initializing a client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

// Get the database name from the form
const dbName = process.env.NOTION_DB_ID;

const body = JSON.stringify({ dbName });

const getWorkExperienceRows = async () => {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });

  const response = await notion.dataSources.query({
    data_source_id: process.env.NOTION_WORK_EXPERIENCE_DB_ID,
  });
  const result = response.results[0].properties;

  console.log(result.name);
  return JSON.stringify(result.name, null, 4);
};

const getProjectsRows = async () => {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });

  const response = await notion.dataSources.query({
    data_source_id: process.env.NOTION_PROJECTS_DB_ID,
  });
  const result = response.results[0].properties;

  console.log(result.name);
  return JSON.stringify(result.name, null, 4);
};

export { getWorkExperienceRows, getProjectsRows };
