import { useSearchUser } from "entities/user/useSearchUser";
import { Main } from "./main";
import { AboutUser } from "./about-user";

export const SearchUser = () => {
  const {
    user,
    isLoading: userIsLoading,
    isError: userIsError,
  } = useSearchUser();

  return (
    <div>
      {user ? (
        <AboutUser user={user} />
      ) : (
        <Main isLoading={userIsLoading} isError={userIsError} />
      )}
    </div>
  );
};
