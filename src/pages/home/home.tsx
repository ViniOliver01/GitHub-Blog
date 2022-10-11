import { Container } from "./home.style";
import imgCover from "../../assets/Cover.png"

export function Home(){

  return (
    <Container>
        <header>
            <img src={imgCover} alt="" />
        </header>

    </Container>
  );
}