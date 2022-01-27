function segitiga() {
  var ab = 8;
  var bc = 6;

  console.log("Nilai AB : ", ab);
  console.log("Nilai BC : ", bc);

  var ac = Math.pow(ab, 2) + Math.pow(bc, 2);
  var hasil = Math.sqrt(ac);

  console.log("Panjang sisi AC pada segitiga siku-siku tersebut adalah : ", hasil, " cm");

  return;
}

segitiga();
