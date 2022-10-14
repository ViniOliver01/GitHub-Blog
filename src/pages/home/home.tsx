import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PostsContext } from "../../context/PostsContext";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { 
          Container, 
          Post, 
          PostArea, 
          ProfileArea, 
          ProfileIconArea, 
          ProfileImg, 
          ProfileInfo, 
          SearchArea, 
          SearchComponent 
        } from "./Home.style";
import { BsBoxArrowUpRight, BsFillPeopleFill } from "react-icons/bs";
import { FaBuilding, FaGithub } from "react-icons/fa";

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

  function encurtText(text: string, numbOfCharacter: number){
    return text.substring(0, numbOfCharacter)+"..."
  }

  function formatText(text: string){
    return text.replace("```javascript", "").replace("```", "")
  }
  
  return (
    <Container>
        <ProfileArea>
          <ProfileImg src={'https://github.com/vinioliver01.png'} alt="" />
          <ProfileInfo>
            <span>
                <h1>{user.name}</h1> 
                <a href="https://github.com/vinioliver01" target="_blank">GITHUB <BsBoxArrowUpRight /></a>
            </span>
               <p>{user.bio}</p> 
            <ProfileIconArea>
                <h4><FaGithub /> {user.login}</h4>
                {user.company == null ? '' : <h4><FaBuilding /> {user.company}</h4>}
                <h4><BsFillPeopleFill />{user.followers} {user.followers == 1 ? "seguidor" : "seguidores"}</h4>
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
                    <h2>{encurtText(post.title, 30)}</h2> 
                    <span>{calcTimePassed(post.created_at)}</span> 
                  </div>
                  <p>{encurtText(formatText(post.body), 180)}</p>
                </Post>
              )
            })}
        </PostArea>
    </Container>
  );
}
