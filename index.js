const genId1 = require('vmlv_xid');
const genId2 = require('sbbp_xid');
const crypto = require('crypto');

function generateKey() {
	var  sha1 = crypto.createHash('sha1');
	return sha1.update(genId1() + '|frMLyfgZ9g|' + genId2()).digest('base64');
}


module.exports = generateKey;
