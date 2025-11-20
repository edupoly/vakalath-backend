const express = require('express');
const { fileCase, getAllCasesById, getCaseById, editFileCase, deleteFileCase, getCasesById } = require('../controllers/caseController');
const router = express.Router();

router.post('/fileCase', fileCase);
router.put('/editFileCase/:id', editFileCase);
router.get('/getAllCasesById/:id', getAllCasesById);
router.get('/getCasesById/:id', getCasesById);
router.get('/getCaseById/:id', getCaseById);
router.delete('/deleteFileCase/:id', deleteFileCase);

module.exports = router;
