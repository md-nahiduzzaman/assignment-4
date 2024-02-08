function password(obj) {
  if (Object.keys(obj).length === 3 && obj.birthYear.toString().length === 4) {
    let pass = `${obj.siteName}#${obj.name}@${obj.birthYear}`;
    let NewPass = pass[0].toLocaleUpperCase() + pass.slice(1);
    return NewPass;
  } else {
    return "invalid";
  }
}

const myObj1 = { name: "kolimuddin", birthYear: 1999, siteName: "google" };
const myObj2 = { name: "rahat", birthYear: 2002, siteName: "Facebook" };
const myObj3 = { name: "toky", birthYear: 200, siteName: "Facebook" };
const myObj4 = { name: "maisha", birthYear: 2002 };

const output = password(myObj4);
console.log(output);
