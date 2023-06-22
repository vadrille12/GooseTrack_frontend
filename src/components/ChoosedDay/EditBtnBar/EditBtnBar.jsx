import { useState } from 'react';
import {
  ChangeCategoryContainer,
  DeleteBtn,
  EditBntContainer,
  EditBtn,
  MoveBtn,
  MoveToInProgress,
  MoveToDone,
} from './EditBtnBar.styled';

export const EditBtnBar = () => {
  const [isActiv, setIsActiv] = useState(true);

  const handleOpenMoveBar = () => {
    setIsActiv(true);
  };

  const handleCloseMoveBar = () => {
    setIsActiv(false);
  };

  return (
    <EditBntContainer onMouseLeave={handleCloseMoveBar}>
      <MoveBtn onClick={handleOpenMoveBar}></MoveBtn>

      {isActiv && (
        <ChangeCategoryContainer>
          <MoveToInProgress>
            <button>
              In progress <MoveBtn />
            </button>
          </MoveToInProgress>
          <MoveToDone>
            <button>
              Done <MoveBtn />
            </button>
          </MoveToDone>
        </ChangeCategoryContainer>
      )}
      <EditBtn>ed</EditBtn>
      <DeleteBtn>del</DeleteBtn>
    </EditBntContainer>
  );
};
