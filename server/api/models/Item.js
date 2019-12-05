const mongoose = require('mongoose');
const Item = mongoose.Schema({
    name: string,
    description: string,
    calories: number,
    timeSTamp: string
});