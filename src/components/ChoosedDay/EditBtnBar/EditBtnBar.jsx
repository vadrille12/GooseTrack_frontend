import { useState } from 'react';
import {
  DeleteBtn,
  EditBntContainer,
  EditBtn,
  MoveBtn,
} from './EditBtnBar.styled';

export const EditBtnBar = () => {
  const [isActiv, setIsActiv] = useState(false);

  const handleOpenMoveBar = () => {
    setIsActiv(true);
  };

  const handleCloseMoveBar = () => {
    setIsActiv(true);
  };

  return (
    <EditBntContainer onMouseLeave={handleCloseMoveBar}>
      <MoveBtn onClick={handleOpenMoveBar}>mu</MoveBtn>
      <EditBtn>ed</EditBtn>
      <DeleteBtn>del</DeleteBtn>
    </EditBntContainer>
  );
};
