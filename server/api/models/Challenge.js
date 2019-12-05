const mongoose = require('mongoose');
const Challenge = mongoose.Schema({
    name: string,
    description: string,
    days: number,
    timeSTamp: string
});