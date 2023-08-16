const { Party_ideas } = require("../models/party_ideas");
const { Party_types } = require("../models/party_types");

module.exports = {
    getAllPartyIdeas: async (req, res) =>{
        try {
            const parties = await Party_ideas.findAll()
            res.status(200).send(parties)
        } catch (error) {
            console.log('ERROR IN getAllParties')
            console.log(error)
            res.sendStatus(400)
        }
    }, 
    // getCurrentUserPosts:async (req, res) => {
    //     try {
    //         const {userId} = req.params
    //         const posts = await Post.findAll({
    //             where: {userId: userId},
    //             include: [{
    //                 model: User,
    //                 required: true,
    //                 attributes: [`username`]
    //             }]})
    //         res.status(200).send(posts)
    //     } catch (error) {
    //         console.log('ERROR IN getCurrentUserPosts')
    //         console.log(error)
    //         res.sendStatus(400)
    //     }
    // }, 
    // addPost: async (req, res) =>{
    //     try {
    //         let {title, content, status, userId} = req.body;
    //         await Post.create({title, content, privateStatus: status, userId})
    //         res.sendStatus(200)            
    //     } catch (error) {
    //         console.log("error in add post");
    //         console.log(error)
    //         res.status(400).send('cannot add post')
    //     }
    // }, 
    // editPost: async (req, res) =>{
    //     try {
    //         const {id} = req.params
    //         const {status} = req.body
    //         await Post.update({privateStatus: status}, {
    //             where: {id: +id}
    //         })
    //         res.sendStatus(200)
    //     } catch (error) {
    //         console.log('error in editPost')
    //         console.log(error)
    //         res.sendStatus(400)
    //     }
    // }, 
    // deletePost: async (req, res) =>{
    //     try {
    //         const {id} = req.params
    //         await Post.destroy({where: {id: +id}})
    //         res.sendStatus(200)
    //     } catch (error) {
    //         console.log('error in deletePost')
    //         console.log(error)
    //         res.sendStatus(400)
    //     }
    // }
}