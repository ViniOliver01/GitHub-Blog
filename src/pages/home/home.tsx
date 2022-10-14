import { useContext } from "react";
import { PostsContext } from "../../context/PostsContext";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from '@hookform/resolvers/zod';

import { 
          Container,
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
import { PostItemList } from "../../components/PostItemList/PostItemList";

export const dateFormatter = new Intl.DateTimeFormat('pt-BR');

type SearchFormInputs = z.infer<typeof searchFormSchema>;
const searchFormSchema = z.object({
  query: z.string(),
})

export function Home(){
  const { posts, totalPosts, user, getPosts } = useContext(PostsContext);
  const {
    reset,
    register, 
    handleSubmit,
      } = useForm<SearchFormInputs>({
      resolver: zodResolver(searchFormSchema),
    });

  function handleSearch(data: SearchFormInputs){
    console.log([data.query])
    getPosts(data.query)
    reset()
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
          <form action="" onSubmit={handleSubmit(handleSearch)} >
            <SearchComponent 
              type="text" 
              placeholder="Buscar conteúdo"
              {...register('query')} 
            />
          </form>
        </SearchArea>

        <PostArea>
            {posts.map(post => {
              return (
                  <PostItemList 
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    body={post.body}
                    created_at={post.created_at}
                  />
              )
            })}
        </PostArea>
    </Container>
  );
}
