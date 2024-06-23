import { useParams } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import useDetailedCharacter from './hooks/useDetailedCharacter';
import { ApiRequestStateHandler } from '@/components/ApiRequestStateHandler';
import { Details } from './components/Details';
import { Comics } from './components/Comics';
import { ProgressBar } from '@/components/ProgressBar';
import { DefaultError } from '@/components/ApiRequestStateHandler';
import { NotFoundError } from './components/NotFoundError';

export default function CharactersDetails() {
  const { id } = useParams();
  const { detailedCharacter, isLoadingDetailedCharacter, errorDetailedCharacter } =
    useDetailedCharacter({ id });

  const hasComics = detailedCharacter?.comics?.length > 0;

  return (
    <Layout>
      <ApiRequestStateHandler
        isLoading={isLoadingDetailedCharacter}
        error={errorDetailedCharacter}
        onIsLoadingRender={() => {
          return <ProgressBar />;
        }}
        onErrorRender={(error) => {
          if (error.message === '404') return <NotFoundError />;
          return <DefaultError />;
        }}
      >
        {detailedCharacter ? (
          <div className={'animatedRoute'}>
            <Details detailedCharacter={detailedCharacter} />
            {hasComics && <Comics comics={detailedCharacter.comics} />}
          </div>
        ) : (
          <>NOT FOUND</>
        )}
      </ApiRequestStateHandler>
    </Layout>
  );
}
