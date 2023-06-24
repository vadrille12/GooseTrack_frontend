import { TaskForm } from 'components/TaskForm/TaskForm';
import { Modal } from 'components/shared/Modal/Modal';

export const TaskModal = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <TaskForm />
    </Modal>
  );
};
