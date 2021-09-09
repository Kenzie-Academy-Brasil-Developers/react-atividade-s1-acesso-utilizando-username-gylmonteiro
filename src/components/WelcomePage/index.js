const WecolmePage = ({ user, setIsLoggedIn }) => {
  const HandleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <>
      <h1>Seja bem vindo {user}</h1>
      <button onClick={() => HandleLogout()}>Acessar</button>
    </>
  );
};

export default WecolmePage;
