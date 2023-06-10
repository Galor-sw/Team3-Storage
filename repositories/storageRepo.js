const { unit } = require('../models/unit');

module.exports = {
    add: async (e) => {
        try {
            console.log('@@@@@');
            const newUnit = new unit(e);
            const savedUnit = await newUnit.save();
            console.log(savedUnit, 'success');
        } catch (err) {
            throw err;
        }
    },
    getUnits: async () => {
        try {
            const units = await unit.find({});
            console.log('units:', units);
            return units;
        } catch (err) {
            console.log('error');
            throw err;
        }
    },
};
