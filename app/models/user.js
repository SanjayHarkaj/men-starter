var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema   = new Schema({
    name: { type: 'String', required: true },
    title: { type: 'String', required: false },
});

module.exports = mongoose.model('User', UserSchema);