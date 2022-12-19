import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
        <div className = "header">
          <Header />
        </div>

        <div className = "main">
          <Main />
        </div>

        <div className = "footer">
          <Footer />
        </div>

    </div>
  );
}

export default App;
