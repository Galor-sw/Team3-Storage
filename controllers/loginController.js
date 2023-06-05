// repositories
const loginRepo = require('../repositories/loginRepo');

module.exports = {

    authentication: async (req, res) => {
        try {
            console.log(req.body);
            const plans = await loginRepo.validate(req.body);
            res.json(plans);
        } catch (err) {
            res.status(500).send('failed occurred on server');
            console.log('error');
        }
    }

};