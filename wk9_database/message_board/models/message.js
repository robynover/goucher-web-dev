var mongoose = require('mongoose');

var msgSchema = mongoose.Schema({
    username: String,
    datetime: {
    	type:Date,
    	default:Date.now
    },
    title: String,
    body: String,
    replies: [{
    	body: String,
    	username: String,
    	datetime: {
    		type:Date,
    		default:Date.now
    	}		
    }]
    
});

var Message = mongoose.model('Message', msgSchema);
module.exports = Message;