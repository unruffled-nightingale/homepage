import styled from "styled-components";
import { ARTICLES_DATA } from "./ArticlesData";

const ArticlesContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Spacer = styled.div`
  flex: 0 0 50%;
  margin-bottom: 30px;
`;

const DetailsRow = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
`;

const NavContainer = styled.div`
  flex: 0 0 60%;
  min-width: 0;
`;

const DetailsContainer = styled.div`
  flex: 0 0 0%;
  min-width: 0;
  box-sizing: border-box;
`;

const ArticleLink = styled.a`
  display: block;
  cursor: pointer;
  margin: 0px;
  margin-bottom: 10px;
  letter-spacing: 0.3em;
  font-size: 0.7em;
  font-color: #007bff;
  text-decoration: none;

  &:hover {
    font-weight: bold;
    text-decoration: underline;
  }
`;

export const ArticlesPanel = () => {
  return (
    <ArticlesContainer>
      <Spacer />
      <DetailsRow>
        <NavContainer>
          {ARTICLES_DATA.map((article) => (
            <ArticleLink
              key={article.name}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {article.name}
            </ArticleLink>
          ))}
        </NavContainer>
        <DetailsContainer />
      </DetailsRow>
    </ArticlesContainer>
  );
};
