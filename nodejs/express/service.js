import User from './user.js'

class PostService {
    async create(user) {
        const newUser = await User.create(post)
        return newUser
    }
    async getAll() {
        const users = await User.find()
        return users
    }
    async getSingle(id) {
        if (!id) {
            throw new Error('No ID')
        }
        const user = await User.findById(id)
        return user
    }
    async update(post) {
        // try {
        //     const user = req.body
        //     if (!user._id) {
        //         res.status(400).json({message: "User with this ID is not found"})
        //     }
        //     const updatedUser = await User.findByIdAndUpdate(user._id, user, {new: true})
        //     return res.json(updatedUser)
        // } catch(e) {
        //     res.status(500).json(e)
        // }
        if (!post._id) {
            throw new Error('No ID')
        }
        const updatedUser = await User.findByIdAndUpdate(post._id, post, {new: true})
        return updatedUser
    }
    async delete(id) {
        // try {
        //     const {id} = req.params
        //     if (!id) {
        //         res.status(400).json({message: "User with this ID is not found"})
        //     }
        //     const user = await User.findByIdAndDelete(id)
        //     return res.json(user)
        // } catch(e) {
        //     res.status(500).json(e)
        // }
        if (!id) {
            throw new Error('No ID')
        }
        const user = await User.findByIdAndDelete(id)
        return user
    }
}

export default new PostService()