document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // CTA button smooth scroll
    const ctaButtons = document.querySelectorAll('.cta-button[href^="#"]');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Animate products on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all product cards
    const productCards = document.querySelectorAll('.produto');
    productCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Observe differentials
    const differentials = document.querySelectorAll('.diferencial');
    differentials.forEach(differential => {
        differential.style.opacity = '0';
        differential.style.transform = 'translateY(20px)';
        differential.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(differential);
    });

    // Mobile menu toggle (if needed later)
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav ul');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Add active class to current section in navigation
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('nav a');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const rate = scrolled * -0.5;
        
        if (hero) {
            hero.style.transform = `translateY(${rate}px)`;
        }
    });

    // Configuração do EmailJS
    (function(){
        // Substitua com suas credenciais do EmailJS
        emailjs.init("mW5w7L67WpvYL87Ec"); // Substitua com sua chave pública
    })();

    // Função para enviar o formulário
    const form = document.getElementById('orcamento-form');
    const btnText = document.querySelector('.btn-text');
    const btnLoading = document.querySelector('.btn-loading');
    const enviarBtn = document.getElementById('enviar-btn');
    const successMessage = document.getElementById('form-success');
    const errorMessage = document.getElementById('form-error');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // Mostrar loading
            btnText.style.display = 'none';
            btnLoading.style.display = 'inline-flex';
            enviarBtn.disabled = true;

            // Esconder mensagens anteriores
            successMessage.style.display = 'none';
            errorMessage.style.display = 'none';

            // Coletar dados do formulário
            const formData = new FormData(form);
            const templateParams = {
                nome: formData.get('nome'),
                empresa: formData.get('empresa') || 'Não informado',
                email: formData.get('email'),
                telefone: formData.get('telefone'),
                produto: formData.get('produto'),
                quantidade: formData.get('quantidade') || 'Não informado',
                mensagem: formData.get('mensagem') || 'Não informado',
                prazo: formData.get('prazo') || 'Não informado',
                data: new Date().toLocaleDateString('pt-BR'),
                hora: new Date().toLocaleTimeString('pt-BR')
            };

            // Enviar email via EmailJS
            emailjs.send('service_fxrj1lw', 'template_i5vx3gb', templateParams)
                .then(function(response) {
                    console.log('Email enviado com sucesso!', response);
                    
                    // Mostrar mensagem de sucesso
                    successMessage.style.display = 'block';
                    form.reset();
                    
                    // Scroll para a mensagem de sucesso
                    successMessage.scrollIntoView({ behavior: 'smooth' });
                    
                }, function(error) {
                    console.error('Erro ao enviar email:', error);
                    
                    // Mostrar mensagem de erro
                    errorMessage.style.display = 'block';
                    
                    // Scroll para a mensagem de erro
                    errorMessage.scrollIntoView({ behavior: 'smooth' });
                })
                .finally(function() {
                    // Restaurar botão
                    btnText.style.display = 'inline';
                    btnLoading.style.display = 'none';
                    enviarBtn.disabled = false;
                });
        });
    }

    // Função para máscara de telefone
    const telefoneInput = document.getElementById('telefone');
    
    if (telefoneInput) {
        telefoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            
            if (value.length >= 11) {
                value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
            } else if (value.length >= 10) {
                value = value.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
            } else if (value.length >= 6) {
                value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
            } else if (value.length >= 2) {
                value = value.replace(/(\d{2})(\d{0,5})/, '($1) $2');
            }
            
            e.target.value = value;
        });
    }
});