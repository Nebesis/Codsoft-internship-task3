let cinput = "";
let res = document.getElementById("res");

function display(value){
  cinput += value;
  res.innerText = cinput;
}
function clearDisplay() {
  cinput = "";
  res.innerText = "0";
}

function result(){
  try{
    let ans = eval(cinput);
    res.innerText = ans;
    cinput = ans;
    }
    catch(error){
      res.innerText = "Error";
    }
}