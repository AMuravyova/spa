/**
 * Created by amurav on 22.03.2017.
 */
import mongoose from 'mongoose';

//создаем новую схему
const Schema = mongoose.Schema;

//сщздаем экземпляр класса схема
const NoteSchema = new Schema({
    title: {type: String},
    text: {type: String, required: true},
    color: {type: String},
    createAt: {type: Date}
});
//передаем ссылку на схему NoteSchema. Создали новую модель Note, чтобы оперировать
// заметками
const Note = mongoose.model('Note', NoteSchema);



/*
var mongoose    =   require("mongoose");
mongoose.connect('mongodb://localhost:27017/myDb');
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
    */