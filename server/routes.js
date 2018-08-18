const {getAllPets,getOnePet,createPet,deletePet,updatePet, like} = require('./controller.js');

module.exports = function(app){
    app.get('/api/pets', getAllPets);
    app.post('/api/pets', createPet);
    app.get('/api/pets/:id', getOnePet);
    app.patch('/api/pets/edit/:id', updatePet);
    app.patch('/api/pets/like/:id', like)
    app.delete('/api/destroy/:id', deletePet);
}