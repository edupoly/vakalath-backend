const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

exports.convertPdfToDocxController = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No file uploaded' });

    const tempDir = path.join(__dirname, '../temp');
    if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir);

    const inputPath = path.join(tempDir, 'input.pdf');
    const outputPath = path.join(tempDir, 'input.docx');

    // Save PDF to temp
    fs.writeFileSync(inputPath, req.file.buffer);

    // Command to convert PDF to DOCX using LibreOffice
    const command = `soffice --headless --convert-to docx "${inputPath}" --outdir "${tempDir}"`;

    // Run the command
    await new Promise((resolve, reject) => {
      exec(command, (error, stdout, stderr) => {
        if (error) {
          console.error('Conversion error:', stderr);
          return reject(error);
        }
        resolve();
      });
    });

    // Read the output DOCX
    const docxBuffer = fs.readFileSync(outputPath);

    // Clean up temp files
    fs.unlinkSync(inputPath);
    fs.unlinkSync(outputPath);

    // Send DOCX file to frontend
    res.set({
      'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'Content-Disposition': 'attachment; filename="converted.docx"',
    });
    res.send(docxBuffer);
  } catch (err) {
    console.error('Error converting file:', err);
    res.status(500).json({ error: 'Conversion failed' });
  }
};
