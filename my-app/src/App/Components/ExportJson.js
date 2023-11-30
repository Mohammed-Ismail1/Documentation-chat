export function ExportJSON({ data, QuestionShow}) {
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
}

export const importFromJson =  async () => {
  const phpFileUrl = 'http://172.18.33.164/documentation-chat/import_export.php';

  try {
    const response = await fetch(phpFileUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const jsonData = await response.json();

    return jsonData;
  } catch (error) {
    console.error('Fetch error:', error);
  }
}
