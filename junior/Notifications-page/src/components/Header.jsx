import React , {useEffect} from "react";
import styled from "styled-components";


const Header = ({data,allRead}) => {
  
  return (
    <Title>
      <h1>
        Notifications <span> {data && data.filter(d=>d.isUnread).length} </span>
      </h1>
      <button onClick={allRead} >Mark all as read</button>
    </Title>
  );
};

export default Header;

const Title = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-block: 2rem;

  h1 {
    font-size: 2rem;
    color: var(--Very-dark-blue);

    span {
      color: var(--White);
      background: var(--Very-dark-blue);
      font-size: 1.5rem;
      padding: 0.2rem 0.85rem;
      border-radius: 0.5rem;
    }
  }

  button {
    border: none;
    color: var(--Blue);
    background: transparent;
    transition: var(--transition);

    &:hover {
      cursor: pointer;
      color: var(--Blue-b);
    }
  }
`;
