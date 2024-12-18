fetch("/.netlify/functions/get-projects")
  .then((response) => response.json())
  .then((data) => console.log(data));

exports.handler = async () => {
  const TAKESHAPE_API_URL = "https://api.takeshape.io/project/YOUR_PROJECT_ID/graphql";
  const TAKESHAPE_ACCESS_TOKEN = process.env.TAKESHAPE_ACCESS_TOKEN;

  const query = `
    query {
      projects: getProjectList {
        id
        name
      }
    }
  `;

  try {
    const response = await fetch(TAKESHAPE_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TAKESHAPE_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    });

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch data from Takeshape API" }),
    };
  }
};