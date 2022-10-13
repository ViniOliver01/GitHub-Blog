import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostsContext } from "../../context/PostsContext";
import { Container, PostBody, PostCodeArea, PostHeader, PostIcon, PostIconArea, PostLinks, PostNormalText } from "./Post.style";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

interface PostProps {
  id: number;
  title: string;
  description: string;
  body: string;
  owner: string;
  created_at: string;
  url: string;
  comments: number;
  }

export function Post(){
  const { posts, user } = useContext(PostsContext);
  const [postItem, setPostItem] = useState<PostProps>();
  const [postFormatedText, setPostFormatedText] = useState(['']);
  const {id} = useParams();
  const post_id = new Number(id);
  const url = postItem?.url.replace("api.","").replace("/repos","")

  function FormatPost(text: PostProps){
    setPostFormatedText([''])
    let newText = text.body.split("\r\n\r\n")
    newText.map(item => {
      setPostFormatedText(state => [...state, item])
    })
  }

  function calcTimePassed(time:any){
    if(time === undefined){
      return 
    }else{
      const timePassed = new Date(time);
      const newDate = formatDistanceToNow(timePassed, {
        addSuffix: true,
        locale: ptBR
      })
      return newDate
    }
  }
  
  useEffect(()=>{
    posts.map(item =>{
      if(item.id == post_id){
        FormatPost(item);
        console.log(item)
        return setPostItem(item);
      }
    })
  }, [])

  return (
    <Container>
      <PostHeader>
        <PostLinks>
          <a href="/"><FontAwesomeIcon icon={faGithub} /> VOLTAR</a>
          <a href={url} target="blank">VER NO GITHUB <FontAwesomeIcon icon={faGithub} /></a>
        </PostLinks>
        <h1>{postItem?.title}</h1>
        <PostIconArea>
          <PostIcon>
            <FontAwesomeIcon color="#3A536B" icon={faGithub} />
            <span>{user.login}</span>
          </PostIcon>
          
          <PostIcon>
            <FontAwesomeIcon color="#3A536B" icon={faGithub} />
            <span>{calcTimePassed(postItem?.created_at)}</span>
          </PostIcon>

          <PostIcon>
            <FontAwesomeIcon color="#3A536B" icon={faGithub} />
            <span>{postItem?.comments} {postItem?.comments == 1 ? "comentário": "comentários"}</span>
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
            return (
              <PostCodeArea key={text}>
                <code>
                  {text}
                </code>
              </PostCodeArea>
            )
          }
          if(text.includes("###")){
            text = text.replace("###", "")
            return <h2 key={text}>{text}</h2>
          }
          if(text.includes("**")){
          text = text.replace("**", "")
          return <p key={text}>{text}</p>
          }
          else{
            return <p key={text}>{text}</p>
          }
        })}
      </PostBody>
    </Container>
  );
}