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
import { useDispatch } from 'react-redux';
import { deleteTask } from 'redux/tasks/operations';

export const EditBtnBar = ({ onOpen, setAction, category, task }) => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleDelete = () => {
    dispatch(deleteTask(task._id));
  };

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
      >
        ed
      </EditBtn>
      <DeleteBtn onClick={handleDelete}>del</DeleteBtn>
    </EditBtnContainer>
  );
};
