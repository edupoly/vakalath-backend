const express = require('express');
const { fileCase, getAllCasesById, getCaseById, editFileCase, deleteFileCase, getCasesById } = require('../controllers/caseController');
const { convertPdfToDocxController } = require('../controllers/pdfToDocx');
const router = express.Router();
const multer = require('multer');

const upload = multer({ storage: multer.memoryStorage() });


router.post('/fileCase', fileCase);
router.put('/editFileCase/:id', editFileCase);
router.get('/getAllCasesById/:id', getAllCasesById);
router.get('/getCasesById/:id', getCasesById);
router.get('/getCaseById/:id', getCaseById);
router.delete('/deleteFileCase/:id', deleteFileCase);
router.post('/convert-pdf-to-docx', upload.single('file'), convertPdfToDocxController);



module.exports = router;
