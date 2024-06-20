const timeService = require('../services/timeService');

const getTimesByTherapist = async (req, res) => {
    try {
        const therapist = req.params.therapist;
        if (!/^[a-zA-Zא-ת_.]+$/.test(therapist) || therapist.length < 2)
            return res.status(400).json({ error: 'name is not valid.' });
        const times = await timeService.getTimesByTherapist(therapist);
        res.json(times);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const deleteTime = async (req, res) => {
    try {
        const timeId = req.params.id;
        if (!/^[a-zA-Z0-9_.]+$/.test(timeId) || timeId.length < 20)
            return res.status(400).json({ error: 'id is not valid.' });
        const response = await timeService.deleteTime(timeId);
        res.json(response);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    getTimesByTherapist,
    deleteTime
};
