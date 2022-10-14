import { createContext, ReactNode, useEffect, useState } from "react";
import api from "../services/api";
import githubApi from "../services/githubApi";

export const PostsContext = createContext({} as PostsContextType)

interface PostsContextType {
  getPosts: (query: string) => void;
  posts: PostProps[]
  user: UserProps
  totalPosts: number
  }

interface CartContextProviderProps {
  children: ReactNode
  }

export interface PostProps {
  id: number;
  title: string;
  description: string;
  body: string;
  owner: string;
  created_at: string;
  url: string;
  comments: number;
  }

interface UserProps {
  id: number;
  login: string;
  name: string;
  blog: string;
  bio: string;
  company: string;
  followers: number;
  }

export function PostsContextProvider({children}: CartContextProviderProps){
  const gitHubUser = "ViniOliver01";
  const gitHubRepo = "GitHub-Blog";
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [totalPosts, setTotalPosts] = useState(0);
  
  const [user, setUser] = useState<UserProps>({
    id: 0,
    login: '',
    name: '',
    blog: '',
    bio: '',
    company:'',
    followers: 0,
  });

    async function getPosts(query: string){
      api
          .get(`issues?q=${query}%20repo:${gitHubUser}/${gitHubRepo}`)
          .then((response) => {
            setTotalPosts(response.data.total_count)
            setPosts(response.data.items)
          })
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
    }
    
    async function getUserData(user: string){
      githubApi
          .get(user)
          .then((data) => {
            setUser({
              id: data.data.id,
              login: data.data.login,
              name: data.data.name,
              blog: data.data.blog,
              bio: data.data.bio,
              company: data.data.company,
              followers: data.data.followers,
            })
          })
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
    }
    
    useEffect(() => {
      getPosts("");
      getUserData(gitHubUser);
      }, []);

    return (
        <PostsContext.Provider 
        value={{
            getPosts,
            posts,
            totalPosts,
            user
        }}>
                {children}
        </PostsContext.Provider>
      )
}