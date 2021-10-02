const { unlink, writeFile, readFile } = require('fs/promises');

module.exports = {
    uploadFile: async (path, content) => {
        await writeFile(path, content);
    },

    deleteFile: async (path) => {
        try {
            await unlink(path);
        } catch (err) {
            console.log(`Can not delete ${path}, file doesn't exist`);
        }
    }
}