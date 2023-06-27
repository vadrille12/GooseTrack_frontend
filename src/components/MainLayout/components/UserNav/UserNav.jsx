import { NavList, StyledLink, NavIcon } from './UserNav.styled';
export const UserNav = () => {
  return (
    <div>
      <NavList>
        <StyledLink>
          <NavIcon></NavIcon>
          <span>My account</span>
        </StyledLink>
        <StyledLink>
          <NavIcon></NavIcon>
          <span>Calendar</span>
        </StyledLink>
        <StyledLink>
          <NavIcon></NavIcon>
          <span>Statistics</span>
        </StyledLink>
      </NavList>
    </div>
  );
};
