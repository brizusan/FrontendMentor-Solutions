// eslint-disable-next-line react/prop-types
const Short = ({handleclick,copy , link}) => {
  return (
    <article className="short">
      <p className="bold overflow-ellipsis">{link?.original_link}</p>
      <hr className="barra" />
      <div className="short__act">
        <p className="gray">{link?.full_short_link}</p>
        <button onClick={handleclick} className="btn focus">
          {copy}
        </button>
      </div>
    </article>
  );
};

export default Short;
