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
import { deleteTask, editTask } from 'redux/tasks/operations';

export const EditBtnBar = ({
  onOpen,
  setAction,
  setColumn,
  category,
  task,
  onEdit,
}) => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const { _id } = task;

  const handleDelete = () => {
    dispatch(deleteTask(task._id));
  };

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeCategory = newCategory => {
    dispatch(editTask({ _id, category: newCategory }));
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
      >
        <ChangeCategoryContainer>
          {category === 'done' && (
            <>
              <MoveToInProgress>
                <button onClick={() => handleChangeCategory('in-progress')}>
                  In progress <MoveBtn />
                </button>
              </MoveToInProgress>
              <MoveToDone>
                <button onClick={() => handleChangeCategory('to-do')}>
                  To do <MoveBtn />
                </button>
              </MoveToDone>
            </>
          )}

          {category === 'to-do' && (
            <>
              <MoveToInProgress>
                <button onClick={() => handleChangeCategory('in-progress')}>
                  In progress <MoveBtn />
                </button>
              </MoveToInProgress>
              <MoveToDone>
                <button onClick={() => handleChangeCategory('done')}>
                  Done <MoveBtn />
                </button>
              </MoveToDone>
            </>
          )}

          {category === 'in-progress' && (
            <>
              <MoveToInProgress>
                <button onClick={() => handleChangeCategory('to-do')}>
                  To do <MoveBtn />
                </button>
              </MoveToInProgress>
              <MoveToDone>
                <button onClick={() => handleChangeCategory('done')}>
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
          setColumn();
          onEdit(task);
        }}
      ></EditBtn>
      <DeleteBtn onClick={handleDelete}></DeleteBtn>
    </EditBtnContainer>
  );
};
