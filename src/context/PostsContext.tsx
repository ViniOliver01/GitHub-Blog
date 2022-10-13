import { createContext, ReactNode, useEffect, useState } from "react";
import api from "../services/api";

export const PostsContext = createContext({} as PostsContextType)

interface PostsContextType {
    posts: PostProps[]
    }

interface CartContextProviderProps {
    children: ReactNode
    }

interface PostProps {
    id: number;
    title: string;
    description: string;
    create_at: string;
    }

export function PostsContextProvider({children}: CartContextProviderProps){
    const [posts, setPosts] = useState<PostProps[]>([]);
    
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
        <PostsContext.Provider 
        value={{
            posts
        }}>
                {children}
        </PostsContext.Provider>
      )
}