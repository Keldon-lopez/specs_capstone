const { Op } = require("sequelize");

const { Party_ideas } = require("../models/party_ideas");
const { Party_types } = require("../models/party_types");

module.exports = {
    getAllPartyIdeas: async (req, res) =>{
        let {attendees} = req.query

        try {
            const parties = await Party_ideas.findAll({
                where:{
                    min_recommended_attendees: {[Op.lte]: attendees},
                    max_recommended_attendees: {[Op.gte]: attendees}
                }
            })
            res.status(200).send(parties)
        } catch (error) {
            console.log('ERROR IN getAllParties')
            console.log(error)
            res.sendStatus(400)
        }
    }, 
    addPartyIdea: async (req, res) =>{
        try {
            let {party_idea_name, min_recommended_attendees, max_recommended_attendees, party_description, partyTypeId} = req.body;
            await Party_ideas.create({party_idea_name, min_recommended_attendees, max_recommended_attendees, party_description, partyTypeId})
            res.sendStatus(200)            
        } catch (error) {
            console.log("error in add party idea");
            console.log(error)
            res.status(400).send('cannot add party idea')
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