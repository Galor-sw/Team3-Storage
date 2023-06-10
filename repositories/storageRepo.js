const { unit } = require('../models/unit');

module.exports = {
  add: async (e) => {
    try {
      const newUnit = new unit(e);
      const savedUnit = await newUnit.save();
      console.log(savedUnit, 'success');
    } catch (err) {
      throw err;
    }
  }
};
