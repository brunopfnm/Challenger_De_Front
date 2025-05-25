function showResponse() {
            const input = document.getElementById('chatInput').value;
            const response = document.getElementById('responseText');
            if (input.trim() !== '') {
                response.style.display = 'block';
                response.textContent = 'Você digitou: "' + input + '". Como posso ajudar com isso?';
            } else {
                response.style.display = 'block';
                response.textContent = 'Por favor, digite algo para que eu possa ajudar!';
            }
        }

        document.getElementById('chatInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                showResponse();
            }
        });