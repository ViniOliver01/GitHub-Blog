import { createContext, ReactNode, useEffect, useState } from "react";
import api from "../services/api";
import githubApi from "../services/githubApi";

export const PostsContext = createContext({} as PostsContextType)

interface PostsContextType {
  posts: PostProps[]
  user: UserProps
  totalPosts: number
  }

interface CartContextProviderProps {
  children: ReactNode
  }

interface PostProps {
  id: number;
  title: string;
  description: string;
  body: string;
  owner: string;
  created_at: string;
  }
interface UserProps {
  id: number;
  login: string;
  name: string;
  blog: string;
  bio: string;
  }

export function PostsContextProvider({children}: CartContextProviderProps){
    const [posts, setPosts] = useState<PostProps[]>([]);
    const [totalPosts, setTotalPosts] = useState(0);
    
    const [user, setUser] = useState<UserProps>({
      id: 0,
      login: '',
      name: '',
      blog: '',
      bio: '',
    });
    
    useEffect(() => {
        api
          // .get("issues?q=%20repo:ViniOliver01/GitHub-Blog")
          .get("/post")
          .then((response) => {
            setTotalPosts(response.data.total_count)
            // setPosts({
            //   id: response.data.items[0].id,
            //   title: response.data.items[0].title,
            //   description: response.data.items[0].body,
            //   body: response.data.items[0].body,
            //   owner: response.data.items[0].user.login,
            //   create_at: response.data.items[0].created_at
            //   })
            setPosts(response.data.items)
            console.log(response.data.items)
          })
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
        
        githubApi
          .get("")
          .then((data) => {
            setUser({
              id: data.data.id,
              login: data.data.login,
              name: data.data.name,
              blog: data.data.blog,
              bio: data.data.bio
            })
          })
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
    
      }, []);

    return (
        <PostsContext.Provider 
        value={{
            posts,
            totalPosts,
            user
        }}>
                {children}
        </PostsContext.Provider>
      )
}