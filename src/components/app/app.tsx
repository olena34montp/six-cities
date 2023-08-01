import MainPage from '../../pages/main/main';

type AppPageProps = {
    cardsCount: number;
}

function App({ cardsCount }: AppPageProps): JSX.Element {
    return (
        <MainPage cardsCount={cardsCount} />
    );
}

export default App;