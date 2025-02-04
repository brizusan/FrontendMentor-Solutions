import styles from "../styles/formulario.module.css";

// eslint-disable-next-line react/prop-types
const Formulario = ({error ,url , setUrl , handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}
      className={`${styles.formulario}`}>
      <input
        className={`${error ? 'danger' : ''} ${styles.input}`}
        type="text"
        placeholder="Shorten a link here..."
        onChange={e=>setUrl(e.target.value)}
        value={url}
      />
      { error && <small className={styles.error}>Please at link!</small>}
      <button 
        type="submit"
        className="btn">Shorten it!</button>
    </form>
  );
};

export default Formulario;
