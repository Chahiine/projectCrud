const Employé = require("../models/employé");

async function addemployé(req, res) {
  try {
    console.log(req.body);
    const employé = new Employé({
      fullname: req.body.fullname,
      rank: req.params.rank,
      salary: req.params.salary,
    });
    await partie.save();
    res.status(200).json(employé);
  } catch (err) {
    console.log(err);
  }
}
async function showem(req, res) {
  try {
    const user = await Employé.find();

    res.json(user);
  } catch (err) {
    console.log(err);
  }
}
async function showbyid(req, res) {
  try {
    const user = await Employé.findById(req.params.id);

    res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  addemployé,
  showem,
  showbyid,
};
