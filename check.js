const bcrypt = require('bcrypt-nodejs');

bcrypt.hash("flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101", null, null, (err, hash) => {
	let hash2 = bcrypt.hashSync("flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101");
	console.log(hash);
	console.log(hash2);

	bcrypt.compare("flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101", hash, function(err, res) {
		console.log(res);
	})

	bcrypt.compare("flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101flyingbaconcatmonstergodzilla101", hash2, function(err, res) {
		console.log(res);
	})

	bcrypt.compare("veggies", hash, function(err, res) {
	    console.log(res);
	})
})