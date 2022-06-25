// Importing modules
const mongoose = require('mongoose');

// Creating schema of the qty of each item and cost having total price of order

const PostSchema = mongoose.Schema({
    date: Object,
    biryani: Number,
    butterChicken: Number,
    shahiPaneer: Number,
    naan: Number,
    roti: Number,
    dal: Number,
    rice: Number,
    choleBhature: Number,
    pizza: Number,
    burger: Number,
    cost: Number
});

module.exports = mongoose.model('Order', PostSchema);