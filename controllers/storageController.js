// repositories
const storageRepo = require('../repositories/storageRepo');

module.exports = {
    addUnit: async (req, res) => {
        try {
            const addUnitFunction = await storageRepo.add(req.body);
            res.json(addUnitFunction);
        } catch (err) {
            res.status(500).send('failed occurred on server');
            console.log('error', err);
        }
    },
    getUnits: async (req, res) => {
        try {
          const allUnits = await storageRepo.getUnits();
          console.log(allUnits);
          res.json(allUnits);
        } catch (error) {
          console.log(error);
          res.status(500).json({ error: 'Internal server error' });
        }
      },
    // getUnits: async (req,res) =>{
    //     try {
    //         console.log('test');
    //         const getAllUnits = await storageRepo.getAll();
    //         console.log(getAllUnits);
    //         res.json(getAllUnits);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

};