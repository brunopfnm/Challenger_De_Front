function handleClick(event) {
      event.preventDefault();
      alert('Esta é uma demonstração com dados fictícios!');
    }
    document.querySelectorAll('.social a').forEach(link => {
      link.addEventListener('click', handleClick);
    });