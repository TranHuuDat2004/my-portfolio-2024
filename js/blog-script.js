// File: assets/blog-script.js
// Phiên bản script rút gọn, chỉ dành cho các trang blog.

document.addEventListener('DOMContentLoaded', () => {

    // ======================================================
    // --- 1. LOGIC CHO HEADER & THANH TIẾN TRÌNH ---
    // ======================================================
    const header = document.querySelector('.main-header');
    const progressBar = document.querySelector('.scroll-progress-bar');

    // AN TOÀN: Kiểm tra xem các phần tử có tồn tại không trước khi xử lý
    if (header) {
        // Trên trang blog, chúng ta muốn header hiện ra ngay lập tức
        // thay vì phải chờ cuộn chuột.
        header.classList.add('visible');
    }

    // Theo dõi sự kiện cuộn trang để cập nhật thanh tiến trình
    window.addEventListener('scroll', () => {
        if (progressBar) {
            const totalHeight = document.body.scrollHeight - window.innerHeight;
            // Tránh chia cho 0 nếu trang không có thanh cuộn
            const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
            progressBar.style.width = `${progress}%`;
        }
    });


    // ======================================================
    // --- 2. LOGIC CHO NÚT CHUYỂN LIGHT/DARK THEME ---
    // ======================================================
    const themeToggleBtn = document.getElementById('theme-toggle');

    if (themeToggleBtn) {
        // Lấy theme đã lưu từ lần truy cập trước (nếu có)
        const currentTheme = localStorage.getItem('theme');

        // Áp dụng theme đã lưu khi tải trang
        if (currentTheme) {
            document.body.classList.add(currentTheme);
        }

        // Gắn sự kiện click cho nút chuyển theme
        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');

            // Lưu lựa chọn theme vào localStorage để nhớ cho lần sau
            let theme = document.body.classList.contains('light-mode') ? 'light-mode' : 'dark-mode';
            localStorage.setItem('theme', theme);
        });
    }

}); // <-- Kết thúc sự kiện DOMContentLoaded