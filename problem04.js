function password(obj) {
  //write your code here
  //console.log(Object.keys(obj).length);
  // console.log(obj.birthYear.toString());
  if (Object.keys(obj).length === 3 && obj.birthYear.toString().length === 4) {
    let pass = `${obj.siteName}#${obj.name}@${obj.birthYear}`;
    let NewPass = pass[0].toLocaleUpperCase() + pass.slice(1);
    return NewPass;
  } else {
    return "invalid";
  }
}

const myObj = {
  name: "yahya",
  birthYear: 2202,
  siteName: "google",
};

const output = password(myObj);
console.log(output);
