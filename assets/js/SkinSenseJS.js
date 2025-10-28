// Formulário
    const form = document.querySelector('#leadForm');
    const feedback = document.querySelector('#leadFeedback');
  
    form.addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.querySelector('#leadName').value.trim();
    const email = document.querySelector('#leadEmail').value.trim();
  
    // verifica campos obrigatórios
    if(!name || !email){
      feedback.style.display = 'block';
      feedback.innerHTML = '<div class="text-danger small">Por favor preencha nome e e-mail.</div>';
      return;
    }
  
    // alerta quando todos os campos obrigatórios estão preenchidos
    alert('Obrigado! Todos os campos obrigatórios foram preenchidos.');
  
    feedback.style.display = 'flex';
    feedback.innerHTML = '<div class="spinner-border text-purple me-2" role="status" style="width:18px;height:18px;border-width:2px"></div><div class="mini">Enviando... </div>';
    setTimeout(()=> {
      feedback.innerHTML = '<div class="success-badge">✓ Inscrição recebida — vamos te enviar novidades!</div>';
      form.reset();
      setTimeout(()=> feedback.style.display = 'none', 4500);
    }, 1100);
  });