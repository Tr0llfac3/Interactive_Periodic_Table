

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
    "He":{num: 2, abbrev: "He", name:"Helium", mass: 4.0026, type: ElementTypes.NobleGases},
    "Li":{num: 3, abbrev: "Li", name:"Lithium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Be":{num: 4, abbrev: "Be", name:"Beryllium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "B":{num: 5, abbrev: "B", name:"Boron", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "C":{num: 6, abbrev: "C", name:"Carbom", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "N":{num: 7, abbrev: "N", name:"Nitrogen", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "O":{num: 8, abbrev: "O", name:"Oxygen", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "F":{num: 9, abbrev: "F", name:"Fluorine", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Ne":{num: 10, abbrev: "Ne", name:"Neon", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Na":{num: 11, abbrev: "Na", name:"Sodium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Mg":{num: 12, abbrev: "Mg", name:"Magnesium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Al":{num: 13, abbrev: "Al", name:"Aluminium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Si":{num: 14, abbrev: "Si", name:"Silicon", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "P":{num: 15, abbrev: "P", name:"Phosphorus", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "S":{num: 16, abbrev: "S", name:"Sulfur", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Cl":{num: 17, abbrev: "Cl", name:"Chlorine", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Ar":{num: 18, abbrev: "Ar", name:"Argon", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "K":{num: 19, abbrev: "K", name:"Potassium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Ca":{num: 20, abbrev: "Ca", name:"Calcium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Sc":{num: 21, abbrev: "Sc", name:"Scandium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Ti":{num: 22, abbrev: "Ti", name:"Titanium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "V":{num: 23, abbrev: "V", name:"Vanadium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Cr":{num: 24, abbrev: "Cr", name:"Chromium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Mn":{num: 25, abbrev: "Mn", name:"Manganese", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Fe":{num: 26, abbrev: "Fe", name:"Iron", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Co":{num: 27, abbrev: "Co", name:"Cobalt", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Ni":{num: 28, abbrev: "Ni", name:"Nickel", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Cu":{num: 29, abbrev: "Cu", name:"Copper", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Zn":{num: 30, abbrev: "Zn", name:"Zinc", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Ga":{num: 31, abbrev: "Ga", name:"Galium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Ge":{num: 32, abbrev: "Ge", name:"Germanium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "As":{num: 33, abbrev: "As", name:"Arsenic", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Se":{num: 34, abbrev: "Se", name:"Selenium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Br":{num: 35, abbrev: "Br", name:"Bromine", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Kr":{num: 36, abbrev: "Kr", name:"Krypton", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Rb":{num: 37, abbrev: "Rb", name:"Rubidium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Sr":{num: 38, abbrev: "Sr", name:"Strontium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Y":{num: 39, abbrev: "Y", name:"Yttrium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Zr":{num: 40, abbrev: "Zr", name:"Zirconium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Nb":{num: 41, abbrev: "Nb", name:"Niobium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Mo":{num: 42, abbrev: "Mo", name:"Molybdenum", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Tc":{num: 43, abbrev: "Tc", name:"Technetium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    // Bookmark
    "Ru":{num: 44, abbrev: "Ru", name:"Ruthenium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Rh":{num: 45, abbrev: "Rh", name:"Rhodium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Pd":{num: 46, abbrev: "Pd", name:"Palladium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Ag":{num: 47, abbrev: "Ag", name:"Silver", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Cd":{num: 48, abbrev: "Cd", name:"Cadmium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "In":{num: 49, abbrev: "In", name:"Indium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Sn":{num: 50, abbrev: "Sn", name:"Tin", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Sb":{num: 51, abbrev: "Sb", name:"Antimony", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Te":{num: 52, abbrev: "Te", name:"Tellurium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "I":{num: 53, abbrev: "I", name:"Iodine", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Xe":{num: 54, abbrev: "Xe", name:"Xenon", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Cs":{num: 55, abbrev: "Cs", name:"Caesium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Ba":{num: 56, abbrev: "Ba", name:"Barium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "La":{num: 57, abbrev: "La", name:"Lanthanum", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Hf":{num: 72, abbrev: "Hf", name:"Hafnium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Ta":{num: 73, abbrev: "Ta", name:"Tantalum", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "W":{num: 74, abbrev: "W", name:"Tungsten", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Re":{num: 75, abbrev: "Re", name:"Rhenium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Os":{num: 76, abbrev: "Os", name:"Osmium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Ir":{num: 77, abbrev: "Ir", name:"Iridium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Pt":{num: 78, abbrev: "Pt", name:"Platinum", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Au":{num: 79, abbrev: "Au", name:"Gold", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Hg":{num: 80, abbrev: "Hg", name:"Mercury", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Ti":{num: 81, abbrev: "Ti", name:"Thallium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Pb":{num: 82, abbrev: "Pb", name:"Lead", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Bi":{num: 83, abbrev: "Bi", name:"Bismuth", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Po":{num: 84, abbrev: "Po", name:"Polonium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "At":{num: 85, abbrev: "At", name:"Astatine", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Rn":{num: 86, abbrev: "Rn", name:"Radon", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Fr":{num: 87, abbrev: "Fr", name:"Francium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Ra":{num: 88, abbrev: "Ra", name:"Radium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Ac":{num: 89, abbrev: "Ac", name:"Actinium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Rf":{num: 104, abbrev: "Rf", name:"Rutherfordium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Db":{num: 77, abbrev: "Db", name:"Dubnium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Sg":{num: 78, abbrev: "Sg", name:"Seaborgium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Bh":{num: 79, abbrev: "Bh", name:"Bohrium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Hs":{num: 80, abbrev: "Hs", name:"Hassium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Mt":{num: 81, abbrev: "Mt", name:"Meitnerium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Ds":{num: 82, abbrev: "Ds", name:"Darmstadtium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Rg":{num: 83, abbrev: "Rg", name:"Roentgenium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Cn":{num: 84, abbrev: "Cn", name:"Copernicium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Nh":{num: 85, abbrev: "Nh", name:"Nihonium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Fl":{num: 86, abbrev: "Fl", name:"Flerovium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Mc":{num: 87, abbrev: "Mc", name:"Moscovium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Lv":{num: 88, abbrev: "Lv", name:"Livermorium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Ts":{num: 89, abbrev: "Ts", name:"Tennessine", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Og":{num: 118, abbrev: "Og", name:"Oganesson", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    // Bookmark
    "Ce":{num: 58, abbrev: "Ce", name:"Lithium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Pr":{num: 59, abbrev: "Pr", name:"Lithium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Nd":{num: 60, abbrev: "Nd", name:"Lithium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Pm":{num: 61, abbrev: "Pm", name:"Lithium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Sm":{num: 62, abbrev: "Sm", name:"Lithium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Eu":{num: 63, abbrev: "Eu", name:"Lithium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Gd":{num: 64, abbrev: "Gd", name:"Lithium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Tb":{num: 65, abbrev: "Tb", name:"Lithium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Dy":{num: 66, abbrev: "Dy", name:"Lithium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Ho":{num: 67, abbrev: "Ho", name:"Lithium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Er":{num: 68, abbrev: "Er", name:"Lithium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Tm":{num: 69, abbrev: "Tm", name:"Lithium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Yb":{num: 70, abbrev: "Yb", name:"Lithium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Lu":{num: 71, abbrev: "Lu", name:"Lithium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    // Fix numbers
    "Th":{num: 105, abbrev: "Th", name:"Lithium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Pa":{num: 106, abbrev: "Pa", name:"Lithium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "U":{num: 107, abbrev: "U", name:"Lithium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Np":{num: 108, abbrev: "Np", name:"Lithium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Pu":{num: 109, abbrev: "Pu", name:"Lithium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Am":{num: 110, abbrev: "Am", name:"Lit3hium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Cm":{num: 111, abbrev: "Cm", name:"Lithium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Bk":{num: 112, abbrev: "Bk", name:"Lithium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Cf":{num: 113, abbrev: "Cf", name:"Lithium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Es":{num: 114, abbrev: "Es", name:"Lithium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Fm":{num: 115, abbrev: "Fm", name:"Lithium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Md":{num: 116, abbrev: "Md", name:"Lithium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "No":{num: 117, abbrev: "No", name:"Lithium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Lr":{num: 118, abbrev: "Lr", name:"Lithium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
}

$.each($('[data-elem]'), function(i,v){
    let key = $(v).data("elem");
    let currentElem = elementList[key];
    console.log(key);
    let elemDiv = `<div class="elementBox ${currentElem.type.class}" style="background-color: "><p class="elemNum">${currentElem.num}</p>
    <h1 class="elemAbbr">${currentElem.abbrev}</h1><p class="elemName">${currentElem.name}</p></div>`;
    $(v).append(elemDiv);

})