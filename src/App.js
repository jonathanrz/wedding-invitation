import Avatar from "avataaars";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  justify-content: center;
  width: 100%;

  p {
    text-align: center;
  }
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
      <p>{guests.join(" e ")}</p>
      <p>Vocês estão convidados para o nosso casamento</p>
      <div>
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
      </div>
      <p>11 de junho de 2022 as 19h</p>
    </Container>
  );
}

export default App;
