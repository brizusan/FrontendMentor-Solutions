import { useState , useEffect } from "react";
import Header from './components/Header'
import Notification from './components/Notification'
import styled from "styled-components";
import { datos } from './data'

function App() {

  const [data, setData] = useState([...datos]);

 
  const allRead =()=>{
    setData( datos =>datos.map( r=>({...r,isUnread:false})))
  }


  const handleClickNot =(id)=>{
    setData( datos => datos.map( values=>(
        values.id === id ? {...values,isUnread:false} : values
    )))
  }

  
  return (
    <Container>
     <Header allRead={allRead}  data={data}/>

      <Main>
      {
        data.map( datos =>(
          <Notification key={datos.id} datos={datos}  handleClickNot={handleClickNot}/>
        ))
      }
      </Main>
    </Container>
  );
}

export default App;

const Container = styled.div`
  max-width: 60rem;
  width: calc(100% - 10%);
  margin-inline: auto;
  background-color: var(--White);
  padding: 1rem;
  border-radius: 0.85rem;
  
  @media(min-width:680px){
  }
`;


const Main = styled.main`
  margin-block: 2rem;
  display: grid;
  gap: 1.25rem;

  
`;

