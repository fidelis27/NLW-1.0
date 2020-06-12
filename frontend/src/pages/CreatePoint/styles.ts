import styled from 'styled-components';

export const Button = styled.div`
  display: flex;
  justify-content: flex-end;

  a {
    width: 100%;
    max-width: 200px;
    height: 52px;
    background: var(--primary-color);
    border-radius: 8px;
    text-decoration: none;

    display: flex;
    align-items: center;
    overflow: hidden;
    span {
      display: block;
      background: rgba(0, 0, 0, 0.08);
      width: 32px;
      height: 72px;

      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.2s;
      font-weight: 400;
    }
    svg {
      color: #fff;
      width: 20px;
      height: 20px;
    }

    strong {
      flex: 1;
      text-align: center;
      padding: 8px;
      color: #fff;
    }
  }
`;
