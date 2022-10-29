import Card from "./components/Card";
import Header from './components/Header';
import Question from './components/Question';
import Choices from './components/Choices';
import Footer from './components/Footer';

function App() {
  return (
    <Card>
      <Header />
      <Question />
      <Choices />
      <Footer />
    </Card>
  );
}

export default App;
