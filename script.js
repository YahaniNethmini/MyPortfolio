const menuIcon = document.getElementById('menuIcon');
const navLinks = document.getElementById('navLinks');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const roles = document.querySelectorAll('.role');
        let currentRole = 0;

        function showRole() {
            if (currentRole < roles.length) {
                const role = roles[currentRole];
                role.classList.remove('hidden');

                const typingSpan = role.querySelector('.typing');

                typingSpan.style.animation = `typing ${typingSpan.textContent.length / 10}s steps(${typingSpan.textContent.length}) forwards, blink 0.5s step-end infinite`;

                currentRole++;
                setTimeout(showRole, typingSpan.textContent.length * 100 + 2000); // Adjust delay based on text length + additional pause
            }
        }

        window.onload = showRole;