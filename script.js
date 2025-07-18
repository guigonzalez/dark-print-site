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



    // Função para os botões de orçamento dos produtos
    const botoesOrcamento = document.querySelectorAll('.btn-orcamento');
    
    botoesOrcamento.forEach(botao => {
        botao.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Obter o nome do produto do data-produto
            const nomeProduto = this.getAttribute('data-produto');
            
            // Criar mensagem personalizada para WhatsApp
            const mensagem = `Olá! Gostaria de solicitar um orçamento para ${nomeProduto}. Podem me enviar informações sobre preços e prazos?`;
            
            // Codificar a mensagem para URL
            const mensagemCodificada = encodeURIComponent(mensagem);
            
            // Abrir WhatsApp com a mensagem
            const whatsappUrl = `https://wa.me/5511943955747?text=${mensagemCodificada}`;
            window.open(whatsappUrl, '_blank');
        });
    });
});