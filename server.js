const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require("./routes/userRoutes");
const caseRoutes = require("./routes/caseRoutes");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json());
app.use(cors());


dotenv.config();
connectDB();

app.use("/api/users", userRoutes);
app.use("/api/cases", caseRoutes);


const PORT = process.env.PORT || 4500;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// Map run properties (rPr) to a style object
function mapRunPropsToStyle(rPr) { const style = {}; if (!rPr) return style; if (rPr["w:b"]) style.fontWeight = "bold"; if (rPr["w:i"]) style.fontStyle = "italic"; const colorVal = rPr["w:color"]?.[0]?.$?.["w:val"]; if (colorVal) { style.color = "#" + colorVal; } const fontSizeVal = rPr["w:sz"]?.[0]?.$?.["w:val"]; if (fontSizeVal) { style.fontSize = parseInt(fontSizeVal, 10) / 2; } return style; }

// Map paragraph properties (pPr) to style
function mapParaPropsToStyle(pPr) {
  const style = {}; if (!pPr) return style;
  // Alignment 
  if (pPr["w:jc"] && pPr["w:jc"][0].$ && pPr["w:jc"][0].$["w:val"]) {
    const v = pPr["w:jc"][0].$["w:val"]; style.textAlign = v;
  }
  if (pPr["w:spacing"] && pPr["w:spacing"][0].$) {
    const sp = pPr["w:spacing"][0].$;
    if (sp["w:line"]) {
      // line spacing (in twips or some unit)
      style.lineHeight = parseInt(sp["w:line"], 10) / 240; // heuristic 
    }
  } // margins, indentation etc can be added return style;
}