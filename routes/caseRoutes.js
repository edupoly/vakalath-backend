const express = require('express');
const { fileCase, getAllCasesById, getCaseById, editFileCase } = require('../controllers/caseController');
const router = express.Router();


router.post('/fileCase', fileCase);
router.put('/editFileCase/:id', editFileCase);
router.get('/getAllCasesById/:id', getAllCasesById);
router.get('/getCaseById/:id', getCaseById);



module.exports = router;
