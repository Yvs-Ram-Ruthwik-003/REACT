
function List(props){
    //const games=["COD", "Badminton", "Forza"];  //array of strings

    //let's convert array of strings into array of objects 

    const games=[{id: 1,name:"COD", hours_played: 100},
                 {id: 2, name: "Badminton", hours_played: 20},
                 { id: 3, name: "Forza", hours_played: 50}];

                // Now to transform this list component so it's reusable with different lists 
                // currently the way that we set this up is that each list component that we create has its own list of fruit 
                // To do that you have remove the above 'games' list and add it in the App.jsx and use props to pass the data.
    
    const category = props.category;
    const gamesList = props.gameList; //make sure to use this 'gameList' everywhere below

    const gamesNew = gamesList.map(game=><li key ={game.id}>
                                {game.name} : &nbsp;
                                <b>{game.hours_played}</b></li>)


    //custom sorting function
    
    //games.sort((a,b) => a.name.localeCompare(b.name));   //Alphabetical order
    //games.sort((a,b)=>b.name.localeCompare(a.name));    //Reverse alphabetical order 
    //games.sort((a,b)=>a.hours_played - b.hours_played);     //Numberical order
    //games.sort((a,b)=> b.hours_played - a.hours_played);    //Reverse numberical order
    
    const lowHoursPlayedGames = games.filter(game => game.hours_played <30);

    const lowListItems = lowHoursPlayedGames.map(lowHoursPlayedGame=><li key= {lowHoursPlayedGame.id}>
                                                    {lowHoursPlayedGame.name}: &nbsp;
                                                    <b>{lowHoursPlayedGame.hours_played}</b>
                                                    </li>)
    const highHoursPlayedGames = games.filter(game => game.hours_played >30);

    const highListItems = highHoursPlayedGames.map(highHoursPlayedGame=><li key= {highHoursPlayedGame.id}>
                                                    {highHoursPlayedGame.name}: &nbsp;
                                                    <b>{highHoursPlayedGame.hours_played}</b>
                                                    </li>)


    const listItems = games.map(game=><li key ={game.id}>
                                    {game.name} : &nbsp;
                                    <b>{game.hours_played}</b></li>)
    //return(games)
    return(
    <div>
        <ul>{listItems}</ul>
        <ol>{listItems}</ol>
        <p>Low hours played games:</p>
        <ol>{lowListItems}</ol>
        <p>high hours played games:</p>
        <ol>{highListItems}</ol>
        <p>Using props:</p>
        <ol><h3>{category}</h3>{gamesNew}</ol>
    </div>
    )
}
export default List