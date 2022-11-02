

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
    AlkaliMetals: {type: "Alkali Metals", color: "#244d57", class:"alkaliMetals"},
    AlkaliEarthMetals: {type: "Alkali Earth Metals", color: "#622e39", class:"alkalineEarthMetals"},
    TransitionMetals: {type: "Transition Metals", color: "#433c65", class:"transitionMetals"},
    PostTransitionMetals: {type: "Post-Transition Metals", color: "#2f4d47", class:"postTransitionMetals"},
    Metalloids: {type: "Metalloids", color: "#523e1b", class:"metalloids"},
    Lanthanides: {type: "Lanthanides", color: "#004a77", class:"lanthanides"},
    Actinides: {type: "Actinides", color: "#613b28", class:"actinides"},
    Unknown: {type: "Unknown Properties", color: "#46474c", class:"unknownProperties"}
}

let elementList = {
    // First Row
    "H":{num: 1, abbrev: "H", name:"Hydrogen", mass: 1.0078, type: ElementTypes.ReactiveNonMetal},
    "He":{num: 2, abbrev: "He", name:"Helium", mass: 4.0026, type: ElementTypes.NobleGases},
    // Second Row
    "Li":{num: 3, abbrev: "Li", name:"Lithium", mass: 6.9410, type: ElementTypes.AlkaliMetals},
    "Be":{num: 4, abbrev: "Be", name:"Beryllium", mass: 9.0122, type: ElementTypes.AlkaliEarthMetals},
    "B":{num: 5, abbrev: "B", name:"Boron", mass: 10.811, type: ElementTypes.Metalloids},
    "C":{num: 6, abbrev: "C", name:"Carbon", mass: 12.011, type: ElementTypes.ReactiveNonMetal},
    "N":{num: 7, abbrev: "N", name:"Nitrogen", mass: 14.007, type: ElementTypes.ReactiveNonMetal},
    "O":{num: 8, abbrev: "O", name:"Oxygen", mass: 15.999, type: ElementTypes.ReactiveNonMetal},
    "F":{num: 9, abbrev: "F", name:"Fluorine", mass: 18.998, type: ElementTypes.ReactiveNonMetal},
    "Ne":{num: 10, abbrev: "Ne", name:"Neon", mass: 20.180, type: ElementTypes.NobleGases},
    // Third Row
    "Na":{num: 11, abbrev: "Na", name:"Sodium", mass: 22.990, type: ElementTypes.AlkaliMetals},
    "Mg":{num: 12, abbrev: "Mg", name:"Magnesium", mass: 24.305, type: ElementTypes.AlkaliEarthMetals},
    "Al":{num: 13, abbrev: "Al", name:"Aluminium", mass: 26.982, type: ElementTypes.PostTransitionMetals},
    "Si":{num: 14, abbrev: "Si", name:"Silicon", mass: 28.086, type: ElementTypes.Metalloids},
    "P":{num: 15, abbrev: "P", name:"Phosphorus", mass: 30.974, type: ElementTypes.ReactiveNonMetal},
    "S":{num: 16, abbrev: "S", name:"Sulfur", mass: 32.065, type: ElementTypes.ReactiveNonMetal},
    "Cl":{num: 17, abbrev: "Cl", name:"Chlorine", mass: 35.453, type: ElementTypes.ReactiveNonMetal},
    "Ar":{num: 18, abbrev: "Ar", name:"Argon", mass: 39.948, type: ElementTypes.NobleGases},
    // Fourth Row
    "K":{num: 19, abbrev: "K", name:"Potassium", mass: 39.098, type: ElementTypes.AlkaliMetals},
    "Ca":{num: 20, abbrev: "Ca", name:"Calcium", mass: 40.078, type: ElementTypes.AlkaliEarthMetals},
    "Sc":{num: 21, abbrev: "Sc", name:"Scandium", mass: 44.956, type: ElementTypes.TransitionMetals},
    "Ti":{num: 22, abbrev: "Ti", name:"Titanium", mass: 47.867, type: ElementTypes.TransitionMetals},
    "V":{num: 23, abbrev: "V", name:"Vanadium", mass: 50.942, type: ElementTypes.TransitionMetals},
    "Cr":{num: 24, abbrev: "Cr", name:"Chromium", mass: 51.996, type: ElementTypes.TransitionMetals},
    "Mn":{num: 25, abbrev: "Mn", name:"Manganese", mass: 54.938, type: ElementTypes.TransitionMetals},
    "Fe":{num: 26, abbrev: "Fe", name:"Iron", mass: 55.845, type: ElementTypes.TransitionMetals},
    "Co":{num: 27, abbrev: "Co", name:"Cobalt", mass: 58.933, type: ElementTypes.TransitionMetals},
    "Ni":{num: 28, abbrev: "Ni", name:"Nickel", mass: 58.693, type: ElementTypes.TransitionMetals},
    "Cu":{num: 29, abbrev: "Cu", name:"Copper", mass: 63.546, type: ElementTypes.TransitionMetals},
    "Zn":{num: 30, abbrev: "Zn", name:"Zinc", mass: 65.380, type: ElementTypes.TransitionMetals},
    "Ga":{num: 31, abbrev: "Ga", name:"Galium", mass: 69.723, type: ElementTypes.PostTransitionMetals},
    "Ge":{num: 32, abbrev: "Ge", name:"Germanium", mass: 72.640, type: ElementTypes.Metalloids},
    "As":{num: 33, abbrev: "As", name:"Arsenic", mass: 74.922, type: ElementTypes.Metalloids},
    "Se":{num: 34, abbrev: "Se", name:"Selenium", mass: 78.960, type: ElementTypes.ReactiveNonMetal},
    "Br":{num: 35, abbrev: "Br", name:"Bromine", mass: 79.904, type: ElementTypes.ReactiveNonMetal},
    "Kr":{num: 36, abbrev: "Kr", name:"Krypton", mass: 83.798, type: ElementTypes.NobleGases},
    // Fith Row
    "Rb":{num: 37, abbrev: "Rb", name:"Rubidium", mass: 85.468, type: ElementTypes.AlkaliMetals},
    "Sr":{num: 38, abbrev: "Sr", name:"Strontium", mass: 87.620, type: ElementTypes.AlkaliEarthMetals},
    "Y":{num: 39, abbrev: "Y", name:"Yttrium", mass: 88.906, type: ElementTypes.TransitionMetals},
    "Zr":{num: 40, abbrev: "Zr", name:"Zirconium", mass: 91.244, type: ElementTypes.TransitionMetals},
    "Nb":{num: 41, abbrev: "Nb", name:"Niobium", mass: 92.906, type: ElementTypes.TransitionMetals},
    "Mo":{num: 42, abbrev: "Mo", name:"Molybdenum", mass: 95.950, type: ElementTypes.TransitionMetals},
    "Tc":{num: 43, abbrev: "Tc", name:"Technetium", mass: 98, type: ElementTypes.TransitionMetals},
    "Ru":{num: 44, abbrev: "Ru", name:"Ruthenium", mass: 101.07, type: ElementTypes.TransitionMetals},
    "Rh":{num: 45, abbrev: "Rh", name:"Rhodium", mass: 102.91, type: ElementTypes.TransitionMetals},
    "Pd":{num: 46, abbrev: "Pd", name:"Palladium", mass: 106.42, type: ElementTypes.TransitionMetals},
    "Ag":{num: 47, abbrev: "Ag", name:"Silver", mass: 107.87, type: ElementTypes.TransitionMetals},
    "Cd":{num: 48, abbrev: "Cd", name:"Cadmium", mass: 112.41, type: ElementTypes.TransitionMetals},
    "In":{num: 49, abbrev: "In", name:"Indium", mass: 114.82, type: ElementTypes.PostTransitionMetals},
    "Sn":{num: 50, abbrev: "Sn", name:"Tin", mass: 118.71, type: ElementTypes.PostTransitionMetals},
    "Sb":{num: 51, abbrev: "Sb", name:"Antimony", mass: 121.76, type: ElementTypes.Metalloids},
    "Te":{num: 52, abbrev: "Te", name:"Tellurium", mass: 127.60, type: ElementTypes.Metalloids},
    "I":{num: 53, abbrev: "I", name:"Iodine", mass: 126.90, type: ElementTypes.ReactiveNonMetal},
    "Xe":{num: 54, abbrev: "Xe", name:"Xenon", mass: 131.29, type: ElementTypes.NobleGases},
    // Sixth Row
    "Cs":{num: 55, abbrev: "Cs", name:"Caesium", mass: 132.91, type: ElementTypes.AlkaliMetals},
    "Ba":{num: 56, abbrev: "Ba", name:"Barium", mass: 137.33, type: ElementTypes.AlkaliEarthMetals},
    "La":{num: 57, abbrev: "La", name:"Lanthanum", mass: 138.91, type: ElementTypes.Lanthanides},
    "Hf":{num: 72, abbrev: "Hf", name:"Hafnium", mass: 178.49, type: ElementTypes.TransitionMetals},
    "Ta":{num: 73, abbrev: "Ta", name:"Tantalum", mass: 180.95, type: ElementTypes.TransitionMetals},
    "W":{num: 74, abbrev: "W", name:"Tungsten", mass: 183.84, type: ElementTypes.TransitionMetals},
    "Re":{num: 75, abbrev: "Re", name:"Rhenium", mass: 186.21, type: ElementTypes.TransitionMetals},
    "Os":{num: 76, abbrev: "Os", name:"Osmium", mass: 190.23, type: ElementTypes.TransitionMetals},
    "Ir":{num: 77, abbrev: "Ir", name:"Iridium", mass: 192.22, type: ElementTypes.TransitionMetals},
    "Pt":{num: 78, abbrev: "Pt", name:"Platinum", mass: 195.08, type: ElementTypes.TransitionMetals},
    "Au":{num: 79, abbrev: "Au", name:"Gold", mass: 196.97, type: ElementTypes.TransitionMetals},
    "Hg":{num: 80, abbrev: "Hg", name:"Mercury", mass: 200.59, type: ElementTypes.TransitionMetals},
    "Tl":{num: 81, abbrev: "Tl", name:"Thallium", mass: 204.38, type: ElementTypes.PostTransitionMetals},
    "Pb":{num: 82, abbrev: "Pb", name:"Lead", mass: 207.20, type: ElementTypes.PostTransitionMetals},
    "Bi":{num: 83, abbrev: "Bi", name:"Bismuth", mass: 208.98, type: ElementTypes.PostTransitionMetals},
    "Po":{num: 84, abbrev: "Po", name:"Polonium", mass: 209, type: ElementTypes.PostTransitionMetals},
    "At":{num: 85, abbrev: "At", name:"Astatine", mass: 210, type: ElementTypes.PostTransitionMetals},
    "Rn":{num: 86, abbrev: "Rn", name:"Radon", mass: 222, type: ElementTypes.NobleGases},
    // Seventh Row
    "Fr":{num: 87, abbrev: "Fr", name:"Francium", mass: 223, type: ElementTypes.AlkaliMetals},
    "Ra":{num: 88, abbrev: "Ra", name:"Radium", mass: 226, type: ElementTypes.AlkaliEarthMetals},
    "Ac":{num: 89, abbrev: "Ac", name:"Actinium", mass: 227, type: ElementTypes.Actinides},
    "Rf":{num: 104, abbrev: "Rf", name:"Rutherfordium", mass: 261, type: ElementTypes.TransitionMetals},
    "Db":{num: 105, abbrev: "Db", name:"Dubnium", mass: 192.22, type: ElementTypes.TransitionMetals},
    "Sg":{num: 106, abbrev: "Sg", name:"Seaborgium", mass: 195.08, type: ElementTypes.TransitionMetals},
    "Bh":{num: 107, abbrev: "Bh", name:"Bohrium", mass: 196.97, type: ElementTypes.TransitionMetals},
    "Hs":{num: 108, abbrev: "Hs", name:"Hassium", mass: 200.59, type: ElementTypes.TransitionMetals},
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

    "Ce":{num: 58, abbrev: "Ce", name:"Cerium", mass: 140.12, type: ElementTypes.Lanthanides},
    "Pr":{num: 59, abbrev: "Pr", name:"Praseodymium", mass: 140.91, type: ElementTypes.Lanthanides},
    "Nd":{num: 60, abbrev: "Nd", name:"Neodymium", mass: 144.24, type: ElementTypes.Lanthanides},
    "Pm":{num: 61, abbrev: "Pm", name:"Promethium", mass: 145, type: ElementTypes.Lanthanides},
    "Sm":{num: 62, abbrev: "Sm", name:"Samarium", mass: 150.36, type: ElementTypes.Lanthanides},
    "Eu":{num: 63, abbrev: "Eu", name:"Europium", mass: 151.96, type: ElementTypes.Lanthanides},
    "Gd":{num: 64, abbrev: "Gd", name:"Gadolinium", mass: 157.25, type: ElementTypes.Lanthanides},
    "Tb":{num: 65, abbrev: "Tb", name:"Terbium", mass: 158.93, type: ElementTypes.Lanthanides},
    "Dy":{num: 66, abbrev: "Dy", name:"Dysprosium", mass: 162.5, type: ElementTypes.Lanthanides},
    "Ho":{num: 67, abbrev: "Ho", name:"Holmium", mass: 164.93, type: ElementTypes.Lanthanides},
    "Er":{num: 68, abbrev: "Er", name:"Erbium", mass: 167.26, type: ElementTypes.Lanthanides},
    "Tm":{num: 69, abbrev: "Tm", name:"Thulium", mass: 168.93, type: ElementTypes.Lanthanides},
    "Yb":{num: 70, abbrev: "Yb", name:"Ytterbium", mass: 173.04, type: ElementTypes.Lanthanides},
    "Lu":{num: 71, abbrev: "Lu", name:"Lutetium", mass: 174.97, type: ElementTypes.Lanthanides},

    "Th":{num: 90, abbrev: "Th", name:"Thorium", mass: 232.04, type: ElementTypes.Actinides},
    "Pa":{num: 91, abbrev: "Pa", name:"Protactinium", mass: 231.04, type: ElementTypes.Actinides},
    "U":{num: 92, abbrev: "U", name:"Uranium", mass: 238.03, type: ElementTypes.Actinides},
    "Np":{num: 93, abbrev: "Np", name:"Neptunium", mass: 237.05, type: ElementTypes.Actinides},
    "Pu":{num: 94, abbrev: "Pu", name:"Plutonium", mass: 244, type: ElementTypes.Actinides},
    "Am":{num: 95, abbrev: "Am", name:"Americium", mass: 243, type: ElementTypes.Actinides},
    "Cm":{num: 96, abbrev: "Cm", name:"Curium", mass: 247, type: ElementTypes.Actinides},
    "Bk":{num: 97, abbrev: "Bk", name:"Berkelium", mass: 247, type: ElementTypes.Actinides},
    "Cf":{num: 98, abbrev: "Cf", name:"Californium", mass: 251, type: ElementTypes.Actinides},
    "Es":{num: 99, abbrev: "Es", name:"Einsteinium", mass: 252, type: ElementTypes.Actinides},
    "Fm":{num: 100, abbrev: "Fm", name:"Fermium", mass: 257, type: ElementTypes.Actinides},
    "Md":{num: 101, abbrev: "Md", name:"Mendelevium", mass: 258, type: ElementTypes.Actinides},
    "No":{num: 102, abbrev: "No", name:"Nobelium", mass: 259, type: ElementTypes.Actinides},
    "Lr":{num: 103, abbrev: "Lr", name:"Lawrencium", mass: 262, type: ElementTypes.Actinides},
}
// Adds every cell into the periodic table
$.each(elementList, function(i,v){
    console.log(v);
    let currentElem = v;
    let elemDiv = `<div class="elementBox ${currentElem.type.class}" style="grid-area: ${currentElem.abbrev}"><p class="elemNum">${currentElem.num}</p>
    <h1 class="elemAbbr">${currentElem.abbrev}</h1></div>`;
    $("#perioticTable").append(elemDiv);

})

