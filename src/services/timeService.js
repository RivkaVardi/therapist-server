const Time = require('../models/timeModel');

const getTimesByTherapist = async (therapist) => {
    return await Time.find({ therapist: therapist });
};

const deleteTime = async (id) => {
    const result = await Time.findByIdAndDelete(id);
    if (!result) {
        throw new Error('Item not found');
    }
    return result;
};

module.exports = {
    getTimesByTherapist,
    deleteTime
};
