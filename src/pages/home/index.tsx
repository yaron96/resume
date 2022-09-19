import { useMemo } from "react";
import { useSearchParams } from "react-router-dom"
import { MainTemplate } from "shared/ui/mainTemplate";
import { Main } from "widgets/main";
import { User } from "widgets/user";

export const HomePage = () => {
  const [params] = useSearchParams();

  const query = useMemo(() => {
    const value = params.keys().next().value;
    return value
  }, [params])

  return (
    <MainTemplate>
      {query ? <User username={query}/> : <Main />}
    </MainTemplate>
  )
}

