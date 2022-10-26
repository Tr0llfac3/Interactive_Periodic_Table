

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
    NobleGases: {type: "Noble Gases", color: "#623842", class:"nobleGas"},
    AlkaliMetals: {type: "Noble Gases", color: "#623842", class:"nobleGas"}
}

let elementList = {
    "H":{num: 1, abbrev: "H", name:"Hydrogen", mass: 1.0078, type: ElementTypes.ReactiveNonMetal},
    "He":{num: 2, abbrev: "He", name:"Helium", mass: 4.0026, type: ElementTypes.NobleGases},
    "Li":{num: 3, abbrev: "Li", name:"Lithium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Be":{num: 4, abbrev: "Be", name:"Beryllium", mass: 9.0122, type: ElementTypes.AlkaliMetals},
    "B":{num: 5, abbrev: "B", name:"Boron", mass: 10.811, type: ElementTypes.AlkaliMetals},
    "C":{num: 6, abbrev: "C", name:"Carbon", mass: 12.011, type: ElementTypes.AlkaliMetals},
    "N":{num: 7, abbrev: "N", name:"Nitrogen", mass: 14.007, type: ElementTypes.AlkaliMetals},
    "O":{num: 8, abbrev: "O", name:"Oxygen", mass: 15.999, type: ElementTypes.AlkaliMetals},
    "F":{num: 9, abbrev: "F", name:"Fluorine", mass: 18.998, type: ElementTypes.AlkaliMetals},
    "Ne":{num: 10, abbrev: "Ne", name:"Neon", mass: 20.180, type: ElementTypes.AlkaliMetals},
    "Na":{num: 11, abbrev: "Na", name:"Sodium", mass: 22.990, type: ElementTypes.AlkaliMetals},
    "Mg":{num: 12, abbrev: "Mg", name:"Magnesium", mass: 24.305, type: ElementTypes.AlkaliMetals},
    "Al":{num: 13, abbrev: "Al", name:"Aluminium", mass: 26.982, type: ElementTypes.AlkaliMetals},
    "Si":{num: 14, abbrev: "Si", name:"Silicon", mass: 28.086, type: ElementTypes.AlkaliMetals},
    "P":{num: 15, abbrev: "P", name:"Phosphorus", mass: 30.974, type: ElementTypes.AlkaliMetals},
    "S":{num: 16, abbrev: "S", name:"Sulfur", mass: 32.065, type: ElementTypes.AlkaliMetals},
    "Cl":{num: 17, abbrev: "Cl", name:"Chlorine", mass: 35.453, type: ElementTypes.AlkaliMetals},
    "Ar":{num: 18, abbrev: "Ar", name:"Argon", mass: 39.948, type: ElementTypes.AlkaliMetals},
    "K":{num: 19, abbrev: "K", name:"Potassium", mass: 39.098, type: ElementTypes.AlkaliMetals},
    "Ca":{num: 20, abbrev: "Ca", name:"Calcium", mass: 40.078, type: ElementTypes.AlkaliMetals},
    "Sc":{num: 21, abbrev: "Sc", name:"Scandium", mass: 44.956, type: ElementTypes.AlkaliMetals},
    "Ti":{num: 22, abbrev: "Ti", name:"Titanium", mass: 47.867, type: ElementTypes.AlkaliMetals},
    "V":{num: 23, abbrev: "V", name:"Vanadium", mass: 50.942, type: ElementTypes.AlkaliMetals},
    "Cr":{num: 24, abbrev: "Cr", name:"Chromium", mass: 51.996, type: ElementTypes.AlkaliMetals},
    "Mn":{num: 25, abbrev: "Mn", name:"Manganese", mass: 54.938, type: ElementTypes.AlkaliMetals},
    "Fe":{num: 26, abbrev: "Fe", name:"Iron", mass: 55.845, type: ElementTypes.AlkaliMetals},
    "Co":{num: 27, abbrev: "Co", name:"Cobalt", mass: 58.933, type: ElementTypes.AlkaliMetals},
    "Ni":{num: 28, abbrev: "Ni", name:"Nickel", mass: 58.693, type: ElementTypes.AlkaliMetals},
    "Cu":{num: 29, abbrev: "Cu", name:"Copper", mass: 63.546, type: ElementTypes.AlkaliMetals},
    "Zn":{num: 30, abbrev: "Zn", name:"Zinc", mass: 65.380, type: ElementTypes.AlkaliMetals},
    "Ga":{num: 31, abbrev: "Ga", name:"Galium", mass: 69.723, type: ElementTypes.AlkaliMetals},
    "Ge":{num: 32, abbrev: "Ge", name:"Germanium", mass: 72.640, type: ElementTypes.AlkaliMetals},
    "As":{num: 33, abbrev: "As", name:"Arsenic", mass: 74.922, type: ElementTypes.AlkaliMetals},
    "Se":{num: 34, abbrev: "Se", name:"Selenium", mass: 78.960, type: ElementTypes.AlkaliMetals},
    "Br":{num: 35, abbrev: "Br", name:"Bromine", mass: 79.904, type: ElementTypes.AlkaliMetals},
    "Kr":{num: 36, abbrev: "Kr", name:"Krypton", mass: 83.798, type: ElementTypes.AlkaliMetals},
    "Rb":{num: 37, abbrev: "Rb", name:"Rubidium", mass: 85.468, type: ElementTypes.AlkaliMetals},
    "Sr":{num: 38, abbrev: "Sr", name:"Strontium", mass: 87.620, type: ElementTypes.AlkaliMetals},
    "Y":{num: 39, abbrev: "Y", name:"Yttrium", mass: 88.906, type: ElementTypes.AlkaliMetals},
    "Zr":{num: 40, abbrev: "Zr", name:"Zirconium", mass: 91.244, type: ElementTypes.AlkaliMetals},
    "Nb":{num: 41, abbrev: "Nb", name:"Niobium", mass: 92.906, type: ElementTypes.AlkaliMetals},
    "Mo":{num: 42, abbrev: "Mo", name:"Molybdenum", mass: 95.950, type: ElementTypes.AlkaliMetals},
    "Tc":{num: 43, abbrev: "Tc", name:"Technetium", mass: 98, type: ElementTypes.AlkaliMetals},
    "Ru":{num: 44, abbrev: "Ru", name:"Ruthenium", mass: 101.07, type: ElementTypes.AlkaliMetals},
    "Rh":{num: 45, abbrev: "Rh", name:"Rhodium", mass: 102.91, type: ElementTypes.AlkaliMetals},
    "Pd":{num: 46, abbrev: "Pd", name:"Palladium", mass: 106.42, type: ElementTypes.AlkaliMetals},
    "Ag":{num: 47, abbrev: "Ag", name:"Silver", mass: 107.87, type: ElementTypes.AlkaliMetals},
    "Cd":{num: 48, abbrev: "Cd", name:"Cadmium", mass: 112.41, type: ElementTypes.AlkaliMetals},
    "In":{num: 49, abbrev: "In", name:"Indium", mass: 114.82, type: ElementTypes.AlkaliMetals},
    "Sn":{num: 50, abbrev: "Sn", name:"Tin", mass: 118.71, type: ElementTypes.AlkaliMetals},
    "Sb":{num: 51, abbrev: "Sb", name:"Antimony", mass: 121.76, type: ElementTypes.AlkaliMetals},
    "Te":{num: 52, abbrev: "Te", name:"Tellurium", mass: 127.60, type: ElementTypes.AlkaliMetals},
    "I":{num: 53, abbrev: "I", name:"Iodine", mass: 126.90, type: ElementTypes.AlkaliMetals},
    "Xe":{num: 54, abbrev: "Xe", name:"Xenon", mass: 131.29, type: ElementTypes.AlkaliMetals},
    "Cs":{num: 55, abbrev: "Cs", name:"Caesium", mass: 132.91, type: ElementTypes.AlkaliMetals},
    "Ba":{num: 56, abbrev: "Ba", name:"Barium", mass: 137.33, type: ElementTypes.AlkaliMetals},
    "La":{num: 57, abbrev: "La", name:"Lanthanum", mass: 138.91, type: ElementTypes.AlkaliMetals},
    "Hf":{num: 72, abbrev: "Hf", name:"Hafnium", mass: 178.49, type: ElementTypes.AlkaliMetals},
    "Ta":{num: 73, abbrev: "Ta", name:"Tantalum", mass: 180.95, type: ElementTypes.AlkaliMetals},
    "W":{num: 74, abbrev: "W", name:"Tungsten", mass: 183.84, type: ElementTypes.AlkaliMetals},
    "Re":{num: 75, abbrev: "Re", name:"Rhenium", mass: 186.21, type: ElementTypes.AlkaliMetals},
    "Os":{num: 76, abbrev: "Os", name:"Osmium", mass: 190.23, type: ElementTypes.AlkaliMetals},
    "Ir":{num: 77, abbrev: "Ir", name:"Iridium", mass: 192.22, type: ElementTypes.AlkaliMetals},
    "Pt":{num: 78, abbrev: "Pt", name:"Platinum", mass: 195.08, type: ElementTypes.AlkaliMetals},
    "Au":{num: 79, abbrev: "Au", name:"Gold", mass: 196.97, type: ElementTypes.AlkaliMetals},
    "Hg":{num: 80, abbrev: "Hg", name:"Mercury", mass: 200.59, type: ElementTypes.AlkaliMetals},
    "Tl":{num: 81, abbrev: "Ti", name:"Thallium", mass: 204.38, type: ElementTypes.AlkaliMetals},
    "Pb":{num: 82, abbrev: "Pb", name:"Lead", mass: 207.20, type: ElementTypes.AlkaliMetals},
    "Bi":{num: 83, abbrev: "Bi", name:"Bismuth", mass: 208.98, type: ElementTypes.AlkaliMetals},
    "Po":{num: 84, abbrev: "Po", name:"Polonium", mass: 209, type: ElementTypes.AlkaliMetals},
    "At":{num: 85, abbrev: "At", name:"Astatine", mass: 210, type: ElementTypes.AlkaliMetals},
    "Rn":{num: 86, abbrev: "Rn", name:"Radon", mass: 222, type: ElementTypes.AlkaliMetals},
    "Fr":{num: 87, abbrev: "Fr", name:"Francium", mass: 223, type: ElementTypes.AlkaliMetals},
    "Ra":{num: 88, abbrev: "Ra", name:"Radium", mass: 226, type: ElementTypes.AlkaliMetals},
    "Ac":{num: 89, abbrev: "Ac", name:"Actinium", mass: 227, type: ElementTypes.AlkaliMetals},
    "Rf":{num: 104, abbrev: "Rf", name:"Rutherfordium", mass: 261, type: ElementTypes.AlkaliMetals},
    "Db":{num: 105, abbrev: "Db", name:"Dubnium", mass: 192.22, type: ElementTypes.AlkaliMetals},
    "Sg":{num: 106, abbrev: "Sg", name:"Seaborgium", mass: 195.08, type: ElementTypes.AlkaliMetals},
    "Bh":{num: 107, abbrev: "Bh", name:"Bohrium", mass: 196.97, type: ElementTypes.AlkaliMetals},
    "Hs":{num: 108, abbrev: "Hs", name:"Hassium", mass: 200.59, type: ElementTypes.AlkaliMetals},
    "Mt":{num: 109, abbrev: "Mt", name:"Meitnerium", mass: 278, type: ElementTypes.AlkaliMetals},
    "Ds":{num: 110, abbrev: "Ds", name:"Darmstadtium", mass: 281, type: ElementTypes.AlkaliMetals},
    "Rg":{num: 111, abbrev: "Rg", name:"Roentgenium", mass: 282, type: ElementTypes.AlkaliMetals},
    "Cn":{num: 112, abbrev: "Cn", name:"Copernicium", mass: 285, type: ElementTypes.AlkaliMetals},
    "Nh":{num: 113, abbrev: "Nh", name:"Nihonium", mass: 286, type: ElementTypes.AlkaliMetals},
    "Fl":{num: 114, abbrev: "Fl", name:"Flerovium", mass: 289, type: ElementTypes.AlkaliMetals},
    "Mc":{num: 115, abbrev: "Mc", name:"Moscovium", mass: 289, type: ElementTypes.AlkaliMetals},
    "Lv":{num: 116, abbrev: "Lv", name:"Livermorium", mass: 293, type: ElementTypes.AlkaliMetals},
    "Ts":{num: 117, abbrev: "Ts", name:"Tennessine", mass: 294, type: ElementTypes.AlkaliMetals},
    "Og":{num: 118, abbrev: "Og", name:"Oganesson", mass: 294, type: ElementTypes.AlkaliMetals},
    
    // Elements 58-71, 90-103

    "Ce":{num: 58, abbrev: "Ce", name:"Cerium", mass: 140.12, type: ElementTypes.AlkaliMetals},
    "Pr":{num: 59, abbrev: "Pr", name:"Praseodymium", mass: 140.91, type: ElementTypes.AlkaliMetals},
    "Nd":{num: 60, abbrev: "Nd", name:"Neodymium", mass: 144.24, type: ElementTypes.AlkaliMetals},
    "Pm":{num: 61, abbrev: "Pm", name:"Promethium", mass: 145, type: ElementTypes.AlkaliMetals},
    "Sm":{num: 62, abbrev: "Sm", name:"Samarium", mass: 150.36, type: ElementTypes.AlkaliMetals},
    "Eu":{num: 63, abbrev: "Eu", name:"Europium", mass: 151.96, type: ElementTypes.AlkaliMetals},
    "Gd":{num: 64, abbrev: "Gd", name:"Gadolinium", mass: 157.25, type: ElementTypes.AlkaliMetals},
    "Tb":{num: 65, abbrev: "Tb", name:"Terbium", mass: 158.93, type: ElementTypes.AlkaliMetals},
    "Dy":{num: 66, abbrev: "Dy", name:"Dysprosium", mass: 162.5, type: ElementTypes.AlkaliMetals},
    "Ho":{num: 67, abbrev: "Ho", name:"Holmium", mass: 164.93, type: ElementTypes.AlkaliMetals},
    "Er":{num: 68, abbrev: "Er", name:"Erbium", mass: 167.26, type: ElementTypes.AlkaliMetals},
    "Tm":{num: 69, abbrev: "Tm", name:"Thulium", mass: 168.93, type: ElementTypes.AlkaliMetals},
    "Yb":{num: 70, abbrev: "Yb", name:"Ytterbium", mass: 173.04, type: ElementTypes.AlkaliMetals},
    "Lu":{num: 71, abbrev: "Lu", name:"Lutetium", mass: 174.97, type: ElementTypes.AlkaliMetals},
    "Th":{num: 90, abbrev: "Th", name:"Thorium", mass: 232.04, type: ElementTypes.AlkaliMetals},
    "Pa":{num: 91, abbrev: "Pa", name:"Protactinium", mass: 231.04, type: ElementTypes.AlkaliMetals},
    // Bookmark (Get the Mass And Types)
    "U":{num: 92, abbrev: "U", name:"Uranium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Np":{num: 93, abbrev: "Np", name:"Neptunium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Pu":{num: 94, abbrev: "Pu", name:"Plutonium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Am":{num: 95, abbrev: "Am", name:"Americium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Cm":{num: 96, abbrev: "Cm", name:"Curium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Bk":{num: 97, abbrev: "Bk", name:"Berkelium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Cf":{num: 98, abbrev: "Cf", name:"Californium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Es":{num: 99, abbrev: "Es", name:"Einsteinium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Fm":{num: 100, abbrev: "Fm", name:"Fermium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Md":{num: 101, abbrev: "Md", name:"Mendelevium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "No":{num: 102, abbrev: "No", name:"Nobelium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Lr":{num: 103, abbrev: "Lr", name:"Lawrencium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
}

$.each(elementList, function(i,v){
    //let key = $(v).data("elem");
    console.log(v);
    let currentElem = v;
    //console.log(key);
    let elemDiv = `<div class="elementBox ${currentElem.type.class}" style="grid-area: ${currentElem.abbrev}"><p class="elemNum">${currentElem.num}</p>
    <h1 class="elemAbbr">${currentElem.abbrev}</h1><p class="elemName">${currentElem.name}</p></div>`;
    $("#perioticTable").append(elemDiv);

})