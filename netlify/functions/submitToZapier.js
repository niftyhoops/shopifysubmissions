const fetch = require('node-fetch');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const body = JSON.parse(event.body);
    const response = await fetch('https://hooks.zapier.com/hooks/catch/6939704/3qzeaip/', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Success" }),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};
