const studentProfile = {
  name: "Kenan",
  age: 18,
  course: 2,
  hobbies: ["parkour", "coding"],
};

const additionalInfo = {
  adress: "3168 Moscow Ave",
  phoneNumber: "0553209707",
};

delete studentProfile.course;

const { name: studentName, age, ...rest } = studentProfile;

const completeProfile = { ...studentProfile, ...additionalInfo };

console.log(studentProfile);
console.log(age);
console.log(studentName);
console.log(completeProfile);

//arrays

const grades = [85, 92, 78, 95];

console.log(grades.length); //shows the lenth of array

grades.push(98); //add element array
grades.pop(); //delete last element of array
grades.filter((x) => x % 2 == 0); // it filters which number divided 2

//first method for get element with index

console.log(grades[0]); //get first element
console.log(grades[1]); //get second element

//second method for get element with index

console.log(grades.at(0)); //get first element
console.log(grades.at(1)); //get second element
