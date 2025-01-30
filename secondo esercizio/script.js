// Definizione degli oggetti animali
const gallina = {
    specie: "gallina",
    razza: "Andalusa",
    zampe: 2
};

const maiale = {
    specie: "maiale",
    razza: "Kunekune",
    zampe: 4
};

const mucca = {
    specie: "mucca",
    razza: "Beefalo",
    zampe: 4
};

// Scrittura dei dati negli elementi HTML corrispondenti
document.getElementById("c").innerHTML = `specie: ${gallina.specie}, razza: ${gallina.razza}, zampe: ${gallina.zampe}`;
document.getElementById("b").innerHTML = `specie: ${maiale.specie}, razza: ${maiale.razza}, zampe: ${maiale.zampe}`;
document.getElementById("a").innerHTML = `specie: ${gallina.specie}, razza: ${gallina.razza}, zampe: ${gallina.zampe}`;