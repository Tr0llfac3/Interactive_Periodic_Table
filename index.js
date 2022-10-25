

// Gets the element formula and the element type
/*
    The following is the key for all the colours that will be used

    Alkali metals: #244d57;
    Alkaline Earth Metals: #622e39;
    Transition Metals: #433c65;
    Post-Transition Metals: #2f4d47;
    Metalloids: #523e1b;
    Reactive Nonmetals: #2a4165;
    Noble Gases: #623842;
    Lanthanides: #004a77;
    Actinides: #613b28;
    Unknown Properties: #46474c;
*/

const ElementTypes = {
    ReactiveNonMetal: {type: "Reactive Nonmetal", color: "#2a4165", class:"reactiveNonMetal"},
    NobleGases: {type: "Noble Gases", color: "#623842", class:"nobleGas"}
}

let elementList = {
    "H":{num: 1, abbrev: "H", name:"Hydrogen", mass: 1.0078, type: ElementTypes.ReactiveNonMetal},
    "He":{num: 2, abbrev: "He", name:"Helium", mass: 4.0026, type: ElementTypes.NobleGases}

}

$.each($('[data-elem]'), function(i,v){
    let key = $(v).data("elem");
    let currentElem = elementList[key];
    console.log(key);
    let elemDiv = `<div class="elementBox ${currentElem.type.class}" style="background-color: "><p class="elemNum">${currentElem.num}</p>
    <h1 class="elemAbbr">${currentElem.abbrev}</h1><p class="elemName">${currentElem.name}</p></div>`;
    $(v).append(elemDiv);

})