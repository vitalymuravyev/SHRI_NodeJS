const db = require('../../entities/Database');

module.exports = async (req, res) => {
    try {
        const imgId = req.params.id;
        const id = await db.remove(imgId);
    
        return res.json({ id }); 
    } catch (error) {
        res.sendStatus(404);
    }
}
