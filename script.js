<script>
        // Back to Top Button
        const backToTopButton = document.querySelector('.back-to-top');
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('active');
            } else {
                backToTopButton.classList.remove('active');
            }
        });
        
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Mobile Menu Toggle
        const mobileMenuButton = document.querySelector('.mobile-menu');
        const navLinks = document.querySelector('.nav-links');
        
        mobileMenuButton.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });
        
        // Smooth Scrolling for Anchor Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    if (window.innerWidth <= 768) {
                        navLinks.style.display = 'none';
                    }
                }
            });
        });
        
        // Auth Modal
        const authModal = document.getElementById('auth-modal');
        const loginButton = document.getElementById('login-btn');
        const closeModalButton = document.querySelector('.close-modal');
        const toggleAuthModal = document.getElementById('toggle-auth-modal');
        const authModalTitle = document.getElementById('auth-modal-title');
        const authSubmitButton = document.getElementById('auth-submit');
        
        let isLogin = true;
        
        loginButton.addEventListener('click', (e) => {
            e.preventDefault();
            authModal.classList.add('active');
        });
        
        closeModalButton.addEventListener('click', () => {
            authModal.classList.remove('active');
        });
        
        toggleAuthModal.addEventListener('click', (e) => {
            e.preventDefault();
            isLogin = !isLogin;
            
            if (isLogin) {
                authModalTitle.textContent = 'Login';
                authSubmitButton.textContent = 'Login';
                toggleAuthModal.innerHTML = 'New user? <a href="#">Sign up</a>';
            } else {
                authModalTitle.textContent = 'Sign Up';
                authSubmitButton.textContent = 'Create Account';
                toggleAuthModal.innerHTML = 'Already have an account? <a href="#">Login</a>';
            }
        });
        
        authSubmitButton.addEventListener('click', () => {
            const username = document.getElementById('modal-username').value;
            const password = document.getElementById('modal-password').value;
            
            if (isLogin) {
                // Login logic
                alert(`Welcome back, ${username}!`);
            } else {
                // Signup logic
                alert(`Account created for ${username}!`);
            }
            
            authModal.classList.remove('active');
        });
        
        // Close modal when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target === authModal) {
                authModal.classList.remove('active');
            }
        });
        
        // Animation on scroll
        const animateElements = document.querySelectorAll('.animate');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fadeInUp');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });
        
        animateElements.forEach(element => {
            observer.observe(element);
        });

        // Language Selector
        const languageBtn = document.getElementById('language-btn');
        const languageDropdown = document.getElementById('language-dropdown');
        const languageOptions = document.querySelectorAll('.language-option');
        
        languageBtn.addEventListener('click', () => {
            languageDropdown.classList.toggle('show');
        });
        
        languageOptions.forEach(option => {
            option.addEventListener('click', () => {
                const lang = option.getAttribute('data-lang');
                // Change language (in a real app, you would implement translation here)
                languageBtn.querySelector('span').textContent = option.querySelector('span').textContent;
                languageDropdown.classList.remove('show');
                
                // Show selected language
                languageOptions.forEach(opt => {
                    opt.querySelector('i').style.visibility = 'hidden';
                });
                option.querySelector('i').style.visibility = 'visible';
            });
        });
        
        // Close language dropdown when clicking outside
        window.addEventListener('click', (e) => {
            if (!e.target.closest('.language-selector')) {
                languageDropdown.classList.remove('show');
            }
        });


     </script>
