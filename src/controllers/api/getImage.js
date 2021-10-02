
module.exports = (req, res) => {
    return res.json({image: req.params.id});
}








// const db = require('../../entities/Database');

// module.exports = async (req, res) => {
//   const svgId = req.params.id;

//   return res.json(db.findOne(svgId).toPublicJSON());
// }