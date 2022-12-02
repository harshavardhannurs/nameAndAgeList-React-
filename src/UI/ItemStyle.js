import styled from 'styled-components';

const ItemStyle = styled.div`
  background-color: #252323;
  position:relative;
  font-size:1rem;
  padding: 1% 5% ;
  margin-top:1rem;
  border-radius: 1.2rem;
  box-shadow: 5px 5px 10px 3px grey;
  color:#E7C139;

  & button{
    position:absolute;
    right:3px;
    top:3px;
    padding:0.6%;
    background-color:#252323;
    border-radius:100%;
    border-color:transparent;
  }
`;

export default ItemStyle;