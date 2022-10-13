import styled from 'styled-components';

export const Container = styled.div`
    margin: auto;
    width: 864px;
`;

export const PostHeader = styled.div`
    background-color: ${props => props.theme['base-profile']};
    transform: translateY(-50%);
    width: 100%;
    height: fit-content;
    border-radius: 10px;
    padding: 2rem;
    h1{
        margin-top: 1.25rem;
    }
`;

export const PostLinks = styled.div`
    display: flex;
    justify-content: space-between;
    a{
        gap: 0.5rem;
    }
`;

export const PostIconArea = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 0.5rem;
`;

export const PostIcon = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${props => props.theme['base-span']};
`;

export const PostBody = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2.5rem 2rem;
    margin-top: -5rem;
    gap: 1.5rem;
    h2{
        color: ${props => props.theme['blue']};
    }
`;

export const PostNormalText = styled.div`

`;

export const PostCodeArea = styled.div`
    background-color:  ${props => props.theme['base-post']};
    padding: 1rem;
    white-space: pre-wrap;
`;