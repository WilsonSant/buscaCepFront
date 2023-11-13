import LoginPage from "./LoginPage";
function MainPage() {
  return (
    <LoginPage
      title="Login"
      firstLabel="Entrar"
      secondLabel="Cadastrar"
      isLogin={true}
      buttonURL="./Registration"
      messageForm="Usuário não encontrado"
    />
  );
}

export default MainPage;
