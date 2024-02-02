import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    userName: {type: String, required: true},
    description: String,
    another: {type: String, default: "Default value"}
})

const User = mongoose.model('User', userSchema)
export default User