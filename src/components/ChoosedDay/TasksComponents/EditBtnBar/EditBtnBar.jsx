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

export const EditBtnBar = ({ onOpen, setAction, category }) => {
  const [isActiv, setIsActiv] = useState(false);

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
        <>
          {category === 'done' && (
            <ChangeCategoryContainer>
              <MoveToInProgress>
                <button>
                  In progress <MoveBtn />
                </button>
              </MoveToInProgress>
              <MoveToDone>
                <button>
                  To do <MoveBtn />
                </button>
              </MoveToDone>
            </ChangeCategoryContainer>
          )}
          {category === 'to-do' && (
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
          {category === 'in-progress' && (
            <ChangeCategoryContainer>
              <MoveToInProgress>
                <button>
                  To do <MoveBtn />
                </button>
              </MoveToInProgress>
              <MoveToDone>
                <button>
                  Done <MoveBtn />
                </button>
              </MoveToDone>
            </ChangeCategoryContainer>
          )}
        </>
      )}
      <EditBtn
        onClick={() => {
          onOpen();
          setAction();
        }}
      >
        ed
      </EditBtn>
      <DeleteBtn>del</DeleteBtn>
    </EditBntContainer>
  );
};
