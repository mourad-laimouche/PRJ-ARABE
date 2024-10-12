// Define the alliances
const alliances = {
    quraish: ["banu-hashim", "banu-tamim", "aws"],
    "banu-hashim": ["quraish", "aws", "khazraj"],
    "banu-tamim": ["quraish", "thaqif"],
    aws: ["khazraj", "quraish"],
    khazraj: ["aws", "quraish"],
    thaqif: ["banu-tamim"],
    "banu-kalb": ["ghassan", "banu-amir"],
    ghassan: ["banu-kalb"],
    "banu-amir": ["banu-kalb"]
};

// Function to show alliances and draw lines
function showAlliances(tribe) {
    // Clear previous lines
    const svg = document.getElementById("lines");
    svg.innerHTML = "";

    const selectedTribe = document.getElementById(tribe);
    const tribePosition = selectedTribe.getBoundingClientRect();

    // Get the alliances of the clicked tribe
    const allies = alliances[tribe];

    // Draw a line to each ally
    allies.forEach(ally => {
        const allyTribe = document.getElementById(ally);
        const allyPosition = allyTribe.getBoundingClientRect();

        drawLine(
            tribePosition.left + tribePosition.width / 2,
            tribePosition.top + tribePosition.height / 2,
            allyPosition.left + allyPosition.width / 2,
            allyPosition.top + allyPosition.height / 2
        );
    });
}

// Function to draw a line between two points
function drawLine(x1, y1, x2, y2) {
    const svg = document.getElementById("lines");
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");

    line.setAttribute("x1", x1);
    line.setAttribute("y1", y1);
    line.setAttribute("x2", x2);
    line.setAttribute("y2", y2);
    line.setAttribute("stroke", "black");
    line.setAttribute("stroke-width", "2");

    svg.appendChild(line);
}