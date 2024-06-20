const therapistService = require('../services/therapistService');

const getTherapists = async (req, res) => {
    try {
        const therapists = await therapistService.getAllTherapists();
        res.json(therapists);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    getTherapists
};
