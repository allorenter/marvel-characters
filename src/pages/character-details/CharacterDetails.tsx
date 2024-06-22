import { useParams } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import useDetailedCharacter from './hooks/useDetailedCharacter';
import { ApiRequestStateHandler } from '@/components/ApiRequestStateHandler';
import { Details } from './components/Details';
import { Comics } from './components/Comics';

export default function CharactersDetails() {
  const { id } = useParams();
  const { detailedCharacter, isLoadingDetailedCharacter, errorDetailedCharacter } =
    useDetailedCharacter({ id });

  const hasComics = detailedCharacter?.comics?.length > 0;

  // TODO: gestionar notfound errors
  return (
    <Layout>
      <ApiRequestStateHandler isLoading={isLoadingDetailedCharacter} error={errorDetailedCharacter}>
        {detailedCharacter ? (
          <>
            <Details detailedCharacter={detailedCharacter} />
            {hasComics && <Comics comics={detailedCharacter.comics} />}
          </>
        ) : (
          <>NOT FOUND</>
        )}
      </ApiRequestStateHandler>
    </Layout>
  );
}
