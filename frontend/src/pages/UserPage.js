import styled from 'styled-components/macro';

export default function UserPage() {
  return (
    <UserPageStyle>
      <h1>User page</h1>
      <p>This is your user page! </p>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
        alt="Placeholder"
      />
      <p>Here you can edit your profile and add allergies. </p>
      <section>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet.
      </section>
    </UserPageStyle>
  );
}

const UserPageStyle = styled.div`
  text-align: center;

  img {
    justify-self: center;
    width: 75%;
  }
`;
