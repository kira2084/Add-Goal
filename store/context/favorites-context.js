import { createContext,useState } from "react";


export const  FavoritesContext=createContext({
    ids:[],
    addFavorite:(id)=>{},
    removeFavorite:(id)=>{}
});

function FavoritesContextProvider({children}){
    const [favoriteMealIds,setfavoriteMealIds]=useState([]);
    function addFavorite(id){
        setfavoriteMealIds((currentfavids)=>[...currentfavids,id]);
    }
    function removeFavorite(id){
        setfavoriteMealIds((currentfavids)=>currentfavids.filter((mealIds)=>mealIds!==id));
    }
    const values={
        ids:favoriteMealIds,
        addFavorite:addFavorite,
        removeFavorite:removeFavorite,
    }
    return <FavoritesContext.Provider value={values}>{children}</FavoritesContext.Provider>
}

export default FavoritesContextProvider;