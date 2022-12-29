const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    name: {
        first: { type: String, required: true },
        last: { type: String, required: true }
    },
    age: Number,
    email: String
}, { timestamps: true }) 

//mongoose에게 Schema 알려줌
const User = mongoose.model('user', UserSchema) //'user' = CollectionName
module.exports = { User } //외부에서 가져다 쓸 수 있음