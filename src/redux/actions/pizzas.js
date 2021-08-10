import axios from "axios"

export const setLoaded = loaded => ({ type: 'SET_LOADED', payload: loaded })

export const fetchPizzas = (sortBy, category) => (dispatch) => {
    dispatch(setLoaded(false))
    axios(`/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy}&_order=desc`).then((res) => {
        return dispatch(setPizzasAC(res.data))
    })
}

export const setPizzasAC = (pizzas) => {
    return { type: 'SET_PIZZAS', payload: pizzas }
}
