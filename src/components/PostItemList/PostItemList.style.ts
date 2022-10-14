import styled from 'styled-components';

export const Container = styled.div`
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