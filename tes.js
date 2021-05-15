// menghubungkan form inputan melalui id
var nama = document.getElementById("nama");
var email = document.getElementById("email");
var tlp = document.getElementById("tlp");
var paket = document.getElementById("paket");
var konfir = document.getElementById("konfir");

// menghubungkan tempat teks error dengan id
var errorNama = document.getElementById("error_nama");
var errorEmail = document.getElementById("error_email");
var errorTlp = document.getElementById("error_tlp");
var errorPaket = document.getElementById("error_paket");
var errorKonfir = document.getElementById("error_konfir");

// validasi per input
function validasinama() {
	// pengecekan apa inputan kosong atau tidak
	if (nama.value == "") {
		// apabila kosong akan mengganti style dari kotaknya jadi berwarna merah
		nama.style.border = '1px solid red';
		// menampilkan teks error di div yang sudah disiapkan
		errorNama.textContent = "(nama wajib diisi)";
		return false;
	} else {
		// pengecekan apakah inputan hanya berupa string
		// for utk mengambil nilai string sesuai indeks
		for (var i = 0; i <= nama.value.length; i++) {
			// keterangan regex : A-Z = huruf besar dari a sampai z, a-z = huruf kecil, \s = spasi
			const patt =  /^[A-Za-z\s]+$/g;
			// pengecekan apakah variabel nama sudah sesuai dengan regex
			if (patt.test(nama.value[i])==false) {
				// membuat style agar kotaknya berwarna merah
				nama.style.border = '1px solid red';
				// menampilkan teks error
				errorNama.textContent = "(nama hanya berupa huruf)";
				return false;
			};
		};
	};
	// jika inputan sudah benar kotaknya akan berwarna hitam
	nama.style.border = '1px solid black';
	// teks error hanya akan berupa spasi
	errorNama.innerHTML= "&nbsp;";
	return true;
};

function validasiemail() {
	// pengecekan apa inputan kosong atau tidak
	if (email.value == "") {
		// apabila kosong akan mengganti style dari kotaknya jadi berwarna merah
		email.style.border = '1px solid red';
		// menampilkan teks error di div yang sudah disiapkan
		errorEmail.textContent = "(email wajib diisi)";
		return false;
	} else {
		// keterangan regex (misal contoh 190411100143@student.trunojoyo.ac.id)
		// [a-zA-Z0-9_.] = hanya boleh berupa huruf kecil, huruf besar, angka, garis bawah, titik (bagian 190411100143)
		// @[a-zA-Z.]= harus diawali tanda @ yang kemudian diikuti huruf besar,huruf kecil,titik (bagian @student.trunojoyo)
		// \.[a-zA-Z.]{2,6} = harus diawali . lalu diikuti huruf besar, huruf kecil sebanyak minimal 2 maksimal 6 (bagian .ac.id)
		const patt =  /^[a-zA-Z0-9_.]+@[a-zA-Z.]+\.[a-zA-Z.]{2,6}$/igm;
		// pengecekan apakah inputan sudah berbentuk email dengan regex
		if (patt.test(email.value)==false) {
			// membuat style agar kotaknya berwarna merah
			email.style.border = '1px solid red';
			// menampilkan teks error
			errorEmail.textContent = "(Email tidak valid)";
			return false;
		};
	};
	// jika inputan sudah benar kotaknya akan berwarna hitam
	email.style.border = '1px solid black';
	// teks error hanya akan berupa spasi
	errorEmail.innerHTML= "&nbsp;";
	return true;
};

function validasitlp() {
	// pengecekan apa inputan kosong atau tidak
	if (tlp.value == "") {
		// membuat style agar kotaknya berwarna merah
		tlp.style.border = '1px solid red';
		// menampilkan teks error
		errorTlp.textContent = "(nomor telepon wajib diisi)";
		return false;
	} else {
		// (^\+62 | 0) = harus diawali +62 atau 0
		// (\d{10,11}) lalu diikuti angka sebanyak minimal 10 maksimal 11
		const patt =  /^(^\+62|^0)(\d{10,11})$/g;
		if (patt.test(tlp.value)==false) {
			// membuat style agar kotaknya berwarna merah
			tlp.style.border = '1px solid red';
			// menampilkan teks error
			errorTlp.textContent = "(nomor tidak valid)";
			return false;
		};
	};
	// jika inputan sudah benar kotaknya akan berwarna hitam
	tlp.style.border = '1px solid black';
	// teks error hanya akan berupa spasi
	errorTlp.innerHTML= "&nbsp;";
	return true;
};

function validasipaket() {
	// pengecekan apakah sudah memilih list drop down
	if (paket.value == "pilih") {
		// membuat style agar kotaknya berwarna merah
		paket.style.border = '1px solid red';
		// menampilkan teks error
		errorPaket.textContent = "(pilih paket terlebih dahulu)";
		return false;
	};
	// jika inputan sudah benar kotaknya akan berwarna hitam
	paket.style.border = '1px solid black';
	// teks error hanya akan berupa spasi
	errorPaket.innerHTML= "&nbsp;";
	return true;
};

function validasikonfir() {
	// pengecekan apakan checkbox konfir sudah di klik atau belum
	if (konfir.checked == false) {
		// menampilkan teks error
		errorKonfir.textContent = "(anda harus menyetujui syarat dan ketentuan)";
		return false;
	}else {
		// mengganti isi dari teks error menjadi hanya spasi 
		errorKonfir.innerHTML= "&nbsp;";
		return true;
	};
};

// menjalankan validasi
function validasi() {
	// menjalankan semua function terlebih dahulu untuk menampilkan teks error
	validasinama();
	validasiemail();
	validasitlp();
	validasipaket();
	validasikonfir();

	// menjalankan pengecekan setiap function
	if (validasinama() && validasiemail() && validasitlp() && validasipaket() && validasikonfir() == true) {
		return true;
	}else {
		return false;
	}
};