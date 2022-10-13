import { useContext } from "react";
import { useParams } from "react-router-dom";
import { PostsContext } from "../../context/PostsContext";
import { Container } from "./Post.style";

export function Post(){
  const { posts } = useContext(PostsContext);
  const {id} = useParams();
  const post_id = new Number(id);

  return (
    <Container>
      {posts.map(post => {
        if(post.id == post_id){
          return (
            <p key={post.id}>{post.id}</p>
          )
        }
      })}
    </Container>
  );
}