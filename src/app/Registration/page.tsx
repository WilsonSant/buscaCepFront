import LoginPage from "../components/Login/LoginPage";

function Registration() {
  return (
    <LoginPage
      title="Cadastrar"
      firstLabel="Criar Conta"
      secondLabel="Logar"
      isLogin={false}
      buttonURL="../"
      messageForm="Usuário já existe!"
    />
  );
}

export default Registration