function StartButton(): JSX.Element {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="catalog__button-wrapper">
      <button
        className="btn btn--second"
        type="button"
        onClick={handleClick}
      >в начало
      </button>
    </div>
  );
}

export default StartButton;
