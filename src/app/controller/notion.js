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

  const data = response.results.map((page) => {
    const result = page.properties;

    return {
      id: result.id.title?.[0]?.text?.content ?? "N/A",
      job_name: result.job_name.rich_text?.[0]?.text?.content ?? "Untitled",
      job_role: result.job_role.rich_text?.[0]?.text?.content ?? "",
      job_company: result.job_company.rich_text?.[0]?.text?.content ?? "",
      job_skills:
        result.job_skills.multi_select?.map(({ id, ...rest }) => rest) ?? [],
      job_description:
        result.job_description.rich_text?.[0]?.text?.content ?? "",
      job_logo:
        result.job_logo.files?.[0]?.file?.url ??
        result.job_logo.files?.[0]?.external?.url ??
        "",
      employment_date: `${
        result.employment_date_start.date?.start
          ? new Date(
              result.employment_date_start.date.start,
            ).toLocaleDateString("en-US", { month: "short", year: "numeric" })
          : "N/A"
      } - ${
        result.employment_date_end.date?.start
          ? new Date(result.employment_date_end.date.start).toLocaleDateString(
              "en-US",
              { month: "short", year: "numeric" },
            )
          : "Present"
      }`,
    };
  });

  console.log(data)

  return data
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
