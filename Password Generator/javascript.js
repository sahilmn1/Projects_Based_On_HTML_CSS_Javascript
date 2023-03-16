const upperset ="ABCDEFGHIJKLMNOPQRSUVWXYZ"
const lowerset ="abcdefghijklmnopqrstvwxyz"
const number ="1234567890"
const Special ="~!@#$%^*()_+"
// selectors

const pasbox =document.getElementById("input-boder");

const total = document.getElementById("total-char");
const uppercase =document.getElementById("upper");
const lower =document.getElementById("lower");
const numeric =document.getElementById("numeric");

const specialchar =document.getElementById("specialchar");

const getRandomData =(Dataset) => {
    return Dataset[Math.floor(Math.random() * Dataset.length)]
}

const GeneratePassword = (password ="") => {
    if(uppercase.checked){
        password += getRandomData(upperset);
    }
    if(lower.checked){
        password +=getRandomData(lowerset);
    }
    if(numeric.checked){
        password +=getRandomData(number);
    }

    if(specialchar.checked){
        password +=getRandomData(Special);
    }


    if(password.length < total.value){
        return GeneratePassword(password);
    
    }
    pasbox.value = truncateString(password, total.value);

}


GeneratePassword();

document.getElementById("btnn").addEventListener("click",function() {
    GeneratePassword();
}
);

function truncateString(str, num) {
    if (str.length > num) {
      let subStr =str.substring(0, num);
      return subStr;
    } else {
      return str;
    }
}