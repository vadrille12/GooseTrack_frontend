import { useState } from 'react';
import {
  ChangeCategoryContainer,
  DeleteBtn,
  EditBtnContainer,
  EditBtn,
  MoveBtn,
  MoveToInProgress,
  MoveToDone,
  PopoverStyled,
} from './EditBtnBar.styled';

export const EditBtnBar = ({ onOpen, setAction, category }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <EditBtnContainer>
      <MoveBtn
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
      ></MoveBtn>

      <PopoverStyled
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        // anchorOrigin={{
        //   vertical: 'bottom',
        //   horizontal: 'right',
        // }}
        // transformOrigin={{
        //   vertical: 'top',
        //   horizontal: 'center',
        // }}
      >
        <ChangeCategoryContainer>
          {category === 'done' && (
            <>
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
            </>
          )}

          {category === 'to-do' && (
            <>
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
            </>
          )}

          {category === 'in-progress' && (
            <>
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
            </>
          )}
        </ChangeCategoryContainer>
      </PopoverStyled>

      <EditBtn
        onClick={() => {
          onOpen();
          setAction();
        }}
      />
      <DeleteBtn />
    </EditBtnContainer>
  );
};
