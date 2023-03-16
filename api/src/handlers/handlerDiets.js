const getDiets = require('../controllers/getDiets')


const getDietsHandler = async (req, res)=>{
    try {
        const dietsGet = await getDiets()
        res.status(200).json(dietsGet)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


module.exports = getDietsHandler