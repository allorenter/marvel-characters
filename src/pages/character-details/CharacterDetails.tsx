import { useParams } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import useDetailedCharacter from './hooks/useDetailedCharacter';
import { ApiRequestStateHandler } from '@/components/ApiRequestStateHandler';
import { Details } from './components/Details';

export default function CharactersDetails() {
  const { id } = useParams();
  const { detailedCharacter, isLoadingDetailedCharacter, errorDetailedCharacter } =
    useDetailedCharacter({ id });

  // TODO: gestionar notfound errors
  return (
    <Layout>
      <ApiRequestStateHandler isLoading={isLoadingDetailedCharacter} error={errorDetailedCharacter}>
        {detailedCharacter ? <Details detailedCharacter={detailedCharacter} /> : <>NOT FOUND</>}
      </ApiRequestStateHandler>
    </Layout>
  );
}
