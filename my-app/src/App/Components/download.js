import { jsPDF } from "jspdf";

export function download(Getquestions) {
  const filterQuestions = (section) => {
    return section
      .filter(item => !item.title && typeof item.done === 'undefined' && !(item.skip || false));
  };

  // Use Object.keys to iterate over each section and apply the filtering function
  const filteredData = Object.fromEntries(
    Object.keys(Getquestions).map(section => [section, filterQuestions(Getquestions[section])])
  );
  const doc = new jsPDF();

  
  let yPosition = 20;
  const margin = 10;

  // Set font and font size
  doc.setFont("helvetica", "normal");

  // Iterate through sections
  Object.entries(filteredData).forEach(([section, questions]) => {

    section = Getquestions[section][0].title
    // Add section title
    doc.setTextColor(0, 0, 255); // Set text color to blue
    doc.setFont("helvetica", "bold");
    doc.text(`Section: ${section}`, margin, yPosition);
    yPosition += 10;

    // Reset font style and text color
    doc.setTextColor(0, 0, 0);
    doc.setFont("helvetica", "normal");

    // Iterate through questions in the section
    questions.forEach((Question) => {
      doc.text(`${Question.Question}`, margin, yPosition);
      yPosition += 7;
      doc.text(`${Question.answer || 'null'}`, margin, yPosition);
      yPosition += 10;
    });


  });

  // Save the PDF
  doc.save("Documentation.pdf");
}
