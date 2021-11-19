const {Schema, model} = require('mongoose');

const NoterSchema = new Schema ({
    title: {
        type: String,
        require: true
    },
    description: {
        type : String,
        require : true
    },
    user: {
        type: String,
        required: true
    }
}, {
        timestamps : true
    
})

module.exports = model('Note', NoterSchema);