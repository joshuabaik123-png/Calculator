const display = document.getElementById("display");

function tambahInput(nilai) {
  display.value += nilai;
}
function clearDisplay() {
  display.value = "";
}

function hitung() {
  let item = display.value;

  if (item === "") {
    alert("silahkan masukkan data");
    return;
  }


  
  try {
    let result = eval(item);

    if (!isFinite(result)) {
      alert("tidak dapat di hitung!");
      clearDisplay();
      return;
    }
    display.value = result;

    console.log(result);
  } catch (error) {
    alert("format tidak valid");
    clearDisplay();
  }
}
