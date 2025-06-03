<?php
$host = "localhost";
$user = "root"; // ganti jika pakai user lain
$pass = "";     // ganti jika pakai password
$db   = "website_sederhana";

$conn = mysqli_connect($host, $user, $pass, $db);

if (!$conn) {
    die("Koneksi gagal: " . mysqli_connect_error());
}
?>
