import styled from 'styled-components';

const ItemStyle = styled.div`
  background-color:bisque;
  position:relative;
  font-size:1rem;
  padding:2%;
  margin-top:1rem;
  border-radius: 1%;
  box-shadow: 2px 2px 10px 2px black;

  & button{
    position:absolute;
    right:3px;
    top:3px;
    padding:0.6%;
  }

  & button:hover{
    background-color:grey;
  }
`;

export default ItemStyle;