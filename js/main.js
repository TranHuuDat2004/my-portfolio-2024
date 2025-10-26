document.addEventListener('DOMContentLoaded', () => {

            // --- PHẦN 1: LOGIC CHUYỂN NGÔN NGỮ (ĐÃ CẬP NHẬT) ---

            const translations = {
                "en": {
                    "metaDescription": "Personal Portfolio of Tran Huu Dat - Web Developer",
                    "navHome": "Home",
                    "navResume": "Resume",
                    "navProjects": "Projects",
                    "navContact": "Contact",
                    "headerBadge": "Web Development · Full-Stack · Mobile",
                    "headerGreeting": "Hello, I'm",
                    "headerDescription": "A passionate Software Engineering student specializing in web and mobile application development, always eager to learn new technologies and contribute to innovative projects.",
                    "btnMyResume": "My Resume",
                    "btnMyProjects": "My Projects",
                    "skillsTitle": "My Skills",
                    "softSkills": "Soft Skills",
                    "skillProblemSolving": "Problem Solving",
                    "skillTeamwork": "Teamwork & Collaboration",
                    "skillCommunication": "Effective Communication",
                    "skillAdaptability": "Adaptability & Learning",
                    "skillAttentionDetail": "Attention to Detail",
                    "skillTimeManagement": "Time Management",
                    "proSkills": "Professional Skills",
                    "generalExpertise": "General Expertise",
                    "skillWebDev": "Web Development",
                    "skillMobileDev": "Mobile Development",
                    "skillUiUx": "UI/UX Design Principles",

                    "skillAttentionDetail": "Attention to Detail",
                    "toolsTitle": "Tools",
                    "designSoftware": "Design Software",
                    "techStack": "Technical Stack",
                    "githubProjectsTitle": "My Projects on GitHub",
                    "exploreMoreProjects": "Explore more of my projects in the Repositories tab.",
                    "aboutMeTitle": "About Me",
                    "aboutMeIntro": "I am Tran Huu Dat, a dedicated software engineering student at Ton Duc Thang University.",
                    "aboutMeDetails": "Passionate about creating efficient and user-friendly web and mobile solutions. I enjoy tackling challenging problems and continuously expanding my skill set in the ever-evolving world of technology. My goal is to leverage my technical abilities to build impactful applications and contribute to meaningful projects. Currently seeking opportunities to apply my knowledge and grow as a professional developer.",
                    "btnNewVersionText": "Explore the New Version",
                    "ready": "Ready for a new look?",
                    // --- CÁC KEY MỚI CHO FOOTER ---
                    "footerTagline": "A passionate Web Developer dedicated to building beautiful and useful applications.",
                    "footerQuickLinks": "Quick Links",
                    "footerConnect": "Connect with Me",
                    "footerCopyright": "Copyright © Tran Huu Dat 2025",
                    "btnAnimation": "Animation Page"

                },
                "vi": {
                    "metaDescription": "Portfolio cá nhân của Trần Hữu Đạt - Lập trình viên Web",
                    "navHome": "Trang chủ",
                    "navResume": "Hồ sơ",
                    "navProjects": "Dự án",
                    "navContact": "Liên hệ",
                    "headerBadge": "Phát triển Web · Full-Stack · Di động",
                    "headerGreeting": "Xin chào, tôi là",
                    "headerDescription": "Một sinh viên Kỹ thuật Phần mềm đầy nhiệt huyết, chuyên về phát triển ứng dụng web và di động, luôn mong muốn học hỏi công nghệ mới và đóng góp vào các dự án sáng tạo.",
                    "btnMyResume": "Hồ sơ của tôi",
                    "btnMyProjects": "Dự án của tôi",
                    "skillsTitle": "Kỹ Năng Của Tôi",
                    "proSkills": "Kỹ Năng Chuyên Môn",
                    "softSkills": "Kỹ năng mềm",
                    "skillProblemSolving": "Giải quyết vấn đề",
                    "skillTeamwork": "Làm việc nhóm & Hợp tác",
                    "skillCommunication": "Giao tiếp Hiệu quả",
                    "skillAdaptability": "Khả năng Thích ứng",
                    "skillAttentionDetail": "Chú ý đến Chi tiết",
                    "skillTimeManagement": "Quản lý Thời gian",
                    "generalExpertise": "Chuyên Môn Chung",
                    "skillWebDev": "Phát triển Web",
                    "skillMobileDev": "Phát triển Di động",
                    "skillUiUx": "Thiết kế UI/UX",
                    "skillAttentionDetail": "Chú ý đến chi tiết",
                    "toolsTitle": "Công Cụ",
                    "designSoftware": "Phần Mềm Thiết Kế",
                    "techStack": "Công Nghệ Sử Dụng",
                    "githubProjectsTitle": "Các Dự Án Của Tôi trên GitHub",
                    "exploreMoreProjects": "Khám phá thêm các dự án của tôi trong tab Kho lưu trữ.",
                    "aboutMeTitle": "Giới thiệu sơ lược về tôi",
                    "aboutMeIntro": "Tôi là Trần Hữu Đạt, một sinh viên kỹ thuật phần mềm tận tâm tại trường Đại học Tôn Đức Thắng.",
                    "aboutMeDetails": "Đam mê tạo ra các giải pháp web và di động hiệu quả và thân thiện với người dùng. Tôi thích giải quyết các vấn đề thách thức và liên tục mở rộng bộ kỹ năng của mình trong thế giới công nghệ không ngừng phát triển. Mục tiêu của tôi là tận dụng khả năng kỹ thuật của mình để xây dựng các ứng dụng có tầm ảnh hưởng và đóng góp vào các dự án ý nghĩa. Hiện đang tìm kiếm cơ hội để áp dụng kiến thức và phát triển như một lập trình viên chuyên nghiệp.",
                    "btnNewVersionText": "Trải nghiệm Trang Web Hoàn Toàn Mới",
                    "ready": "Sẵn sàng cho một giao diện mới?",
                    // --- CÁC KEY MỚI CHO FOOTER ---
                    "footerTagline": "Một lập trình viên Web đam mê xây dựng các ứng dụng đẹp và hữu ích.",
                    "footerQuickLinks": "Liên kết nhanh",
                    "footerConnect": "Kết nối với tôi",
                    "footerCopyright": "Bản quyền © Trần Hữu Đạt 2025",
                    "btnAnimation": " Trang hiệu ứng",
                }
            };

            const languageSwitcher = document.querySelector('.language-switcher');
            const currentFlag = languageSwitcher.querySelector('.current-flag');
            const languageDropdown = languageSwitcher.querySelector('.language-dropdown');

            const setLanguage = (lang) => {
                document.querySelectorAll('[data-translate-key]').forEach(element => {
                    const key = element.getAttribute('data-translate-key');
                    if (translations[lang] && translations[lang][key]) {
                        if (element.tagName === 'META' && element.name === 'description') {
                            element.setAttribute('content', translations[lang][key]);
                        } else {
                            element.innerHTML = translations[lang][key];
                        }
                    }
                });

                document.documentElement.lang = lang;
                const flagImg = document.getElementById('current-flag-img');
                if (lang === 'en') {
                    flagImg.src = 'assets/en.png';
                    flagImg.alt = 'English';
                } else {
                    flagImg.src = 'assets/vn.png';
                    flagImg.alt = 'Tiếng Việt';
                }
                localStorage.setItem('language', lang);
            };

            // **THAY ĐỔI 1: SỰ KIỆN CLICK ĐỂ MỞ/ĐÓNG DROPDOWN**
            currentFlag.addEventListener('click', (event) => {
                event.stopPropagation(); // Ngăn sự kiện click lan ra window
                languageDropdown.classList.toggle('show');
            });

            // **THAY ĐỔI 2: ĐÓNG DROPDOWN KHI CLICK RA NGOÀI**
            window.addEventListener('click', () => {
                if (languageDropdown.classList.contains('show')) {
                    languageDropdown.classList.remove('show');
                }
            });

            // Gắn sự kiện click cho các lựa chọn ngôn ngữ
            document.querySelectorAll('.lang-option').forEach(item => {
                item.addEventListener('click', (event) => {
                    event.preventDefault();
                    const selectedLang = item.getAttribute('data-lang');
                    setLanguage(selectedLang);
                    // **THAY ĐỔI 3: TỰ ĐỘNG ĐÓNG DROPDOWN SAU KHI CHỌN**
                    languageDropdown.classList.remove('show');
                });
            });

            // Tải ngôn ngữ đã lưu khi vào trang
            const savedLang = localStorage.getItem('language') || 'vi';
            setLanguage(savedLang);


            // --- PHẦN 2: LOGIC CURSOR TƯƠNG TÁC (Giữ nguyên) ---
            const cursorElement = document.querySelector('.cursor-element');
            if (cursorElement) { // Chỉ chạy script nếu có phần tử cursor
                const cursorTextElement = cursorElement.querySelector('.cursor-text');
                const gridItems = document.querySelectorAll('.interactive-grid .grid-item');

                const autoTexts = ["Hello!", "I'm Tran Huu Dat", "I'm a Web Developer", "I'm looking for a job", "Thanks for visiting!"];

                function updateCursorPosition(x, y) { /* ... giữ nguyên ... */
                    if (cursorElement.classList.contains('hidden-by-interaction')) {
                        if (cursorElement.style.opacity !== '0') cursorElement.style.opacity = '0';
                        return;
                    }
                    if (cursorElement.style.opacity !== '1' && cursorElement.classList.contains('visible')) {
                        cursorElement.style.opacity = '1';
                    }
                    cursorElement.style.left = x + 'px';
                    cursorElement.style.top = y + 'px';
                    if (!cursorElement.classList.contains('visible')) {
                        cursorElement.classList.add('visible');
                    }
                }
                function changeCursorTextWithFade(newText) { /* ... giữ nguyên ... */
                    if (!cursorTextElement || cursorTextElement.isTextFading || cursorTextElement.textContent === newText) return;
                    cursorTextElement.isTextFading = true;
                    cursorTextElement.classList.add('fade-out');
                    setTimeout(() => {
                        cursorTextElement.textContent = newText;
                        cursorTextElement.classList.remove('fade-out');
                        cursorTextElement.isTextFading = false;
                    }, 300);
                }
                function updateAutoCursorText() { /* ... giữ nguyên ... */
                    let newTextToShow; let isOverGridItem = false; let currentGridItemText = null;
                    if (cursorElement.classList.contains('hidden-by-interaction')) return;
                    const cursorRect = cursorElement.getBoundingClientRect();
                    for (const item of gridItems) {
                        const itemRect = item.getBoundingClientRect();
                        if (cursorRect.right > itemRect.left && cursorRect.left < itemRect.right && cursorRect.bottom > itemRect.top && cursorRect.top < itemRect.bottom) {
                            if (item.dataset.text) { isOverGridItem = true; currentGridItemText = item.dataset.text; break; }
                        }
                    }
                    if (isOverGridItem) { newTextToShow = currentGridItemText; } else {
                        newTextToShow = autoTexts[autoTextCurrentIndex];
                        autoTextCurrentIndex = (autoTextCurrentIndex + 1) % autoTexts.length;
                    }
                    changeCursorTextWithFade(newTextToShow);
                }

                document.addEventListener('mousemove', (e) => updateCursorPosition(e.clientX, e.clientY));
                const interactiveElements = document.querySelectorAll('a, button, input, .form-control, .current-flag');
                interactiveElements.forEach(el => {
                    el.addEventListener('mouseenter', () => cursorElement.classList.add('hidden-by-interaction'));
                    el.addEventListener('mouseleave', () => cursorElement.classList.remove('hidden-by-interaction'));
                });
                if (gridItems.length > 0 && cursorTextElement) {
                    gridItems.forEach(item => {
                        item.addEventListener('mouseenter', () => { if (item.dataset.text) changeCursorTextWithFade(item.dataset.text); });
                    });
                    updateAutoCursorText();
                    setInterval(updateAutoCursorText, 3000);
                }
                setTimeout(() => { if (!cursorElement.classList.contains('hidden-by-interaction')) cursorElement.classList.add('visible'); }, 100);
            }
        });
