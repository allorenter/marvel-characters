import { Modal } from '@/components/Modal';
import { Link, useNavigate } from 'react-router-dom';

export default function NotFoundError() {
  const navigate = useNavigate();

  return (
    <Modal headerText='Character not found' onClose={() => navigate('/')}>
      <Link to={'/'}>Continue</Link>
    </Modal>
  );
}
