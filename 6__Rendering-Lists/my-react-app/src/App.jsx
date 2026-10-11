import List from './List.jsx'

function App(){

  const gamesList=[{id: 1,name:"COD", hours_played: 100},
                    {id: 2, name: "Badminton", hours_played: 20},
                    {id: 3, name: "Forza", hours_played: 50}];
  
  const fruit=[{id:4, name:"apple", calories: 95},
                {id:5, name:"banana", calories: 105},
                {id:6, name:"mango", calories: 65},];

  return(
      <> 
        <List gameList = {gamesList} category="Games"/>
        <List gameList ={fruit} category = "Fruits"/>  
        {/* as we didn't use the 'calories in the List.jsx' --> the calories of the vegetables won't be displayed */}
      </>
  );
}
export default App