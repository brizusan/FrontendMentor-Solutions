import React from "react";
import styled from "styled-components";

const Notification = ({ datos,handleClickNot }) => {

  const { id,image, name, text, link, message, isUnread, picture,time } = datos;
  
  return (
    <NotificationItem onClick={()=>handleClickNot(id)}>
      <Card active={isUnread}>
        <img src={image} alt={`${name} icon responsive decorative`} />
        <div className="text">
          <h2>
            <strong>{name} </strong> {text}{" "}
            <span className="link">{link} </span>
            {/* <div className={ `${active ? 'point': ''}`}></div> */}
            <p className={isUnread ? "point" : ""}></p>
          </h2>
          <small>{time}</small>
        </div>
        <div className={picture  ? 'border' : ''}>
          <Image picture={picture} src={picture}></Image>
        </div>
      </Card>
      <Message message={message}>
        <p>{message}</p>
      </Message>
    </NotificationItem>
  );
};

export default Notification;

const NotificationItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Card = styled.article`
  display: flex;
  align-items: flex-start;
  background-color: ${(props) => (props.active ? "var(--Light-blue)" : "")};
  gap: 1rem;
  border-radius: 0.5rem;
  padding: 1rem 1.5rem;

  img {
    max-width: 3.6rem;
  }

  .border{
    display: flex;
    justify-content: flex-end;
    width: 35%;
  }

  .text {
    font-size: 1.4rem;
    color: var(--Blue);

    h2 {
      font-size: 1.4rem;
      strong {
        color: var(--Very-dark-blue);
        transition: var(--transition);
        text-transform: capitalize;
        &:hover {
          cursor: pointer;
          color: var(--Blue-b);
        }
      }

      .link {
        color: var(--Dark-blue);
        font-weight: 700;
        transition: var(--transition);
        &:hover {
          cursor: pointer;
          color: var(--Blue-b);
        }
      }

      .point {
        display: inline-block;
        border: 2px solid red;
        width: 6px;
        height: 6px;
        background-color: red;
        border-radius: 50%;
      }
    }
  }

  @media(min-width:860px){
    padding: 1.5rem;
  }
`;

const Message = styled.div`
  display: ${(props) => (props.message ? "flex" : "none")};
  justify-content: flex-end;

  p {
    border: 1px solid var(--Grayish-blue);
    color: var(--Blue);
    padding: 1.5rem 1rem;
    max-width: 85%;
    border-radius: 0.5rem;
    transition: var(--transition);

    &:hover {
      background-color: var(--Light-blue);
      border: 1px solid transparent;
      color: var(--Dark-blue);
      cursor: pointer;
    }
  }

  @media (min-width: 720px) {
    p {
      max-width: 90%;
      padding: 2rem;
    }
  }
`;

const Image = styled.img`
  display: ${(props) => (props.picture ? "block" : "none")};
  
`;
