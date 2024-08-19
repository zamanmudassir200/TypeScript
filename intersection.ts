type Classmates = {
  section: string;
};
type Students = {
  name: string;
};
type ClassmatesInStudents = Classmates & Students;

let a: ClassmatesInStudents = {
  name: "Mudassir",
  section: "BCE(A)",
};

type Cities = {
  name: string;
  population: number;
};
type Planet = {
  name: string;
  cities: number;
};
type CitiesInPlanet = Cities & Planet;
let b: CitiesInPlanet = {
  name: "Karachi",
  population: 30000000,
  cities: 40,
};
