// repositories
const storageRepo = require('../repositories/storageRepo');

module.exports = {
    addUnit: async (req, res) => {
        try {

            const addUnitFunction = await storageRepo.add(req.body);
            res.json(addUnitFunction);
        } catch (err) {
            res.status(500).send('failed occurred on server');
            console.log('error');
        }
    }

};