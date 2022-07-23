import './App.css';
import { Header } from './components/Header.jsx'
import { Location } from './components/Location.jsx'
import './styles/Header.css'
import './styles/Location.css'
import { data } from './data.js'
function App() {
  const locations = data.map( (data) => {
    return (
      <Location data={data} />
    )
  })
  return (
    <div className="App">
      <Header />
      <main>
        {locations}
      </main>
    </div>
  );
}

export default App;
