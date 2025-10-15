// convert-docx-to-jsx.js
const fs = require("fs");
const mammoth = require("mammoth");
const { parseDocument } = require("htmlparser2");
const { DomUtils } = require("htmlparser2");

// Convert HTML nodes to React PDF JSX
function convertNodeToJSX(node) {
  if (node.type === "text") {
    return node.data.trim();
  }

  if (node.type === "tag") {
    const children = DomUtils.getChildren(node)
      .map(convertNodeToJSX)
      .filter(Boolean);

    switch (node.name) {
      case "p":
        return `<Text style={styles.paragraph}>${children.join(" ")}</Text>`;
      case "strong":
        return `<Text style={{ fontWeight: 'bold' }}>${children.join(" ")}</Text>`;
      case "em":
        return `<Text style={{ fontStyle: 'italic' }}>${children.join(" ")}</Text>`;
      case "h1":
        return `<Text style={styles.h1}>${children.join(" ")}</Text>`;
      case "h2":
        return `<Text style={styles.h2}>${children.join(" ")}</Text>`;
      case "ul":
        return children.join("\n");
      case "li":
        return `<Text style={styles.listItem}>• ${children.join(" ")}</Text>`;
      default:
        return children.join(" ");
    }
  }

  return "";
}

// Main function
async function convertDocxToJSX(docxPath) {
  try {
    const result = await mammoth.convertToHtml({ path: docxPath });
    const html = result.value;

    const dom = parseDocument(html);
    const body = DomUtils.getChildren(dom);

    const jsxBody = body.map(convertNodeToJSX).filter(Boolean).join("\n  ");

    const output = `
import React from 'react';
import { Document, Page, Text, StyleSheet, View } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12
  },
  paragraph: {
    marginBottom: 10,
  },
  h1: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  h2: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  listItem: {
    marginLeft: 10,
    marginBottom: 5,
  },
});

const MyDocument = () => (
  <Document>
    <Page style={styles.page}>
      ${jsxBody}
    </Page>
  </Document>
);

export default MyDocument;
`.trim();

    fs.writeFileSync("MyDocument.jsx", output);
    console.log("✅ JSX file generated: MyDocument.jsx");
  } catch (err) {
    console.error("❌ Error:", err);
  }
}

// 👉 Replace this with your actual .docx file
convertDocxToJSX("bail.docx");
