const Joueur = require("../models/joueur");
const Partie = require("../models/partie");

async function addjoueur(req, res) {
  try {
    console.log(req.body);
    const joueur = new Joueur({
      pseudo: req.body.pseudo,
      sante: 100,
      score: 0,
    });
    await joueur.save();
    res.status(200).json(joueur);
  } catch (err) {
    console.log(err);
  }
}

async function showj(req, res) {
  try {
    
    const user = await Joueur.find();

    res.json(user);
  } catch (err) {
    console.log(err);
  }
}

async function showbyid(req, res) {
  try {
    const user = await Joueur.findById(req.params.id);

    res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
}

async function deleteusers(req, res) {
  try {
    const user = await Joueur.findByIdAndDelete(req.params.id);

    res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
}

async function attaque(req, res) {
  try {
    const j1 = await Joueur.findById(req.params.id1);
    const j2 = await Joueur.findById(req.params.id2);
    score1 = j1.score + 10;
    sante1 = j2.sante - 20;
    const j1u = await Joueur.findByIdAndUpdate(req.params.id1, {
      score: score1,
    });
    const j2u = await Joueur.findByIdAndUpdate(req.params.id2, {
      sante: sante1,
    });
    res.status(200).send(j1u + "modifier" + j2u);
  } catch (err) {
    console.log(err);
  }
}

async function addpartie(req, res) {
  try {
    console.log(req.body);
    const partie = new Partie({
      nom: req.body.nom,
      joueur_1: req.params.id1,
      joueur_2: req.params.id2,
      etat: "en cours",
    });
    await partie.save();
    res.status(200).json(partie);
  } catch (err) {
    console.log(err);
  }
}

async function addpartiesocket(data) {
  try {
    //console.log(req.body);
    const partie = new Partie({
      nom: data.Nompartie,
      joueur_1: data.joueur1,
      joueur_2: data.joueur2,
      etat: "en cours",
    });
    await partie.save();
    //res.status(200).json(partie);
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  addjoueur,
  showj,
  showbyid,
  deleteusers,
  attaque,
  addpartie,
  addpartiesocket,
};
