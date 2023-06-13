let requeteUsername = new XMLHttpRequest();
let Fjson;
let uname;
let pword;
let uname2;
let pword2;

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  uname = e.target[0].value;
  pword = e.target[1].value;
  requeteUsername.open("POST", "url/users/" + uname + ".json");
  requeteUsername.responseType = "json";
  /*requeteUsername.send(uname)*/
});

window.addEventListener(requeteUsername.onload, (e) => {
  Fjson = requeteUsername.response;
  uname2 = Fjson["username"];
  pword2 = Fjson["password"];
  if (uname2 == uname) {
    if (pword2 == pword) {
      if (Fjson["connected"]) {
        document.querySelector("#6598").innerHTML =
          "<span color='red'>Cet utilisateur est déjà connecté</span>";
      }
    } else {
      document.querySelector("#6598").innerHTML =
        "<span color='red'>Mot de passe incorect</span>";
    }
  } else {
    document.querySelector("#6598").innerHTML =
      "<span color='red'>Cet utilisateur n'existe pas</span>";
  }
});

do {
  setTimeout(() => {
    wait++;
  }, 1000);
  requetePassword.abort();
  requeteUsername.abort();
} while (wait < 30);
