import {useState} from 'react'
import RecipeItem from './recipeItem';

const RecipeList = ()=>{
    // state for the list recipes 
    const[recipes,setRecipes]=useState([
        {id:1,name:'Spaghetti Bolognese',description:'Italian Pasta'},
        {id:2,name:'Chicken Curry',description:'A spicy meal with chicken pieces '},
        {id:3,name:'Vegetables Stir Fry',description:'mix of vegetables '}
    ])

    // state for the new recipe 
    const [recipeName,setRecipeName]=useState('');
    const[recipeDescritpion,setRecipeDescription]=useState('')

    const handleNameChange=(event)=>{
        setRecipeName(event.target.value)
    };
    const handleDescriptionChange=(event)=>{
        setRecipeDescription(event.target.value)
    };

    const handleAddRecipe = (event)=>{
        event.preventDefault();
        if(recipeName&&recipeDescritpion){
            const newRecipe={
                id:recipes.length+1,
                name:recipeName,
                description:recipeDescritpion,
            }
            setRecipes([...recipes,newRecipe])
            setRecipeName('');
            setRecipeDescription('');
        }
       


    };
    return(
        <div className='recipe-list'>
            <h2>Recipe List</h2>
            <form onSubmit={handleAddRecipe}>
                <input type="text" placeholder="Recipe Name" value={recipeName} onChange={handleNameChange}></input>
                <input type="text" placeholder="Recipe Description" value={recipeDescritpion} onChange={handleDescriptionChange}></input>
                <button type="submit">Add Recipe</button>
            </form>
            {recipes.map((recipe)=>(
                <RecipeItem key={recipe.id} name={recipe.name} description={recipe.description}/>
            ))}
        </div>
    )


}
export default RecipeList;
