import Avatar from "avataaars";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  justify-content: center;
  gap: 1rem;
  width: 100%;
`;

const AvatarContainer = styled.div`
  display: flex;
  width: 424px;
  margin: auto;
`;

const Text = styled.p`
  text-align: center;
  margin: 0;

  font-family: Darleston;
`;

const Guests = styled(Text)`
  font-size: 5rem;
  margin-top: 2rem;
`;

const Invitation = styled(Text)`
  font-size: 3rem;
`;

const Date = styled(Text)`
  font-size: 2rem;
`;

const SecondAvatar = styled.div`
  display: inline-block;
  svg {
    margin-left: -100px;
  }
`;

function App() {
  const guests = (
    new URLSearchParams(window.location.search).get("guests") || ""
  ).split(",");

  return (
    <Container>
      <Guests>{guests.join(" e ")}</Guests>
      <Invitation>Vocês estão convidados para o nosso casamento</Invitation>
      <AvatarContainer>
        <Avatar
          avatarStyle="Transparent"
          topType="ShortHairShortFlat"
          accessoriesType="Prescription02"
          hairColor="Blonde"
          facialHairType="BeardLight"
          facialHairColor="Blonde"
          clotheType="ShirtScoopNeck"
          clotheColor="Black"
          eyeType="Wink"
          eyebrowType="Default"
          mouthType="Smile"
          skinColor="Light"
        />
        <SecondAvatar>
          <Avatar
            avatarStyle="Transparent"
            topType="LongHairStraightStrand"
            accessoriesType="Blank"
            hairColor="Brown"
            facialHairType="Blank"
            clotheType="Hoodie"
            clotheColor="Gray02"
            eyeType="Happy"
            eyebrowType="RaisedExcited"
            mouthType="Smile"
            skinColor="Light"
          />
        </SecondAvatar>
      </AvatarContainer>
      <Date>11 de junho de 2022 as 19h</Date>
    </Container>
  );
}

export default App;
