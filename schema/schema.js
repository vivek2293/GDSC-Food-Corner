const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    date: Object,
    biryani : Number,
    butterChicken: Number,
    shahiPaneer: Number,
    naan: Number,
    roti: Number,
    dal: Number,
    rice: Number,
    choleBhature: Number,
    pizza: Number,
    burger: Number,
    isComplete:Number
});

module.exports = mongoose.model('Order',PostSchema);