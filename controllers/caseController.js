const Cases = require('../models/caseModel'); // adjust the path as needed

exports.fileCase = async (req, res) => {
    try {
        console.log(req.body);
console.log("dfg");

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

exports.deleteFileCase = async (req, res) => {
    try {
        const deletedCase = await Cases.findByIdAndDelete(req.params.id);

        if (!deletedCase) {
            return res.status(404).json({ message: 'Case not found' });
        }

        return res.status(200).json({ message: 'Case deleted successfully' });
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
};

exports.getCasesById = async (req, res) => {
    try {
        const caseData = await Cases.find(
            { Userid: req.params.id },
            { FilledFrom: 1, _id: 0 } // Project only FilledFrom, exclude _id
        );

        if (!caseData) {
            return res.status(404).json({ message: 'Case not found' });
        }
        const nameCounts = {};
        caseData.forEach(name => {
            nameCounts[name?.FilledFrom] = (nameCounts[name?.FilledFrom] || 0) + 1;
        });
        
        const result = Object.entries(nameCounts).map(([name, quantity]) => ({
            name,
            quantity
        }));
        res.status(200).json({ caseData: result || null });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}
