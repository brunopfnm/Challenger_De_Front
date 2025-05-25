document.querySelectorAll('.faq-question').forEach(item => {
            item.addEventListener('click', () => {
                const answer = item.nextElementSibling;
                const isActive = item.classList.contains('active');
                document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');
                document.querySelectorAll('.faq-question').forEach(q => q.classList.remove('active'));
                if (!isActive) {
                    item.classList.add('active');
                    answer.style.display = 'block';
                }
            });
        });