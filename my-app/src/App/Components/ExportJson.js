import React from 'react';

function ExportJSON({ data }) {
  const exportToJson = () => {
    // Convert the questions and answers to a JSON array
    const jsonData = data[QuestionShow].slice(2).map((question) => ({
      id: question.id,
      Question: question.Question,
      Answer: question.answer,
      Skip: question.skip,
    }));

    // Send a POST request to the PHP script
    fetch('http://your-server/import-json.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jsonData),
    })
      .then((response) => response.text())
      .then((result) => {
        console.log(result); // Display the response from the PHP script
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <button onClick={exportToJson}>
      Export JSON
    </button>
  );
}

export default ExportJSON;
