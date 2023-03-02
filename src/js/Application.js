import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.emojis = [];
    this.banana = "🍌";
    this.emit(Application.events.READY);
  }
  setEmojis(emojis) {

    console.log("goes into setEmojis")
    this.emojis = emojis;

    let emojisHTML = document.getElementById("emojis");
    
    this.emojis.forEach( (element,index) =>{
      let div = document.createElement("div");
      div.setAttribute("id", `element${index}`);


      let node = document.createElement("p");
      let textNode = document.createTextNode(`${element}`);

      node.appendChild(textNode);
      div.appendChild(node);
      

      //div.innerHTML = `<b>${element}</b>`;

      //div.appendChild(`<b>${element}</b>`);
     
      emojisHTML.appendChild(div);
    })
  }

  addBananas() {

    console.log("goes into addBananas")
    let emojisHTML = document.getElementById("emojis");

    emojisHTML.replaceChildren();

    this.emojis.map( (element,index) =>{
      element = element + this.banana;

      let div = document.createElement("div");
      div.setAttribute("id", `element${index}`);

      let node = document.createElement("p");
      let textNode = document.createTextNode(`${element}`);

      node.appendChild(textNode);
      div.appendChild(node);
      emojisHTML.appendChild(div);
    });

   
  }
}
