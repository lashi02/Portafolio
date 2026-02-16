// Inicializar iconos de Lucide
lucide.createIcons();

// Menú móvil
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

let isMenuOpen = false;

function openMenu() {
    isMenuOpen = true;
    // Mostrar overlay y menú
    mobileMenuOverlay.classList.remove('hidden');
    mobileMenu.classList.remove('hidden');
    
    // Forzar reflow para que la animación funcione
    mobileMenu.offsetHeight;
    
    // Animar desde la derecha
    setTimeout(() => {
        mobileMenu.classList.remove('translate-x-full');
        mobileMenuOverlay.classList.add('opacity-100');
    }, 10);
    
    // Prevenir scroll del body cuando el menú está abierto
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    isMenuOpen = false;
    
    // Animar hacia la derecha (ocultar)
    mobileMenu.classList.add('translate-x-full');
    mobileMenuOverlay.classList.remove('opacity-100');
    
    // Esperar a que termine la animación antes de ocultar
    setTimeout(() => {
        mobileMenu.classList.add('hidden');
        mobileMenuOverlay.classList.add('hidden');
    }, 300);
    
    // Restaurar scroll del body
    document.body.style.overflow = '';
}

mobileMenuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    if (isMenuOpen) {
        closeMenu();
    } else {
        openMenu();
    }
});

// Cerrar menú al hacer clic en el overlay
mobileMenuOverlay.addEventListener('click', () => {
    closeMenu();
});

// Cerrar menú móvil al hacer clic en un enlace
const mobileMenuLinks = mobileMenu.querySelectorAll('a');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeMenu();
    });
});

// Efecto de scroll suave para los links de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
