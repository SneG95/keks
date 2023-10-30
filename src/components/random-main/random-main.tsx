import CardsList from '../cards-list/cards-list';

function RandomMain(): JSX.Element {
  return (
    <section className="random-main">
      <div className="container">
        <h2 className="random-main__title">кексы</h2>
        <CardsList isRandom />
      </div>
    </section>
  );
}

export default RandomMain;
