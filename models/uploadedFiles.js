const dbConnect = require('../lib/db-connection');

class UploadedFiles {
  static async uploadedFiles(userId, originalname, fileUrl) {
    try {
      const client = await dbConnect();
      const result = await client.query('INSERT INTO uploaded_files (user_id, filename, url) VALUES ($1, $2, $3)', [userId, originalname, fileUrl]);
      client.release();
      return result.rows[0];
    } catch (error) {
      console.error('Error querying database:', error);
      throw new Error('Internal Server Error');
    }
  }

}

module.exports = UploadedFiles;