import { useSearchUser } from "entities/user/useSearchUser";
import { Main } from "./main";
import { AboutUser } from "./about-user";
import { useSearchRepos } from "entities/repo/useSearchRepos";
import { useSearchParams } from "react-router-dom";

export const SearchUser = () => {
  const [params] = useSearchParams();

  const {
    user,
    isLoading: userIsLoading,
    isError: userIsError,
  } = useSearchUser(params);

  const {
    repos,
    isLoading: reposIsLoading,
    isError: repoIsError,
  } = useSearchRepos(params);

  const isLoading = userIsLoading && reposIsLoading;
  const isError = userIsError && repoIsError; 

  return (
    <div>
      {user ? (
        <AboutUser user={user} repos={repos}/>
      ) : (
        <Main isLoading={isLoading} isError={isError} />
      )}
    </div>
  );
};
