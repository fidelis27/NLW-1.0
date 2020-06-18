import styled from 'styled-components';

import image from '../../assets/home-background.svg';

export const PageHome = styled.div`
  height: 100vh;

  background: url(${image}) no-repeat 400px top;

  div {
    width: auto;
    height: 100%;
    margin: 0 auto;
    padding: 0 30px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    header {
      margin: 48px 0 0;
    }
    main {
      flex: 1;
      max-width: 460px;

      display: flex;
      flex-direction: column;
      justify-content: center;
      h1 {
        font-size: 44px;
        color: var(--title-color);
      }
      p {
        font-size: 20px;
        margin-top: 14px;
        line-height: 38px;
      }
      a {
        width: 100%;
        max-width: 360px;
        height: 72px;
        background: var(--primary-color);
        border-radius: 8px;
        text-decoration: none;

        display: flex;
        align-items: center;
        overflow: hidden;

        margin-top: 40px;
        span {
          display: block;
          background: rgba(0, 0, 0, 0.08);
          width: 72px;
          height: 72px;

          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.2s;
          svg {
            color: #fff;
            width: 20px;
            height: 20px;
          }
        }
        strong {
          flex: 1;
          text-align: center;
          color: #fff;
        }
        :hover {
          background: #2fb86e;
        }
      }
    }
  }
`;
