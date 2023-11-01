import Header from '../../components/header/header';
import Hero from '../../components/hero/hero';
import RandomMain from '../../components/random-main/random-main';
import LastReview from '../../components/last-review/last-review';
import MapScreen from '../../components/map-screen/map-screen';
import Footer from '../../components/footer/footer';

function MainPage(): JSX.Element {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Hero />
        <RandomMain />
        <LastReview />
        <MapScreen />
      </main>
      <Footer />
    </div>
  );
}

export default MainPage;
