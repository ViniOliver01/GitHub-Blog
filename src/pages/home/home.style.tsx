import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-inline:20vw;
    max-width:800px;
    margin: auto;
    @media (max-width: 700px){
        width:fit-content;
        margin-inline:5%;
    }
`;  

export const ProfileArea = styled.div`
    display: flex;
    align-items: center;
    background-color: ${props => props.theme['base-profile']};
    margin-top: -2rem;
    transform: translateY(-40%);
    padding: 2rem;
    padding-left: 2.5rem; 
    border-radius: 10px;
    transition: transform 0.8s;
    @media (max-width: 700px){
        transform: translateY(-20%);
    }
`;  

export const ProfileImg = styled.img`
    height: 20vw;
    max-height: 148px;
    min-height: 96px;
    max-width: 100%;
    border-radius: 8px;
`;  

export const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
    margin-top: 0.5rem;
    justify-content: space-around;
    width: 100%;
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
            align-items: baseline;
            gap: 0.5rem;
        }
    }
`;  
export const ProfileIconArea = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 1.5rem;
    color: ${props => props.theme['base-label']};
    h4{  
        display: flex;
        align-items: baseline;
        gap: 0.5rem;
        margin-right: 1.5rem;
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
    grid-template-columns: repeat(auto-fill,minmax(22rem, 24rem));
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    min-width: fit-content;
`;

export const Post = styled.div`
    background-color: ${props => props.theme['base-post']};
    border-radius: 10px;
    padding: 2rem;
    /* min-width: 22rem;
    max-width: 26rem; */
    flex: 1 1;
    cursor: pointer;
    div{
        display: grid;
        grid-template-columns: 4fr 1fr;
        margin-bottom: 1.25rem;
        gap: 1rem;
        span{
            display: flex;
            justify-content: end;
            white-space: nowrap;
        }
    }
`;