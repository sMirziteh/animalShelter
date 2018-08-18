const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

mongoose.connect('mongodb://localhost:27017/Pet')

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: [true, 'name is required'],
        minlength: [3, 'name must be at least 3 characters'],
        unique: [true, 'An animal with this name already exists']
    },
    type: {
        type: String,
        minlength: [3, 'Pet type must be at least 3 characters long']
    },
    description: {
        type: String,
        minlength: [3, 'Pet description must be at least 3 characters long']
    },
    // skills: {
    //     skill: [{
    //         type: String
    //     }],
    //     validate: [arrayLimit, 'You can only add 3 skills for a pet']
    // }
    skill1:{
        type:String
    },
    skill2: {
        type:String
    },
    skill3: {
        type: String
    },
    likes: {
        type: Number,
        default: 0
    }
    
}, {timestamps: true});
PetSchema.plugin(uniqueValidator, {message: 'A pet with that name already exists'});

const Pet = mongoose.model('Pet', PetSchema)

module.exports = Pet;

// function arrayLimit(val){
//     return val.length <=3;
// }