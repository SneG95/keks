import Header from '../../components/header/header';
import Hero from '../../components/hero/hero';
import RandomMain from '../../components/random-main/random-main';
import LastReview from '../../components/last-review/last-review';
import MapScreen from '../../components/map-screen/map-screen';
import Footer from '../../components/footer/footer';
import Loader from '../../components/loader/loader';
import { useAppSelector } from '../../hooks';
import { getProductsLoadedStatus } from '../../store/products-process/products-process.selectors';

function MainPage(): JSX.Element {
  const isProductsLoaded = useAppSelector(getProductsLoadedStatus);

  if(!isProductsLoaded) {
    return <Loader />;
  }

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
