import styled from 'styled-components';

export const Main = styled.main`
  background: black;
  margin: 0 auto 0;
  padding-top: 180px;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    background: black;
    border-radius: 50%;
    color: #2fb86e;
  }

  h1 {
    color: white;
  }
  @media (max-width: 768px) {
    h1 {
      padding: 20px;
      font-size: 20px;
    }
  }
`;
