const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password_hash: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['customer', 'admin', 'saler'],
        required: true,
    },
},
    {
        timestamps: true, collection: 'Users'
    }
);

userSchema.pre("save", function (next) {
    if (this.isModified('password_hash')) {
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(this.password_hash, salt);
        this.password_hash = hash;
    }
    next();
});




const userModel = mongoose.model('Users', userSchema);

module.exports = userModel;
