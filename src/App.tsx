import './App.css';
import HomePage from './pages/home/Index';
import Header from './components/header/Index';
import Footer from './components/footer/Index';
import MainContainer from './pages/container/Index';

function App() {
  return (
    <div className="App">
      <Header />
      <MainContainer />
      <Footer />
    </div>
  );
}

export default App;
