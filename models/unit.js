const { Schema, model } = require('mongoose');

const unitSchema = new Schema({
    id: { type: Number, require: true, unique: true },
    name: { type: String, require: true },
    photo: { type: String, require: true, unique: true },
    city: { type: String, require: true },
    street: { type: String, require: true },
    contactPerson : { type: String, require: true }
}, { collection: 'units', versionKey: false });

const unit = model('units', unitSchema);

module.exports = {unit};