import mongoData from "../utils/DataSource";
import TokenPayloadDto from "./dto/TokenPayloadDto";

const schema = new mongoData.Schema({
    name: String,
    password: String,
}, {
    methods: {
        toPayloadDto: function() {
            const dto: TokenPayloadDto = {
                name: this.name,
                passWord: this.password
            }
            return dto
        }
    }
})

const User = mongoData.model('User', schema)

export default User