const {UserModel} = require("../model/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = async (req, res,next) => {

  const token = req.cookies.token;
  console.log(token);

  if (!token) {
    return res.status(401).json({ status: false });
  }

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);

    const user = await UserModel.findById(decoded.id);

    if (!user) {
      return res.status(401).json({ status: false });
    }

    return res.status(200).json({
      status: true,
      user: user.username,
    });
    

  } catch (err) {
    return res.status(401).json({ status: false });
  }
};

module.exports.userVerify = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ status: false });
  }

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ status: false });
  }
};