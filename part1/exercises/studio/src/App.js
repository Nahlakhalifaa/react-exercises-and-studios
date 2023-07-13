import logo from './logo.svg';
import './App.css';
import RecipeDescription from './components/RecipeDescription'
import RecipePhoto from './components/Photos.js'
import styles from './Description.module.css';


function App() {
  return (
    <div className="App">
      <div className="recipePhotoBlock">
        <RecipePhoto/>
        
        <div>
          <RecipeDescription />
      </div>
      </div>
    </div>
  );
}

export default App;
