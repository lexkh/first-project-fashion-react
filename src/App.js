import Header from './components/header/header.jsx';
import Promo from './components/promo/promo.jsx';
import Brands from './components/brands/brands.jsx';
import Arrivals from './components/arrivals/arrivals.jsx';
import Voucher from './components/voucher/voucher.jsx'
import Download from './components/download/download.jsx'
function App() {
  return (
		<div className="App">
      <Header/>
      <Promo/>
      <Brands/>
      <Arrivals/>
      <Voucher/>
      <Download/>
		</div>
  );
}

export default App;
