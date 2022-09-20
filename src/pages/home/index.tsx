import { useSearchUser } from "entities/user/useSearchUser";
import { Main } from "widgets/main";
import { User } from "widgets/user";
import { MainTemplate } from "shared/ui/mainTemplate";

export const HomePage = () => {
  const { user, isLoading, isError } = useSearchUser();

  return (
    <MainTemplate>
      <div>
        {user ? (
          <User user={user} />
        ) : (
          <Main isLoading={isLoading} isError={isError} />
        )}
      </div>
    </MainTemplate>
  );
};
