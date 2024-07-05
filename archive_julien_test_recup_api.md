import { useState } from 'react';
import axios from 'axios';

import './App.scss';

function App() {
const [game, setGame] = useState([]);
const [compteur, setCompteur] = useState(1);

const runScript = async () => {
console.log('clic run du script');

    console.log('va faire un appel api');
    try {
      const result = await axios.get(
        `https://boardgamegeek.com/xmlapi/boardgame/${compteur}`
      );

      console.log('a fait un appel api');
      console.log(result);
    } catch (error) {
      console.error("Erreur lors de l'appel API", error);
    }

};
console.log(game);

return (
<div className="App">
<header className="App-header">
<p>YOO !! on va voler le bdd de https://boardgamegeek.com/xmlapi </p>

        <button type="button" className="button" onClick={runScript}>
          clic ici pour lancer le script !
        </button>
      </header>
    </div>

);
}

export default App;
