const db = require('../../entities/Database');

module.exports = (req, res) => {

    const allImg = db.find().map((item) => item.toJSON())

    return res.json({ allImg });
}