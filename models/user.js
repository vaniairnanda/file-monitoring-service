const dbConnect = require('../lib/db-connection');

class User {
  static async getQuotaUsage(userId) {
    try {
      const client = await dbConnect();
      const result = await client.query('SELECT quota_allocation, current_usage FROM users WHERE id = $1', [userId]);
      client.release();
      return result.rows[0];
    } catch (error) {
      console.error('Error querying database:', error);
      throw new Error('Internal Server Error');
    }
  }

  static async updateUsage(userId, fileSize) {
    try {
      const client = await dbConnect();
      await client.query('UPDATE users SET current_usage = current_usage + $1 WHERE id = $2', [fileSize, userId]);
      client.release();
    } catch (error) {
      console.error('Error updating usage:', error);
      throw new Error('Internal Server Error');
    }
  }
}

module.exports = User;