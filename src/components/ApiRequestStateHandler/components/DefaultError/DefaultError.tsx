import { Modal } from '@/components/Modal';
import { Link, useNavigate } from 'react-router-dom';

export default function DefaultError() {
  const navigate = useNavigate();

  return (
    <Modal headerText='An error has occurred' onClose={() => navigate('/')}>
      <Link to={'/'}>Continue</Link>
    </Modal>
  );
}
