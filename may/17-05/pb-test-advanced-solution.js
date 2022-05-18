// task 1

const profileData = {
  firstName: "Tim",
  lastName: "Red",
  age: 28,
  city: "Barcelona",
  //   details: function () {
  //     return `${this.firstName} ${this.lastName} is ${this.age} year old and lives in ${this.city}`;
  //   },
};

profileData.details = function () {
  return `${this.firstName} ${this.lastName} is ${this.age} year old and lives in ${this.city}`;
};
console.log(profileData.details());

let adjectives = ["smart", "kind", "sweet", "small", "clear"];

function wordConverter(words, suffix) {
  return words.map((word) => word + suffix);
}

console.log(wordConverter(adjectives, "er"));

const hourTracking = [
  { day: "Monday", start: 8, end: 17 },
  { day: "Tuesday", start: 9, end: 15 },
  { day: "Wednesday", start: 10, end: 18 },
  { day: "Thursday", start: 7, end: 14 },
  { day: "Friday", start: 6, end: 12 },
];

function calculateHours(hours) {
  return hours.reduce((prev, hour) => prev + (hour.end - hour.start), 0);
}
console.log(calculateHours(hourTracking));
