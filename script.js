// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Animasi fade-in untuk setiap bagian
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('fade-in');
    });

    // Menambahkan tombol mode gelap
    const body = document.body;
    const darkModeButton = document.createElement('button');
    darkModeButton.className = 'dark-mode-toggle';
    darkModeButton.innerHTML = '🌙';
    darkModeButton.title = 'Toggle Dark Mode';
    document.body.appendChild(darkModeButton);

    // Fungsi toggle mode gelap
    darkModeButton.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            darkModeButton.innerHTML = '☀️';
            localStorage.setItem('darkMode', 'enabled');
        } else {
            darkModeButton.innerHTML = '🌙';
            localStorage.setItem('darkMode', 'disabled');
        }
    });


    // Memeriksa preferensi mode gelap yang tersimpan
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        darkModeButton.innerHTML = '☀️';
    }

    // Menambahkan highlight untuk navigasi aktif
    const navLinks = document.querySelectorAll('nav a');
    
    function highlightNav() {
        const scrollPos = window.scrollY;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // Tambahkan class active pada CSS
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule('nav a.active { background-color: #3498db; }', styleSheet.cssRules.length);
    
    window.addEventListener('scroll', highlightNav);
    highlightNav(); // Panggil fungsi saat halaman dimuat
    
    // Menambahkan form kontak
    const contactSection = document.getElementById('contact');
    const formHTML = `
        <form class="contact-form" id="contactForm">
            <input type="text" placeholder="Nama" required>
            <input type="email" placeholder="Email" required>
            <textarea rows="5" placeholder="Pesan" required></textarea>
            <button type="submit">Kirim Pesan</button>
        </form>
        <div id="formMessage" style="margin-top: 15px;"></div>
    `;
    
    // Masukkan form sebelum paragraf kontak
    const contactParagraphs = contactSection.querySelectorAll('p');
    contactSection.insertAdjacentHTML('afterbegin', formHTML);
    
    // Handle form submission
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        formMessage.innerHTML = 'Terima kasih! Pesan Anda telah dikirim.';
        formMessage.style.color = '#4CAF50';
        contactForm.reset();
        
        // Reset pesan setelah 3 detik
        setTimeout(() => {
            formMessage.innerHTML = '';
        }, 3000);
    });
    
    // Efek hover untuk gambar gallery
    const galleryImages = document.querySelectorAll('#gallery img');
    galleryImages.forEach(img => {
        img.addEventListener('mouseover', function() {
            this.style.cursor = 'pointer';
        });
        
        img.addEventListener('click', function() {
            // Membuat modal untuk melihat gambar lebih besar
            const modal = document.createElement('div');
            modal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0,0,0,0.9);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 1000;
                cursor: pointer;
            `;
            
            const modalImg = document.createElement('img');
            modalImg.src = this.src;
            modalImg.style.cssText = `
                max-width: 90%;
                max-height: 90%;
                border: 3px solid white;
                border-radius: 5px;
            `;
            
            modal.appendChild(modalImg);
            document.body.appendChild(modal);
            
            modal.addEventListener('click', function() {
                document.body.removeChild(modal);
            });
        });
    });

    // Efek smooth scroll untuk navigasi
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });
});