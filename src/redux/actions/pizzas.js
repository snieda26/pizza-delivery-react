import axios from "axios"

export const setLoaded = loaded => ({ type: 'SET_LOADED', payload: loaded })

export const fetchPizzas = () => (dispatch) => {
    dispatch(setLoaded(false))
    axios('http://localhost:3001/db.json').then((res) => dispatch(setPizzasAC(res.data.pizzas)))
}



export const setPizzasAC = (pizzas) => {
    return { type: 'SET_PIZZAS', payload: pizzas }
}
