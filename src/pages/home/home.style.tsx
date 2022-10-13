import styled from 'styled-components';

export const Container = styled.div`
    margin: auto;
    max-width: 74rem;
    padding-inline: 10vw;
    margin-bottom: 5rem;
`;  

export const ProfileArea = styled.div`
    display: flex;
    background-color: ${props => props.theme['base-profile']};
    margin-top: -2rem;
    transform: translateY(-40%);
    padding: 2rem;
    padding-left: 2.5rem;
    min-width: 400px;
    border-radius: 10px;
`;  

export const ProfileImg = styled.img`
    height: 148px;
    width: 148px;
    border-radius: 8px;
`;  

export const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
    margin-top: 0.5rem;
    justify-content: space-around;
    p{
        height: 100%;
    }
    span{
        display: flex;
        justify-content: space-between;
        
        h1{
            margin-bottom: 0.5rem;
        }
        a{
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        img{
            height:12px;
            width:12px;
        }
    }
`;  
export const ProfileIconArea = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    p{  
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
`;  

export const SearchArea = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    div{
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.75rem;
    }
`;  

export const SearchComponent = styled.input`
    background-color: ${props => props.theme['base-input']};
    border-radius: 6px;
    border: 1px solid ${props => props.theme['base-border']};
    height: 50px;
    padding: 0.75rem 1rem;
`;

export const PostArea = styled.div`
    margin-top: 3rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    justify-content: center;
`;

export const Post = styled.div`
    background-color: ${props => props.theme['base-post']};
    border-radius: 10px;
    padding: 2rem;
    cursor: pointer;
    div{
        display: grid;
        grid-template-columns: 4fr 1fr;
        margin-bottom: 1.25rem;
        gap: 1rem;
        span{
            display: flex;
            justify-content: end;
        }
    }
`;