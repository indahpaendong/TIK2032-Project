<?php
include 'koneksi.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nama = mysqli_real_escape_string($conn, $_POST['nama']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $pesan = mysqli_real_escape_string($conn, $_POST['pesan']);

    $query = "INSERT INTO kontak (nama, email, pesan) VALUES ('$nama', '$email', '$pesan')";
    if (mysqli_query($conn, $query)) {
        echo "Pesan berhasil dikirim! <a href='index.php'>Kembali</a>";
    } else {
        echo "Terjadi kesalahan: " . mysqli_error($conn);
    }
} else {
    echo "Akses langsung tidak diizinkan.";
}
?>
