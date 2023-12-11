import "./App.css";
import { Gallery } from "./components/Gallery";

import { imageCategories, images } from "./mocks/images";

function App() {
    return (
        <div className="App">
            <Gallery images={images} imageCategories={imageCategories} />
        </div>
    );
}

export default App;
