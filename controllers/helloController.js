const getController = (req, res) => {
	res.send('Merhaba, GET isteği attiniz');
};
const postController = (req, res) => {
	res.send('Merhaba, POST isteği attiniz');
};
const putController = (req, res) => {
	res.send('Merhaba, PUT isteği attiniz');
};
const deleteController = (req, res) => {
	res.send('Merhaba, DELETE isteği attiniz');
};

module.exports = { getController, postController, putController, deleteController };
