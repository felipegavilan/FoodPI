const axios = require('axios')
const { Diets } = require('../db')
const { API_KEY } = process.env
const getDiets = async() => {
    const dietsAll = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?number=100&apiKey=${API_KEY}&addRecipeInformation=true`)

    const allDiets = dietsAll.data.results.map(async d => await d.diets.map(async dt =>{
        const diets = await Diets.findOrCreate({
            where:{
                name: [dt]
            }
        })
        return allDiets
    }))
    let result = await Diets.findAll()

    return result

}


module.exports = getDiets;