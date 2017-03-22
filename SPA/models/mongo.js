/**
 * Created by amurav on 22.03.2017.
 */

var mongoose    =   require("mongoose");
mongoose.connect('mongodb://localhost:27017/mongoDb');
// create instance of Schema
var mongoSchema =   mongoose.Schema;
// create schema
var userSchema  = {
    "userEmail" : String,
    "userPassword" : String
};
// create model if not exists.
module.exports = mongoose.model('userData',userSchema);

var fileSchema = {
    "typeFile" : String
};

module.exports = mongoose.model('fileData', fileSchema);