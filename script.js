// bagian profil,form,nav
const profilPageEl = document.getElementById("profil-page");
const formPageEl   = document.getElementById("form-page");
// bagian edit dan submit
const editBtnEl    = document.getElementById("edit-btn");
const submitBtntEl = document.getElementById("submit-btn");
// bagian input
const inputNameEL        = document.getElementById("input-name");
const inputRoleEl        = document.getElementById("input-role");
const inputAvailbilityEl = document.getElementById("input-availbility");
const inputUsiaEl        = document.getElementById("input-usia");
const inputLokasiEl      = document.getElementById("input-lokasi");
const inputPenggalamanEl = document.getElementById("input-penggalaman");
const inputEmailEl       = document.getElementById("input-email");
// bagian profil
const nameEl        = document.getElementById("name");
const roleEl        = document.getElementById("role");
const availbilityEl = document.getElementById("availbility");
const usiaEl        = document.getElementById("usia");
const lokasiEl      = document.getElementById("lokasi");
const penggalamanEl = document.getElementById("penggalaman");
const emailEl       = document.getElementById("email");

//Membuat form nya tersebunyi, akan ditampilkan ketika klik edit    
formPageEl.style.display ="none";

//Fungsinya untuk memunculkan from-page 
editBtnEl.addEventListener("click", function(){
     profilPageEl.style.display ="none";
     formPageEl.style.display ="block";

});
//fungsinya untuk menampilkan data pada profil-page
submitBtntEl.addEventListener("click", function(){
    profilPageEl.style.display ="block";
    formPageEl.style.display ="none";

        console.log(inputNameEL.value);
        nameEl.textContent = inputNameEL.value;
        console.log(inputRoleEl.value);
        roleEl.textContent = inputRoleEl.value;
        console.log(inputAvailbilityEl.value);
        availbilityEl.textContent = inputAvailbilityEl.value;
        console.log(inputUsiaEl.value);
        usiaEl.textContent = inputUsiaEl.value;
        lokasiEl.textContent = inputLokasiEl.value;
        penggalamanEl.textContent = inputPenggalamanEl.value;
        emailEl.textContent = inputEmailEl.value;
 });

