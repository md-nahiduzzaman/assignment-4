function password(obj) {
  if (Object.keys(obj).length === 3 && obj.birthYear.toString().length === 4) {
    let pass = `${obj.siteName}#${obj.name}@${obj.birthYear}`;
    let NewPass = pass[0].toLocaleUpperCase() + pass.slice(1);
    return NewPass;
  } else {
    return "invalid";
  }
}

const myObj = {
  name: "rahat",
  birthYear: 2002,
  siteName: "Facebook",
};

const output = password(myObj);
console.log(output);
