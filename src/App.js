import './App.scss';
import Header from './components/header/Header.jsx';
import MidSection from './components/midle/Mid-section';
import Pictuer from './components/section-picture/Picture';
import { LoremIpsum } from 'react-lorem-ipsum';
import img1 from './images/sewing-mashine.jpeg';
import img2 from './images/time.jpg';
import img3 from './images/adress.jpg';
import img4 from './images/about.jpg';


function App() {
	return (
		<div className="app">
			<Header />
			<Pictuer />
			<MidSection title = {"Pricing"} text={<LoremIpsum avgWordsPerSentence={3}/>} image={img1} />
			<MidSection title = {"Open Time"}  text={<LoremIpsum avgWordsPerSentence={5}/>} image={img2} />
			<MidSection title = {"Adress"}  text={<LoremIpsum avgWordsPerSentence={1}/>} image={img3} />
			<MidSection title = {"About"}  text={<LoremIpsum />} image={img4} />
		</div>
	);
}

export default App;
