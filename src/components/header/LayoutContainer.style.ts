import styled from 'styled-components';
import backgroudImage from '../../assets/Cover.png'

export const Header = styled.div`
    width: 100vw;
    height: 296px;
    background-image: url(${backgroudImage});
    background-color: #cccccc;
    background-position: top; 
    background-repeat: no-repeat; 
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    
    img{
       max-width: 148px;
       transform: translateY(-40%);
    }
`;