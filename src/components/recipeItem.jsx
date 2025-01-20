// a functional component that displays a single reipe item
const RecipeItem=({name,description})=>{
    return (
        <div className="recipe-item">
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    )
}
export default RecipeItem;