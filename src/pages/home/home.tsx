import { Container, Post, PostArea, ProfileArea, ProfileIconArea, ProfileImg, ProfileInfo, SearchArea, SearchComponent } from "./Home.style";
import gitHub from "../../assets/svg/arrow-up-right-from-square-solid.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import api from "../../services/api";
import { useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

interface PostProps {
  id: number;
  title: string;
  description: string;
  create_at: string;
}

export const dateFormatter = new Intl.DateTimeFormat('pt-BR');

export function Home(){
  const [posts, setPosts] = useState<PostProps[]>([]);
  const relative = new Intl.RelativeTimeFormat('pt-BR', { numeric: 'always' });

  function calcTimePassed(time: string){
    const timePassed = new Date(time);
    const newDate = formatDistanceToNow(timePassed, {
      addSuffix: true,
      locale: ptBR
    })
    return newDate
  }

  useEffect(() => {
    api
      .get("/posts")
      .then((response) => {
        setPosts(response.data)
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });

  }, []);
  
  
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
            <span>{posts.length} {posts.length == 1 ? "publicação" : "publicações"}</span>
          </div>
          <SearchComponent type="text" placeholder="Buscar conteúdo"/>
        </SearchArea>

        <PostArea>
            {posts.map(post => {
              return (
                <Post key={post.id}>
                  <div>
                    <h2>{post.title}</h2> 
                    <span>{calcTimePassed(post.create_at)}</span> 
                  </div>
                  <p>{post.description}</p>
                </Post>
              )
            })}
        </PostArea>
    </Container>
  );
}
