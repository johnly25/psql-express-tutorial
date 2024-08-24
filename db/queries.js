const pool = require("./pool");

exports.getAllUsernames = async () => {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}
exports.insertUsername = async (username) => {
  await pool.query("INSERT INTO usernames (username) VALUES($1)", [username]);
}

exports.searchUsernames = async (search) => {
  const { rows } = await pool.query("SELECT * FROM usernames WHERE LOWER(username) LIKE LOWER($1)", ['%' + search + '%'])
  return rows;
}

exports.deleteUsernames = async () => {
  await pool.query("DELETE FROM usernames");
}