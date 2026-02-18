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

  console.log(data);

  return data;
};

const getProjectsRows = async () => {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });

  const response = await notion.dataSources.query({
    data_source_id: process.env.NOTION_PROJECTS_DB_ID,
  });

  const data = response.results.map((page) => {
    const result = page.properties;
    console.log(JSON.stringify(result, null, 4));
    return {
      id: result.id.title?.[0]?.text?.content ?? "N/A",
      project_name:
        result.project_name.rich_text?.[0]?.text?.content ?? "Untitled",
        project_live_status:
        result.project_live_status.select.name ?? "Untitled",
        project_live_status_colour:
        result.project_live_status.select.color ?? "gray",
       project_type:
        result.project_type.multi_select?.map(({ id, ...rest }) => rest) ?? [],
      project_description:
        result.project_description.rich_text?.[0]?.text?.content ?? "",
      project_stack:
        result.project_stack.multi_select?.map(({ id, ...rest }) => rest) ?? [],
      project_url: result.project_url.url ?? "",
      project_source_code: result.project_source_code.url ?? "",
      project_cover_img:
        result.project_cover_img.files?.[0]?.file?.url ??
        result.project_cover_img.files?.[0]?.external?.url ??
        null,
      project_challenges:
        result.project_challenges.rich_text?.[0]?.text?.content ?? "",
      project_problem_statement:
        result.project_problem_statement.rich_text?.[0]?.text?.content ?? "",
      project_media:
        result.project_media.files?.[0]?.file?.url ??
        result.project_media.files?.[0]?.external?.url ??
        "",
    };
  });

  console.log(data);

  return data;
};

const getProjectInfoRows = async ({params =""}) => {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  console.log(params.project)
  const response = await notion.dataSources.query({
    data_source_id: process.env.NOTION_PROJECTS_DB_ID,
    filter: {
    property: "project_name",
    rich_text: { equals: `${decodeURIComponent(params.project)}` }
  }
  });

  const data = response.results.map((page) => {
    const result = page.properties;
    console.log(JSON.stringify(result, null, 4));
    return {
      id: result.id.title?.[0]?.text?.content ?? "N/A",
      project_name:
        result.project_name.rich_text?.[0]?.text?.content ?? "Untitled",
        project_live_status:
        result.project_live_status.select.name ?? "Untitled",
        project_live_status_colour:
        result.project_live_status.select.color ?? "gray",
       project_type:
        result.project_type.multi_select?.map(({ id, ...rest }) => rest) ?? [],
      project_description:
        result.project_description.rich_text?.[0]?.text?.content ?? "",
      project_stack:
        result.project_stack.multi_select?.map(({ id, ...rest }) => rest) ?? [],
      project_url: result.project_url.url ?? "",
      project_source_code: result.project_source_code.url ?? "",
      project_cover_img:
        result.project_cover_img.files?.[0]?.file?.url ??
        result.project_cover_img.files?.[0]?.external?.url ??
        null,
      project_challenges:
        result.project_challenges.rich_text?.[0]?.text?.content ?? "",
      project_problem_statement:
        result.project_problem_statement.rich_text?.[0]?.text?.content ?? "",
      project_media:
        result.project_media.files?.[0]?.file?.url ??
        result.project_media.files?.[0]?.external?.url ??
        "",
    };
  });

  console.log(data);

  return data;
};

const getTechStacksRows = async () => {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });

  const response = await notion.dataSources.query({
    data_source_id: process.env.NOTION_TECH_STACK_DB_ID ,
  });

  const data = response.results.map((page) => {
    const result = page.properties;
    console.log(JSON.stringify(result, null, 4));
    return {
      id: result.id.title?.[0]?.text?.content ?? "N/A",
      logo:
        result.logo.files?.[0]?.file?.url ??
        result.logo.files?.[0]?.external?.url ??
        null,
      type:
        result.type.rich_text?.[0]?.text?.content ?? "",
        from:
        result.from.rich_text?.[0]?.text?.content ?? "",
        to:
        result.to.rich_text?.[0]?.text?.content ?? "",

    };
  });

  console.log(data);

  return data;
};




export { getWorkExperienceRows, getProjectsRows,getTechStacksRows,getProjectInfoRows };
