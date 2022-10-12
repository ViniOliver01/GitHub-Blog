import { Container, Post, PostArea, ProfileArea, ProfileIconArea, ProfileImg, ProfileInfo, SearchArea, SearchComponent } from "./Home.style";
import gitHub from "../../assets/svg/arrow-up-right-from-square-solid.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';


export function Home(){

  return (
    <Container>
        <ProfileArea>
          <ProfileImg src={'https://github.com/vinioliver01.png'} alt="" />
          <ProfileInfo>
            <span>
                <h1>Cameron Williamson </h1> 
                <a href="">GITHUB <FontAwesomeIcon icon={faGithub} /></a>
            </span>
            
            {/* https://api.github.com/users/vinioliver01 */}
                
            <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
            <ProfileIconArea>
                <p><FontAwesomeIcon icon={faGithub} /> cameronwll</p>
                <p><FontAwesomeIcon icon={faGithub} /> cameronwll</p>
                <p><FontAwesomeIcon icon={faGithub} /> cameronwll</p>
            </ProfileIconArea>
          </ProfileInfo>
        </ProfileArea>

        <SearchArea>
          <div>
            <h3>Publicações</h3>
            <span>6 publicações</span>
          </div>
          <SearchComponent type="text" placeholder="Buscar conteúdo"/>
        </SearchArea>
        <PostArea>

          <Post>
            <div>
              <h2>JavaScript data types and data structures</h2>
              <span>Há 1 dia</span>
            </div>
            <p>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in </p>
          </Post>
          <Post>
            <div>
              <h2>JavaScript data types and data structures</h2>
              <span>Há 1 dia</span>
            </div>
            <p>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in </p>
          </Post>
          <Post>
            <div>
              <h2>JavaScript data types and data structures</h2>
              <span>Há 1 dia</span>
            </div>
            <p>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in </p>
          </Post>
          <Post>
            <div>
              <h2>JavaScript data types and data structures</h2>
              <span>Há 1 dia</span>
            </div>
            <p>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in </p>
          </Post>
          <Post>
            <div>
              <h2>JavaScript data types and data structures</h2>
              <span>Há 1 dia</span>
            </div>
            <p>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in </p>
          </Post>
          <Post>
            <div>
              <h2>JavaScript data types and data structures</h2>
              <span>Há 1 dia</span>
            </div>
            <p>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in </p>
          </Post>

        </PostArea>
    </Container>
  );
}
