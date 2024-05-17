const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://shreya:vishnu@cluster0.zuzgziw.mongodb.net/paytm")
const userSchema = new mongoose.Schema({
    username: {
        required: true,
        trim: true,
        type: String,
        minlength: 3,
        maxlength: 30,
        unique: true,
        lowercase: true
    },
    password: {
        required: true,
        trim: true,
        type: String,
        minlength: 8,
        maxlength: 20
    },
    firstName: {
        required: true,
        trim: true,
        type: String,
        maxlength: 20
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxlength: 20
    }
});

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    balance: {
        type: Number,
        required: true,
        default: 0
    }
})


const Account=mongoose.model('Account',accountSchema)

const User= mongoose.model('User',userSchema)
module.exports = {
    User,
    Account
}   