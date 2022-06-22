const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({

    biryani : Number,
    butterChicken: Number,
    shahiPaneer: Number,
    naan: Number,
    roti: Number,
    dal: Number,
    rice: Number,
    choleBhature: Number,
    pizza: Number,
    burger: Number
});

module.exports = mongoose.model('Order',PostSchema);