const Cases = require('../models/caseModel'); // adjust the path as needed

exports.fileCase = async (req, res) => {
    try {
        console.log(req.body);
        
        const newCase = new Cases(req.body);
        await newCase.save();

        res.status(200).json({ message: 'case filed' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}

exports.editFileCase = async (req, res) => {
    try {
        const caseId = req.params.id; // Get case ID from route params
        const caseData = req.body;    // Updated data from client

        const updatedCase = await Cases.findByIdAndUpdate(caseId, caseData);

        if (!updatedCase) {
            return res.status(404).json({ message: 'Case not found' });
        }

        return res.status(200).json({ message: 'Case updated successfully', case: updatedCase });
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
};


exports.getAllCasesById = async (req, res) => {
    try {
        const cases = await Cases.find({ Userid: req.params.id })

        res.status(200).json({ message: 'case filed', cases });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}

exports.getCaseById = async (req, res) => {
    try {
        const cases = await Cases.findOne({ _id: req.params.id })

        res.status(200).json({ case: cases });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}