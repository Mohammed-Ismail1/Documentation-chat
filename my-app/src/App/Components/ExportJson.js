export const ExportJSON = async (answers, skip, done, Getquestions) => {
  // Ensure that Getquestions is an array before using map
  const questionsArray = Array.isArray(Getquestions) ? Getquestions : [];

  // Convert the questions and answers to a JSON array
  const jsonData = { answers, skip, done }
  console.log("JSON Data: ", JSON.stringify(jsonData));

  try {
    // Send a POST request to the PHP script using async/await
    const response = await fetch('http://172.18.33.173/documentation-chat/import.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',  // Add this line
      },
      body: JSON.stringify(jsonData),
    });

    // Check if the HTTP response is successful (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the response text
    const result = await response.text();
    console.log(result); // Display the response from the PHP script
    return result
  } catch (error) {
    console.log("JSON Data:", JSON.stringify(jsonData));
    console.error(error);
    return error
  }
};



export const importFromJson = async () => {
  //set the file url to the path of your import.php file
  const phpFileUrl = 'http://192.168.178.214/Year_3/Database_JSON_Function/Database JSON Function/includes/json.php';

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
