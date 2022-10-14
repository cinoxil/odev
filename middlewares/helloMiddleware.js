const helloMw = (req, res, next) => {
	console.log('Yeni bir istek geldi');
	next();
};

const postMw = (req, res, next) => {
	console.log('Post isteği için istek gönderildi');
	next();
};

module.exports = { helloMw, postMw };
