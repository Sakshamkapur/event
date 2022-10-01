import Link from "next/link";
import { Banner, Button, SubTitle, Title, Container } from "../shared/styles";

const Home = () => {
  return (
    <Container>
      <Title>
        Imagine if <br />
        <span>Snapchat</span>
        <br /> had events.
      </Title>
      <SubTitle>
        Easily host and share events with your friends across any social media.
      </SubTitle>
      <Banner>
        <img src="/images/landing-page-image.svg" />
      </Banner>
      <Link href={"/create"}>
        <Button>🎉 Create my event</Button>
      </Link>
    </Container>
  );
};

export default Home;
