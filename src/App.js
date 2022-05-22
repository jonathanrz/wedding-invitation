import Avatar from "avataaars";
import styled from "styled-components";

const ThriathlonImg = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 150px;
`;

const SallyImg = styled.img`
  width: 200px;
  position: absolute;
  right: 0;
  bottom: -50px;
  width: 150px;
`;

const KikiImg = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 150px;
`;

const RetsukoImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 150px;
`;

const PS5Img = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 150px;
`;

const WheelImg = styled.img`
  position: absolute;
  left: 0;
  top: 40%;
  width: 150px;
`;

const PlaneImg = styled.img`
  position: absolute;
  right: 0;
  top: 40%;
  width: 150px;
`;

const Container = styled.div`
  display: grid;
  justify-content: center;
  width: 700px;
  height: 600px;
  margin: auto;
  position: relative;
`;

const Content = styled.div`
  display: grid;
  gap: 0.5rem;
`;

const AvatarContainer = styled.div`
  display: flex;
  margin: auto;
  position: relative;
  margin-top: -3rem;
`;

const Text = styled.p`
  text-align: center;
  margin: 0;

  font-family: AphroditeSlimPro;
`;

const Guests = styled(Text)`
  font-size: 2rem;
`;

const Invitation = styled(Text)`
  font-size: 2rem;
  font-family: Darleston;
  margin-top: -3rem;
`;

const Date = styled(Text)`
  font-size: 2rem;
  font-family: Darleston;

  margin-bottom: -2rem;
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
      <RetsukoImg src={`${process.env.PUBLIC_URL}/images/retsuko.png`} />
      <ThriathlonImg src={`${process.env.PUBLIC_URL}/images/triathlon.jpeg`} />
      <PS5Img src={`${process.env.PUBLIC_URL}/images/ps5.png`} />
      <PlaneImg src={`${process.env.PUBLIC_URL}/images/plane.png`} />
      <WheelImg
        src={`${process.env.PUBLIC_URL}/images/poço-quadrado-infinito.png`}
      />

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
            clotheType="ShirtCrewNeck"
            clotheColor="Blue03"
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
          <SallyImg src={`${process.env.PUBLIC_URL}/images/sally.png`} />
        </AvatarContainer>
        <Date>
          <div>11 de junho de 2022 as 19h</div>
          <div style={{ marginTop: "5px" }}>
            Salão de festas do condomínio Vila Florence
          </div>
        </Date>
      </Content>
    </Container>
  );
}

export default App;
