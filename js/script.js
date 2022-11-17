function validasi() {
    var nama = document.getElementById("nama").value;
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
        if ( nama != "" && username !="" && email!="" && password !="" ) {
        return true;
    }else{
        alert('Anda harus mengisi data dengan lengkap !');
    }
}