import { MainTemplate } from "shared/ui/mainTemplate";
import { AboutMe } from "widgets/about-me";
import { SearchUser } from "widgets/search-user";

export const HomePage = () => {

  return (
    <MainTemplate>
      <AboutMe />
      <SearchUser />
    </MainTemplate>
  );
};
