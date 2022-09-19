import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Main } from "widgets/main";
import { User } from "widgets/user";
import { MainTemplate } from "shared/ui/mainTemplate";

export const HomePage = () => {
  const [params] = useSearchParams();

  const query = useMemo(() => {
    const value = params.keys().next().value;
    return value;
  }, [params]);



  return (
    <MainTemplate>
      <div>
        {query ? <User username={query} /> : <Main />}
      </div>
    </MainTemplate>
  );
};
