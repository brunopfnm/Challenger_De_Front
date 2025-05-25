function mostrarCadastro() {
      document.getElementById("form-login").style.display = "none";
      document.getElementById("form-cadastro").style.display = "flex";
    }

    function mostrarLogin() {
      document.getElementById("form-cadastro").style.display = "none";
      document.getElementById("form-login").style.display = "flex";
    }

    function login() {
      const email = document.getElementById("login-email").value;
      const senha = document.getElementById("login-password").value;
      alert(`Tentativa de login com\nEmail: ${email}\nSenha: ${senha}`);
    }

    function cadastrar() {
      const nome = document.getElementById("cadastro-nome").value;
      const email = document.getElementById("cadastro-email").value;
      const senha = document.getElementById("cadastro-senha").value;
      alert(`Cadastro realizado:\nNome: ${nome}\nEmail: ${email}`);
    }
