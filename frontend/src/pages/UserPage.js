import styled from "styled-components/macro";

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
