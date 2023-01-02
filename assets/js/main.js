const showHiddenPass = (inputPass, InputIcon) => {
  const input = document.getElementById(inputPass),
    iconEye = document.getElementById(InputIcon);

  iconEye.addEventListener('click', () => {
    // Trocar a senha para texto
    if (input.type === 'password') {
      // Trocar para texto
      input.type = 'text';
      // Adicionar Icon
      iconEye.classList.add('ri-eye-line');
      // Remover Icon
      iconEye.classList.remove('ri-eye-off-line');
    } else {
      // Trocar para senha
      input.type = 'password';
      // Remover Icon
      iconEye.classList.remove('ri-eye-line');
      // Adicionar Icon
      iconEye.classList.add('ri-eye-off-line');
    }
  });
};

showHiddenPass('input-pass', 'input-icon');
