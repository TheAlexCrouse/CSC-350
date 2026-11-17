import './App.css';
import Image from './Image';

import courage from './images/courage.webp';
import eustace from './images/eustace.webp';
import muriel from './images/muriel.webp';
import leQuack from './images/le-quack.webp';

function App() {
  return (
    <div className="App">
        <h1>Courage The Cowardly Dog</h1>
        <div className="courage-images">
            <Image src={courage} width={300} alt="Courage The Cowardly Dog" />
            <Image src={eustace} width={300} alt="Eustace Bagge" />
            <Image src={muriel} width={300} alt="Muriel Bagge" />
            <Image src={leQuack} width={300} alt="Le Quack" />
        </div>
    </div>
  );
}

export default App;
