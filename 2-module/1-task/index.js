function sumSalary(salaries) {
let sum = 0;
for (const key in salaries){
  if(typeof(salaries[key])==='number' && Number.isFinite(salaries[key]) === true) {
  sum = sum + salaries[key]
  }
}
  return sum;
}