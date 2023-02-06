import './App.scss';
import Header from './components/header/Header.jsx';
import MidSection from './components/midle/Mid-section';
import Pictuer from './components/section-picture/Picture';


function App() {
	return (
		<div className="app">
			<Header />
			<Pictuer/>
			{/* <MidSection/> */}
		</div>
	);
}

export default App;
