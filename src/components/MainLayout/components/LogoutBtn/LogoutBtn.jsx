import { Wrap } from './LogoutBtn.styled';

export const LogoutBtn = () => {


  const handleLogout = () => {

  };

  return (
    <Wrap>
      <button type="button" onClick={handleLogout}>
        Log out
      </button>
    </Wrap>
  );
};