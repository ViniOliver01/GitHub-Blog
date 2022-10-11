import { Container, ProfileArea, ProfileImg } from "./Home.style";


export function Home(){

  return (
    <Container>
        <ProfileArea>
          <ProfileImg src={'https://github.com/vinioliver01.png'} alt="" />

          <h1>Cameron Williamson</h1> 
          {/* https://api.github.com/users/vinioliver01 */}
          <a href="">GITHUB</a>

          <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
          <img src="" alt="" />
        </ProfileArea>
    </Container>
  );
}