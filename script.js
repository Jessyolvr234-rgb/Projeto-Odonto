
document.addEventListener("DOMContentLoaded", function () {
  // ========================================
  // 1. ATUALIZAR O ANO DO RODAPÉ
  // ========================================

  const ano = document.querySelector("#ano");

  if (ano) {
    ano.textContent = new Date().getFullYear();
  }

  // ========================================
  // 2. MENU MOBILE
  // ========================================

  const menuToggle = document.querySelector("#menu-toggle");
  const menu = document.querySelector("#menu");

  if (menuToggle && menu) {
    const linksMenu = menu.querySelectorAll("a");

    linksMenu.forEach(function (link) {
      link.addEventListener("click", function () {
        menuToggle.checked = false;
      });
    });

    menuToggle.addEventListener("change", function () {
      menuToggle.setAttribute(
        "aria-expanded",
        String(menuToggle.checked)
      );
    });
  }

  // ========================================
  // 3. ANIMAÇÕES AO ROLAR A PÁGINA
  // ========================================

  const elementos = document.querySelectorAll(".revelar");

  if ("IntersectionObserver" in window) {
    const observador = new IntersectionObserver(
      function (entradas, observadorAtual) {
        entradas.forEach(function (entrada) {
          if (entrada.isIntersecting) {
            entrada.target.classList.add("visivel");
            observadorAtual.unobserve(entrada.target);
          }
        });
      },
      {
        threshold: 0.12
      }
    );

    elementos.forEach(function (elemento) {
      observador.observe(elemento);
    });
  } else {
    // Exibe os elementos em navegadores antigos.
    elementos.forEach(function (elemento) {
      elemento.classList.add("visivel");
    });
  }

  // ========================================
  // 4. IMPEDIR AGENDAMENTO EM DATA PASSADA
  // ========================================

  const campoData = document.querySelector("#data");

  if (campoData) {
    const hoje = new Date();
    const anoAtual = hoje.getFullYear();
    const mesAtual = String(hoje.getMonth() + 1).padStart(2, "0");
    const diaAtual = String(hoje.getDate()).padStart(2, "0");

    campoData.min = `${anoAtual}-${mesAtual}-${diaAtual}`;
  }

  // ========================================
  // 5. FORMULÁRIO DE AGENDAMENTO PELO WHATSAPP
  // ========================================

  const formulario = document.querySelector("#formAgendamento");
  const mensagem = document.querySelector("#mensagemAgendamento");

  if (formulario && mensagem) {
    formulario.addEventListener("submit", function (evento) {
      evento.preventDefault();

      const nome = document.querySelector("#nome")?.value.trim() || "";
      const telefone =
        document.querySelector("#telefone")?.value.trim() || "";
      const tratamento =
        document.querySelector("#tratamento")?.value || "";
      const data = document.querySelector("#data")?.value || "";
      const periodo =
        document.querySelector("#periodo")?.value || "";
      const observacoes =
        document.querySelector("#observacoes")?.value.trim() || "";

      const consentimento =
        document.querySelector("#consentimento");

      // Verifica os campos obrigatórios.
      if (!nome || !telefone || !tratamento || !data || !periodo) {
        mensagem.textContent =
          "Preencha todos os campos obrigatórios para continuar.";
        return;
      }

      // Verifica se o usuário aceitou o aviso de privacidade.
      if (consentimento && !consentimento.checked) {
        mensagem.textContent =
          "Leia e aceite o aviso de privacidade para continuar.";
        consentimento.focus();
        return;
      }

      // Confere se a data escolhida não ficou no passado.
      const dataEscolhida = new Date(`${data}T00:00:00`);
      const dataMinima = campoData?.min
        ? new Date(`${campoData.min}T00:00:00`)
        : null;

      if (dataMinima && dataEscolhida < dataMinima) {
        mensagem.textContent =
          "Escolha uma data igual ou posterior a hoje.";
        return;
      }

      const dataFormatada = data.split("-").reverse().join("/");

      const texto = `Olá! Gostaria de solicitar um agendamento na Implantare Odontologia.

Nome: ${nome}
WhatsApp: ${telefone}
Tratamento desejado: ${tratamento}
Data preferida: ${dataFormatada}
Período preferido: ${periodo}
Observações: ${observacoes || "Nenhuma"}

Entendo que a data e o horário precisam ser confirmados pela clínica. Aguardo o retorno.`;

      // IMPORTANTE: substitua pelo WhatsApp oficial da clínica.
      // Use o código do Brasil (55), DDD e número, sem espaços.
      const whatsappClinica = "5583999999999";

      const linkWhatsApp =
        `https://wa.me/${whatsappClinica}?text=${encodeURIComponent(texto)}`;

      mensagem.textContent =
        "Estamos abrindo o WhatsApp. Confira os dados e envie a mensagem para solicitar seu agendamento.";

      window.open(linkWhatsApp, "_blank", "noopener,noreferrer");
    });
  }
});
