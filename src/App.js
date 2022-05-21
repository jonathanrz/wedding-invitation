import Avatar from "avataaars";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  justify-content: center;
  width: 100%;
  height: 100vh;
  position: relative;
`;

const Content = styled.div`
  display: grid;
  gap: 1rem;
`;

const AvatarContainer = styled.div`
  display: flex;
  margin: auto;
`;

const ThriathlonImg = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 200px;
`;

const SallyImg = styled.img`
  width: 200px;
`;

const KikiImg = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
`;

const RetsukoImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
`;

const PS5Img = styled.img`
  position: absolute;
  top: 0;
  right: 0;
`;

const Text = styled.p`
  text-align: center;
  margin: 0;

  font-family: AphroditeSlimPro;
`;

const Guests = styled(Text)`
  font-size: 5rem;
  margin-top: 2rem;
`;

const Invitation = styled(Text)`
  font-size: 3rem;

  font-family: Darleston;
`;

const Date = styled(Text)`
  font-size: 2rem;

  font-family: Darleston;
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
      <KikiImg src={`${process.env.PUBLIC_URL}/images/kiki.png`} />
      <RetsukoImg src={`${process.env.PUBLIC_URL}/images/retsuko.gif`} />
      <ThriathlonImg src={`${process.env.PUBLIC_URL}/images/triathlon.jpeg`} />
      <PS5Img src={`${process.env.PUBLIC_URL}/images/ps5.png`} />

      <Content>
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
          <SallyImg src={`${process.env.PUBLIC_URL}/images/sally.jpeg`} />
        </AvatarContainer>
        <Date>11 de junho de 2022 as 19h</Date>
      </Content>
    </Container>
  );
}

export default App;
