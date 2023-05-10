var crypto = require('crypto');
exports.encrypt = function (plainText, workingKey) {
	/*var m = crypto.createHash('md5');
    	m.update(workingKey);
   	var key = m.digest('binary');*/
   /*	const secret="yeiuwuopwpoepww";
   let key = crypto.createHash('md5').update(String(secret)).digest('binary');
      	var iv = '\x00\x01\x02\x03\x04\x05\x06\x07\x08\x09\x0a\x0b\x0c\x0d\x0e\x0f';

*/const algorithm = 'aes-256-gcm';

	const key = crypto.scryptSync(workingKey, 'GfG', 32);
	var iv = '\x00\x01\x02\x03\x04\x05\x06\x07\x08\x09\x0a\x0b\x0c\x0d\x0e\x0f';
	const cipher = crypto.createCipheriv(algorithm, key, iv);



	var encoded = cipher.update(plainText,'utf8','hex');
	encoded += cipher.final('hex');
    	return encoded;



};


exports.decrypt = function (encText, workingKey) {
    	var m = crypto.createHash('md5');
    	m.update(workingKey)
    	var key = m.digest('binary');
	var iv = '\x00\x01\x02\x03\x04\x05\x06\x07\x08\x09\x0a\x0b\x0c\x0d\x0e\x0f';	
	var decipher = crypto.createDecipheriv('aes-128-cbc', key, iv);
    	var decoded = decipher.update(encText,'hex','utf8');
	decoded += decipher.final('utf8');
    	return decoded;
};
