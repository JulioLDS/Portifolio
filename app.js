document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("[data-form]");
    const button = document.querySelector("[data-button]");
    const contactTitle = document.querySelector(".contact"); // Referência ao título "Contato"
  
    if (form && button) {
      form.addEventListener("submit", async (event) => {
        event.preventDefault(); // Impede o envio padrão do formulário
  
        // Desabilita o botão e exibe o estado "Enviando..."
        button.disabled = true;
        button.innerText = "Enviando...";
  
        try {
          const formData = new FormData(form); // Captura os dados do formulário
          const response = await fetch(form.action, {
            method: form.method,
            body: formData,
          });
  
          if (response.ok) {
            // Exibe mensagem de sucesso
            form.innerHTML = `<h1 class="success">Mensagem enviada com sucesso!</h1>`;
            
            // Oculta o título "Contato"
            if (contactTitle) {
              contactTitle.style.display = "none";
            }
          } else {
            throw new Error("Erro ao enviar o formulário.");
          }
        } catch (error) {
          // Exibe mensagem de erro
          form.innerHTML = `<h1 class="error">Não foi possível enviar sua mensagem. Tente novamente mais tarde.</h1>`;
          console.error(error);
        } finally {
          // Reabilita o botão (caso precise reusar o formulário)
          button.disabled = false;
          button.innerText = "Enviar";
        }
      });
    }
  });