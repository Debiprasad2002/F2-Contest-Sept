const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  const developers = data.filter((person) => person.profession === "developer");
  console.log(developers);
}

// 2. Add Data
function addData() {
  const name = prompt("Enter name:");
  const age = parseInt(prompt("Enter age:"));
  const profession = prompt("Enter profession:");
  const newData = { name, age, profession };
  data.push(newData);
  
}

// 3. Remove Admins
function removeAdmin() {
  data = data.filter((person) => person.profession !== "admin");
}

// 4. Concatenate Array
function concatenateArray() {
 const dummyArray = [
  {name: "john" , age:21 , profession:"ASE"},
  {name: "Rahul" , age:22 , profession:"SE"},
 ];
 const concatenateArray = data.concat(dummyArray);
 console.log(concatenateArray);
}

// 5. Average Age
function averageAge() {
 const totalage= data.reduce((sum , person) => sum+person.age , 0);
 const Average= totalage / data.length;
 console.log(Average);

}

// 6. Age Check
function checkAgeAbove25() {
  const Ageabove25 = data.some((person) => person.age>25)
  console.log(Ageabove);
}

// 7. Unique Professions
function uniqueProfessions() {
  const professions = [...new Set(data.map((person) => person.profession))];
  console.log("Unique professions:", professions);
}

// 8. Sort by Age
function sortByAge() {
  data.sort((a,b) =>a.age - b.age)
  console.log(data);
}

// 9. Update Profession
function updateJohnsProfession() {
  const john = data.find((person) => person.name === "john");
  if (john) {
    john.profession = "manager";
  }
}

// 10. Profession Count
function getTotalProfessions() {
  const developerCount = data.filter((person) => person.profession === "developer").length;
  const adminCount = data.filter((person) => person.profession === "admin").length;
  console.log("Developer count:", developerCount);
  console.log("Admin count:", adminCount);
}
