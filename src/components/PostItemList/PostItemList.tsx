import { Container } from "./PostItemList.style";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useNavigate } from "react-router-dom";

interface PostItemListProps{
    id: number;
    title: string;
    body: string;
    created_at: string;
    }

export function PostItemList({id, title, body, created_at}:PostItemListProps){
    const navigate = useNavigate();

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
    <Container onClick={() => {navigate(`/post/${id}`);}} >
        <div>
            <h2>{encurtText(title, 30)}</h2> 
            <span>{calcTimePassed(created_at)}</span> 
        </div>
        <p>{encurtText(formatText(body), 180)}</p>
    </Container>
  );
}