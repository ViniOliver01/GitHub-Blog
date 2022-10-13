import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostsContext } from "../../context/PostsContext";
import { Container, PostBody, PostCodeArea, PostHeader, PostIcon, PostIconArea, PostLinks, PostNormalText } from "./Post.style";

interface PostProps {
  id: number;
  title: string;
  description: string;
  body: string;
  owner: string;
  created_at: string;
  }

export function Post(){
  const { posts } = useContext(PostsContext);
  const [postItem, setPostItem] = useState<PostProps>();
  const [postFormatedText, setPostFormatedText] = useState(['']);
  const {id} = useParams();
  const post_id = new Number(id);

  function FormatPost(text: PostProps){
    setPostFormatedText([''])
    let newText = text.body.split("\r\n\r\n")
    newText.map(item => {
      setPostFormatedText(state => [...state, item])
    })
  }
  
  useEffect(()=>{
    posts.map(item =>{
      if(item.id == post_id){
        FormatPost(item);
        return setPostItem(item);
      }
    })
  }, [])

  return (
    <Container>
      <PostHeader>
        <PostLinks>
          <a href=""><FontAwesomeIcon icon={faGithub} /> VOLTAR</a>
          <a href="">VER NO GITHUB <FontAwesomeIcon icon={faGithub} /></a>
        </PostLinks>
        <h1>{postItem?.title}</h1>
        <PostIconArea>
          <PostIcon>
            <FontAwesomeIcon icon={faGithub} />
            <span>aaaaaa</span>
          </PostIcon>
          
          <PostIcon>
            <FontAwesomeIcon icon={faGithub} />
            <span>aaaaaa</span>
          </PostIcon>
          
          
        </PostIconArea>
      </PostHeader>

      <PostBody>

        {postFormatedText.map(text => {
          if(text.includes("```javascript")){
            text = text.replace("\r\n", "\n")
            text = text.replace("```javascript", "")
            text = text.replace("```", "")
            text = text.slice(1)
            console.log([text]);
            return (
              <PostCodeArea key={text}>
                <code>
                  {text}
                </code>
              </PostCodeArea>
            )
          }else{
            return <p>{text}</p>
          }
        })}
      </PostBody>
    </Container>
  );
}