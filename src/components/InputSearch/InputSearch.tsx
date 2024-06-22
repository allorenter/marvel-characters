import Input from '@/components/Input/Input';
import SearchIcon from './SearchIcon';
import styles from './styles.module.css';

export default function InputSearch({
  value,
  onChange,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <>
      <SearchIcon />
      <Input
        className={styles.input}
        value={value}
        onChange={onChange}
        type={'search'}
        placeholder='SEARCH A CHARACTER'
      />
    </>
  );
}
