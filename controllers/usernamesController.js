const { render } = require("pug");
const db = require("../db/queries");
const { body, validationResult } = require("express-validator")

validateUsername = [
  body('username').trim()
    .isLength({ min: 1 })
]
exports.getUsernames = async (req, res) => {
  const usernames = await db.getAllUsernames();
  console.log("Usernames: ", usernames);
  res.render('usernamelist', {
    title: 'Usernames',
    usernames: usernames.map(user => user.username).join(", ")
  });
}

exports.searchUsernamesGet = async (req, res) => {
  const search = req.query.search;
  console.log(search);
  const results = await db.searchUsernames(search);
  console.log(results)
  res.send(results)
}

exports.createUsernameGet = async (req, res) => {
  res.render('createusername',
    {
      title: 'Create Username',
    }
  );
}

exports.createUsernamePost = async (req, res) => {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
}
exports.deleteUsernamesConfirmGet = async (req, res) => {
  res.render("deleteconfirm");
}

exports.deleteUsernamesGet = async (req, res) => {
  await db.deleteUsernames();
  res.redirect("/");
}