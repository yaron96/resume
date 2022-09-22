import { useFetchMe } from "entities/me/useFetchMe";
import { Spin } from "antd";

export const AboutMe = () => {
  const { me, isLoading } = useFetchMe();

  return (
    <div>
      {isLoading ? (
        <Spin size="small"/>
      ) : (
        <>
          Token owner:{" "}
          <a target="_blank" href={me?.html_url}>
            {me?.login}
          </a>
        </>
      )}
    </div>
  );
};
