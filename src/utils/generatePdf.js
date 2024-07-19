// src/utils/generatePdf.js

import jsPDF from "jspdf";
import "jspdf-autotable";

// Base64 encoded Noto Emoji font (this should be a complete base64 string)
// const notoEmojiBase64 = "AAEAAAASAQAABAAgR0RFRgAAAZgAAAQwAAAAAAAAAAAAAAAAAAAAAAAAA..."; // Add the complete base64 string here
export function generatePdf(data) {
  const doc = new jsPDF();

  // Add the Noto Emoji font
  doc.addFileToVFS("NotoEmoji.ttf");
  doc.addFont("NotoEmoji.ttf", "NotoEmoji", "normal");
  doc.setFont("NotoEmoji");

  // Header for the PDF file with copyright and date
  doc.setFontSize(10);
  doc.text("© 2024 Budget Data Report", 14, 10);
  doc.text("Generated on: " + new Date().toLocaleString(), 14, 15);

  // Title of the report
  doc.setFontSize(18);
  doc.text("Budget Data Report", 14, 22);

  // Function to remove emojis from a string
  const removeEmojis = (text) => {
    return text
      .replace(/[\u{1F600}-\u{1F64F}]/gu, "") // Emoticons
      .replace(/[\u{1F300}-\u{1F5FF}]/gu, "") // Miscellaneous Symbols and Pictographs
      .replace(/[\u{1F680}-\u{1F6FF}]/gu, "") // Transport and Map Symbols
      .replace(/[\u{1F700}-\u{1F77F}]/gu, "") // Alchemical Symbols
      .replace(/[\u{1F780}-\u{1F7FF}]/gu, "") // Geometric Shapes Extended
      .replace(/[\u{1F800}-\u{1F8FF}]/gu, "") // Supplemental Arrows-C
      .replace(/[\u{1F900}-\u{1F9FF}]/gu, "") // Supplemental Symbols and Pictographs
      .replace(/[\u{1FA00}-\u{1FA6F}]/gu, "") // Chess Symbols
      .replace(/[\u{1FA70}-\u{1FAFF}]/gu, "") // Symbols and Pictographs Extended-A
      .replace(/[\u{2600}-\u{26FF}]/gu, "") // Miscellaneous Symbols
      .replace(/[\u{2700}-\u{27BF}]/gu, ""); // Dingbats
  };

  // Define the columns for the table
  const columns = [
    { header: "ID", dataKey: "id" },
    { header: "Category", dataKey: "categoryName" },
    { header: "Amount", dataKey: "amount" },
    { header: "Date", dataKey: "date" },
    { header: "Type", dataKey: "type" },
    { header: "Remarks", dataKey: "remarks" },
  ];

  // Map the data to fit the table structure
  const rows = data.map((item) => ({
    id: item.id,
    // categoryName: removeEmojis(item.categoryName), // Remove emojis from categoryName
    categoryName: item.categoryName,
    amount: item.amount.toFixed(2),
    date: item.date,
    type: item.type,
    remarks: item.remarks || '',
  }));

  // Calculate total income and total expense
  const totalIncome = data
    .filter((item) => item.type === "income")
    .reduce((sum, item) => sum + item.amount, 0);
  const totalExpense = data
    .filter((item) => item.type === "expense")
    .reduce((sum, item) => sum + item.amount, 0);
  const totalBalance = totalIncome - totalExpense;

  // Add the table
  doc.autoTable({
    columns: columns,
    body: rows,
    startY: 30,
    theme: "grid",
  });

  // Add totals row to the table
  const lastY = doc.lastAutoTable.finalY;
  doc.setFontSize(12);
  doc.text("Total Income: $" + totalIncome.toFixed(2), 14, lastY + 10);
  doc.text("Total Expense: $" + totalExpense.toFixed(2), 14, lastY + 15);
  doc.text("Balance: $" + totalBalance.toFixed(2), 14, lastY + 20);

  // Define the file name based on the current date
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const formattedDate = `${year}-${month < 10 ? "0" : ""}${month}-${day < 10 ? "0" : ""}${day}`;

  // Save the PDF
  doc.save(`budget-report-${formattedDate}.pdf`);
}
