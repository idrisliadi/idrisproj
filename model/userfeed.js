const mongoose = require("mongoose");
const UserfeedSchema = new mongoose.Schema({
    name : {
        type : String,
        require  : true
    },
    email :{
        type : String,
        required : true,
    },
});
module.exports = mongoose.model("Userfeed", UserfeedSchema)
    
