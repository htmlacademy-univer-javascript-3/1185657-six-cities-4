import MainScreen from '../../pages/main-screen/main-screen';

type AppProps = {
  pageMainCntCard: number;
};

function App(props: AppProps): JSX.Element {
  const { pageMainCntCard } = props;
  return (
    <MainScreen
      cntCards={pageMainCntCard}
    />
  );
}

export default App;
