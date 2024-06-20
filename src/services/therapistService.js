const Therapist = require('../models/therapistModel');

const getAllTherapists = async () => {
    return await Therapist.find();
};

module.exports = {
    getAllTherapists
};
