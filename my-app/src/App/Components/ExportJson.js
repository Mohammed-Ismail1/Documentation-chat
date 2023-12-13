export const ExportJSON = async (jsonObject) => {

  try {
    // Send a POST request to the PHP script using async/await
    const response = await fetch('http://URL naar php file om data in database op te slaan', {
      "method": 'POST',
      "headers": {
        'Content-Type': 'application/json',
      },
      "body": JSON.stringify(jsonObject),
    });


    // Check if the HTTP response is successful (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}, Message: ${await response.text()}`);
    }

    // Parse the response text
    const result = await response.text();
    console.log(result); // Display the response from the PHP script
    console.log(jsonObject)
    return result;
  } catch (error) {
    console.error(error);
    return error;
  }
};




export const importFromJson =  async () => {
  //set the file url to the path of your php file
  const phpFileUrl = 'URL naar php file om data in database te krijgen';

  try {
    const response = await fetch(phpFileUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const jsonData = await response.json();
    console.log(jsonData);
    return jsonData;
  } catch (error) {
    console.error('Fetch error:', error);
  }
}
