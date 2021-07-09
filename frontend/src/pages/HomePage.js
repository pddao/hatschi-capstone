import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import styled from 'styled-components/macro';

export default function HomePage() {
  const { jwtDecoded } = useContext(AuthContext);

  return (
    <Wrapper>
      <h1>Homepage</h1>
      <section>
        <h3>Hi {jwtDecoded.sub}! </h3>
        <p>
          {' '}
          Your eyes are red, your nose is running, you have to sneeze a lot?
          Trees and flowers start to bloom and make your life difficult? Then
          it's hay fever time again. But there's no reason to despair.
        </p>
        <div>hatschi - the pollen app</div>
        <p>
          {' '}
          is your daily companion and always keeps you up to date on when, where
          and how strongly the most common pollens fly in Germany.
        </p>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.6;

  h3,
  p {
    text-align: justify;
    margin-left: 10px;
  }

  div {
    color: #8db596;
    font-weight: bold;
    text-align: center;
  }
`;
