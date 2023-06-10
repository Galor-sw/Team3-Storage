const { Schema, model } = require('mongoose');

const unitSchema = new Schema({
    name: { type: String, required: true },
    photo: { type: String, required: true, unique: true },
    city: { type: String, required: true },
    street: { type: String, required: true },
    contactPerson: { type: String, required: true },
    contactPhone: { type: String, required: true }
}, { collection: 'units', versionKey: false });

const unit = model('units', unitSchema);

module.exports = { unit };
