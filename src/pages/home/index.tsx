import { useSearchUser } from "entities/user/useSearchUser";
import { useFetchMe } from "entities/me/useFetchMe";
import { Main } from "widgets/main";
import { User } from "widgets/user";
import { MainTemplate } from "shared/ui/mainTemplate";
import { Spin } from "antd";

export const HomePage = () => {
  const { me, isLoading: meIsLoading} = useFetchMe();
  const {
    user,
    isLoading: userIsLoading,
    isError: userIsError,
  } = useSearchUser();

  return (
    <MainTemplate>
      {me && (
        <div>
          {meIsLoading ? (
            <Spin />
          ) : (
            <>
              Token owner:{" "}
              <a target="_blank" href={me.html_url}>
                {me.login}
              </a>
            </>
          )}
        </div>
      )}
      <div>
        {user ? (
          <User user={user} />
        ) : (
          <Main isLoading={userIsLoading} isError={userIsError} />
        )}
      </div>
    </MainTemplate>
  );
};
