const adjectives = [
  "brave",
  "blue",
  "basic",
  "creative",
  "groovy",
  "honest",
  "nervous",
];
const nouns = ["banana", "hat", "class", "man", "foot", "story"];

export function getRandomName() {
  const adjectiveIndex = Math.floor(Math.random() * adjectives.length);
  const nounIndex = Math.floor(Math.random() * nouns.length);

  return `${adjectives[adjectiveIndex]} ${nouns[nounIndex]}`;
}
