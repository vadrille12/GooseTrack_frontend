import { AiFillHome } from 'react-icons/ai';

import { Text, Main, Info, Goose, NavLink } from './NotFoundPage.styled';

export default function NotFoundPage() {
  return (
    <Main>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '30px',
          }}
        >
          <Text>4</Text>
          <Goose />
          <Text>4</Text>
        </div>
        <Info>
          We're sorry, the page you requested could not be found. Please go back
          to the homepage.
        </Info>
        <NavLink to="/">
          <AiFillHome />
          HomePage
        </NavLink>
      </div>
    </Main>
  );
}
