/**
 * Created by amurav on 24.03.2017.
 */
// подключим mongoose и созданную модель

import mongoose from "mongoose";

import '../models/Note';

import config from '../../etc/config.json';

//записали ссылку на класс в переменную
const Note = mongoose.model('Note');

//подключимся к БД

export function setUpConnection(){
    mongoose.connect('mongodb://${config.db.host}:${config.db.port}/${config.db.name}');
}
//будет возвращаться промис в место, откуда вызвали функцию
// id описывать не нужно, пудут автоматически создаваться
export function listNotes(){
    return Note.find();
}

export function createNote(data) {
    const note = new Note({
        title: data.title,
        text: data.text,
        color: data.color,
        createdAt: new Date()
    });

    return note.save();
}

export function deleteNote(id) {
    return Note.findById(id).remote();
}