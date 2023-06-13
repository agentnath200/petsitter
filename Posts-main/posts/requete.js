function requete(
  username,
  password,
  urldetonserveur,
  titredupost,
  contenudupost
) {
  let requetet = new XMLHttpRequest();
  requetet.open("POST", urldetonserveur, false, username, password);
  requetet.send(titredupost);
  let requetec = new XMLHttpRequest();
  requetec.open("POST", urldetonserveur, false, username, password);
  requetec.send(contenudupost);
}

const form = document.querySelector("form");
let userName;
let passWord;
const url = "https://www.****.fr/";
let titre;
let contenu;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  titre = e.target[0].value;
  contenu = e.target[1].value;
  //requete(userName, passWord, url, titre, contenu)
  document.querySelector("body").innerHTML =
    "<span>Merci d'avoir mit un post</span>";
});
