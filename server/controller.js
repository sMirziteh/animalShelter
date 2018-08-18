
const Pet = require('./model.js')
function getAllPets(req,res){
    Pet.find({}).sort('type')
        .then(data=>console.log("good")||res.json(data))
        .catch(err=>console.log("bad")||res.json(err))
}

function getOnePet(req,res){
    Pet.findById(req.params.id)
        .then(data=>res.json(data))
        .catch(err=>res.json(err))
}

function createPet(req,res){
    console.log(req.body)
    Pet.create(req.body)
        .then(data=>console.log(data) || res.json(data))
        .catch(err=>console.log(err) || res.json(err))
}

function updatePet(req,res){
    Pet.findOneAndUpdate({_id:req.params.id}, req.body, {runValidators:true, context: 'query'})
        .then(data=>res.json(data))
        .catch(err=>res.json(err))
}

function deletePet(req,res){
    Pet.findByIdAndRemove(req.params.id)
        .then(data=>res.json(data))
        .catch(err=>res.json(err))
}

function like(req,res){
    Pet.findByIdAndUpdate({_id:req.params.id})
    .then(pet=>{
        pet.likes +=1
        return pet.save()
    })
    .then(pet=>res.json(pet))
    .catch(err=>res.json(err))

}

module.exports = {getAllPets,getOnePet,createPet,deletePet,updatePet, like};