import mongoData from "../utils/DataSource";

const schema = new mongoData.Schema({
    name: String
})

const User = mongoData.model('User', schema)

export default User