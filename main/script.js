const teams = [
    // Liga Española
    "FC Barcelona", "Real Madrid", "Atlético Madrid", "Sevilla FC", "Valencia CF", 
    "Villarreal CF", "Real Sociedad", "Real Betis", "Athletic Club", 
    "RCD Espanyol", "Levante UD", "Rayo Vallecano",

    // Liga Italiana
    "Juventus", "AC Milan", "Inter de Milán", "AS Roma", "Napoli", 
    "Lazio", "Fiorentina", "Atalanta", "Sassuolo", "Torino", 
    "Bologna", "Sampdoria", "Udinese",

    // Liga Inglesa
    "Manchester City", "Liverpool", "Chelsea", "Arsenal", "Manchester United", 
    "Tottenham Hotspur", "Leicester City", "West Ham United", "Aston Villa", 
    "Newcastle United", "Wolverhampton Wanderers", "Crystal Palace", "Burnley", "Fulham",

    // Liga Holandesa
    "Ajax", "PSV Eindhoven", "Feyenoord", "AZ Alkmaar", "Utrecht", 
    "Vitesse", "Heerenveen", "Groningen",

    // Liga Argentina
    "Boca Juniors", "River Plate", "Racing Club", "San Lorenzo", 
    "Independiente",

    // Liga Alemana
    "Bayern Múnich", "Borussia Dortmund", "Bayer Leverkusen", 
    "VfL Wolfsburgo", "Eintracht Frankfurt", 
    "Hoffenheim", "Mainz 05", "Arminia Bielefeld", "Schalke 04",

    // Liga Árabe
    "Al Hilal", "Al Nassr",

    // Liga de Estados Unidos (MLS)
    "LA Galaxy", "Atlanta United", "NYC FC", "Inter Miami CF", 
    "Chicago Fire",

    // Equipos de Corea del Sur
    "Ulsan Hyundai", "FC Seoul",

    // Equipos del resto del mundo
    "Paris Saint-Germain", "Olympique de Marseille", "AS Monaco", 
    "Olympique Lyonnais", "Lille OSC", "Stade Rennais",

    // Otros
    "Galatasaray",
    "SL Benfica",
    "Fenerbahçe", "MLS All Stars", "Oporto FC", "Soccer AID"
];

const startButton = document.getElementById("startButton");
const randomTeamText = document.getElementById("randomTeam");

let isSpinning = false;
let spinInterval;

function getRandomTeam() {
    const randomIndex = Math.floor(Math.random() * teams.length);
    return teams[randomIndex];
}

function startSpin() {
    if (isSpinning) return;

    isSpinning = true;
    let spinDuration = 3000; 
    randomTeamText.textContent = "Girando..."; 

    spinInterval = setInterval(() => {
        randomTeamText.textContent = getRandomTeam();
    }, 100); 

    setTimeout(() => {
        clearInterval(spinInterval);
        randomTeamText.textContent = getRandomTeam(); 
        isSpinning = false;
    }, spinDuration);
}

startButton.addEventListener("click", startSpin);
