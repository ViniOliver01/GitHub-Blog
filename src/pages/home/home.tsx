import { Container, Post, PostArea, ProfileArea, ProfileIconArea, ProfileImg, ProfileInfo, SearchArea, SearchComponent } from "./Home.style";
import gitHub from "../../assets/svg/arrow-up-right-from-square-solid.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useContext, useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useNavigate } from "react-router-dom";
import { PostsContext } from "../../context/PostsContext";

export const dateFormatter = new Intl.DateTimeFormat('pt-BR');

export function Home(){
  const { posts, totalPosts, user } = useContext(PostsContext);
  const navigate = useNavigate();

  console.log(posts)
  

  function calcTimePassed(time: string){
    const timePassed = new Date(time);
    const newDate = formatDistanceToNow(timePassed, {
      addSuffix: true,
      locale: ptBR
    })
    return newDate
  }
  
  return (
    <Container>
        <ProfileArea>
          <ProfileImg src={'https://github.com/vinioliver01.png'} alt="" />
          <ProfileInfo>
            <span>
                <h1>{user.name}</h1> 
                <a href="">GITHUB <FontAwesomeIcon icon={faGithub} /></a>
            </span>
               <p>{user.bio}</p> 
            <ProfileIconArea>
                <h4><FontAwesomeIcon icon={faGithub} /> {user.blog}</h4>
                <h4><FontAwesomeIcon icon={faGithub} /> cameronwll</h4>
                <h4><FontAwesomeIcon icon={faGithub} /> cameronwll</h4>
            </ProfileIconArea>
          </ProfileInfo>
        </ProfileArea>

        <SearchArea>
          <div>
            <h3>Publicações</h3>
            <small>{totalPosts} {totalPosts == 1 ? "publicação" : "publicações"}</small>
          </div>
          <SearchComponent type="text" placeholder="Buscar conteúdo"/>
        </SearchArea>

        <PostArea>
            {posts.map(post => {
              return (
                <Post key={post.id} onClick={() => {navigate(`/post/${post.id}`);}}>
                  <div>
                    <h2>{post.title}</h2> 
                    <span>{calcTimePassed(post.created_at)}</span> 
                  </div>
                  <p>{post.body}</p>
                </Post>
              )
            })}


            {/* //   id: response.data.items[0].id,
            //   title: response.data.items[0].title,
            //   description: response.data.items[0].body,
            //   body: response.data.items[0].body,
            //   owner: response.data.items[0].user.login,
            //   create_at: response.data.items[0].created_at */}

        </PostArea>
    </Container>
  );
}
