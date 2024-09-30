// Dynamic Padding Adjustment
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const sections = document.querySelectorAll('section');

    const adjustPadding = () => {
        const headerHeight = header.offsetHeight;
        const footerHeight = footer.offsetHeight;

        sections.forEach(section => {
            section.style.paddingTop = `${headerHeight + 20}px`;
            section.style.paddingBottom = `${footerHeight + 20}px`;
        });
    };

    adjustPadding();

    window.addEventListener('resize', adjustPadding);

    // Skill Bar Animation
    const skillLevels = document.querySelectorAll('.skill-level');

    skillLevels.forEach(skill => {
        const level = skill.getAttribute('data-skill-level');
        skill.style.width = level;
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('nav ul');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
