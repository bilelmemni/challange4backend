const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    Email: {
        type: String,
        required: [true, 'Ce champs est obligatoire'],
    }
}, { timestamps: true, versionKey: false })
module.exports = mongoose.model('User', UserSchema)