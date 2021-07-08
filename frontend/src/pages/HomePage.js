import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import styled from 'styled-components/macro';

export default function HomePage() {
  const { jwtDecoded } = useContext(AuthContext);

  return (
    <Wrapper>
      <h1>Homepage</h1>
      <section>
        <p>Hi {jwtDecoded.sub}! </p>
        <p>
          {' '}
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takima
        </p>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
