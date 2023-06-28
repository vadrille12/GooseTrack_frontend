import { TaskForm } from 'components/TaskForm/TaskForm';
import { Modal } from 'components/shared/Modal/Modal';

export const TaskModal = ({ onClose, action, column }) => {
  return (
    <Modal onClose={onClose}>
      <TaskForm onClose={onClose} action={action} column={column} />
    </Modal>
  );
};
