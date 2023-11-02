import styles from './loader.module.css';

function Loader(): JSX.Element {
  return(
    <span className={`loader ${styles.loaderFixed}`}></span>
  );
}

export default Loader;
