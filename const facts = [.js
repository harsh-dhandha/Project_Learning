const facts = [
  "The shortest war in history was between Britain and Zanzibar on August 27, 1896, and lasted only 38 minutes.",
  "The longest word in the English language, according to the Oxford English Dictionary, is pneumonoultramicroscopicsilicovolcanoconiosis, a lung disease caused by inhaling very fine particles of silica.",
  "Butterflies taste with their feet.",
  "A group of flamingos is called a 'flamboyance'.",
  "The human nose can detect over 1 trillion different scents.",
];

let currentFactIndex = 0;

function showFact() {
  const factElement = document.getElementById("fact");
  factElement.textContent = facts[currentFactIndex];
  currentFactIndex = (currentFactIndex + 1) % facts.length;
}

setInterval(showFact, 10000); // Show a new fact every 10 seconds