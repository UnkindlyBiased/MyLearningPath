import mongoData from "../utils/DataSource";

const schema = new mongoData.Schema({
    text: String,
    date: Date,
    userId: String
})

const Comment = mongoData.model('Comment', schema)

export default Comment