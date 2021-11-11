import './App.css';
import TrendingList from './components/TrendingList'

function App() {
  return (
    <div className = 'app'>
      <header className = 'app-header'>
        <h3> Twitter Trends </h3>
      </header>
      <div className = 'trending-list'> <TrendingList/> </div>
      <footer> © 2021 COPYRIGHT - PROPERTY OF JACK X MARCOS INC.</footer>
    </div>
  )
}
export default App;