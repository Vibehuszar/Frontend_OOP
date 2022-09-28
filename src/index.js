import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.css';
import './main.css';


class Zene{
    #zeneCim;
    #zeneHossz;

    constructor(zeneCim, zeneHossz){
        this.zeneCim = zeneCim;
        this.zeneHossz = zeneHossz;
    }

    get zeneCim(){
        return this.#zeneCim;
    }
    get zeneHossz(){
        return this.#zeneHossz;
    }
    set zeneCim(c){
        this.#zeneCim = c;
    }
    set zeneHossz(h){
        this.#zeneHossz = h;
    }
     

}
let l = [];

function gombKatt(){
    console.log("mukodik");
    let c = document.getElementById('cim').value;
    let h = parseInt(document.getElementById('hossz').value) ;
    let zene = new Zene(c, h);
    console.log(zene);
    l.push(zene)
}

function osszegzes(){
    let sum = 0;
    for (let index = 0; index < l.length; index++) {
        sum += l[index].zeneHossz;
        
    }
    console.log(sum);
}
document.getElementById('gomb').addEventListener('click', gombKatt);
document.getElementById('gomb2').addEventListener('click', osszegzes);