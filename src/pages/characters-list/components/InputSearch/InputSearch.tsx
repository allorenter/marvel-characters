export default function InputSearch({
  value,
  onChange,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return <input value={value} onChange={onChange} type={'search'} />;
}
