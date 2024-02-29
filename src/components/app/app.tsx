import PageMain from '../../pages/main-screen/main-screen';

type AppProps = {
  pageMainCntCard: number;
};

function App(props: AppProps): JSX.Element {
  const { pageMainCntCard } = props;
  return (
    <PageMain
      cntCards={pageMainCntCard}
    />
  );
}

export default App;
