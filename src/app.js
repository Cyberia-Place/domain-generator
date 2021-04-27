/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let dom = [".com", ".net", ".us", ".io"];

  var string = "";
  for (let pronWord of pronoun) {
    for (let adjWord of adj) {
      for (let nounWord of noun) {
        for (let i = 0; i < 4; i++) {
          console.log(i);
          string = pronWord + adjWord + nounWord + dom[i];
          console.log(string);
          string = pronWord + adjWord + nounWord;
        }
      }
    }
  }
};
