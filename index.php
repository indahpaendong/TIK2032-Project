<?php include 'koneksi.php'; ?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Website Sederhana</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Navigasi -->
    <nav>
        <a href="#home">Home</a> | 
        <a href="#gallery">Gallery</a> | 
        <a href="#blog">Blog</a> | 
        <a href="#contact">Contact</a>
    </nav>

    <!-- Home -->
    <section id="home">
        <h1>Selamat Datang di Website Saya</h1>
        <p>Ini adalah halaman utama dari website sederhana ini.</p>
    </section>

    <hr>

    <!-- Gallery -->
    <section id="gallery">
        <h2>Gallery</h2>
        <p>Berikut adalah kumpulan foto:</p>
        <img src="81d54bc0b4f2c99674164b0e85a9075a.jpg" alt="Gambar 1" width="200">
        <img src="b8c0992b5fb4f2056be2ef9bcc707106 (1).jpg" alt="Gambar 2" width="200">
        <img src="f6d4e203f3d898b06d92d252ff5512b0.jpg" alt="Gambar 3" width="200">
    </section>

    <hr>

    <!-- Blog -->
    <section id="blog">
        <h2>Blog</h2>
        <?php
        $query = mysqli_query($conn, "SELECT * FROM blog ORDER BY id DESC");
        while($row = mysqli_fetch_assoc($query)) {
            echo "<article>";
            echo "<h3>" . htmlspecialchars($row['judul']) . "</h3>";
            echo "<p>" . htmlspecialchars($row['konten']) . "</p>";
            echo "</article>";
        }
        ?>
    </section>

    <hr>

    <!-- Contact -->
    <section id="contact">
        <h2>Contact</h2>
        <p>Email: indahpaendong2005@email.com</p>
        <p>Instagram : Indahprsla_</p>
    </section>

    <script src="script.js" defer></script>
</body>
</html>
