const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

exports.handler = async function(event, context) {
  // Handle CORS
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*", // Allow all origins
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST, OPTIONS"
      },
      body: JSON.stringify({ message: "CORS preflight response" })
    };
  }

  // Process POST request
  if (event.httpMethod === "POST") {
    try {
      console.log("Received POST request with body:", event.body); // Log incoming request data

      const body = JSON.parse(event.body);
      const response = await fetch('https://hooks.zapier.com/hooks/catch/6939704/3qzeaip/', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      console.log("Forwarded data to Zapier and received response:", response); // Log response from Zapier

      return {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*", // Allow all origins
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: "Data processed" })
      };
    } catch (error) {
      console.error("Error in processing:", error); // Log any errors

      return {
        statusCode: 500,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: error.message })
      };
    }
  }

  // If not OPTIONS or POST
  return {
    statusCode: 405, // Method Not Allowed
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify({ message: "Method not allowed" })
  };
};
