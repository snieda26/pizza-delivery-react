import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPizzas, setActiveCategory, setSortBy, addPizzaToCart } from '../redux/actions';



import { Categories, SortPopup, PizzaBlock, LoaderBlock } from '../components'


const categoriesNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const popupNames = [{ type: 'popular', name: 'популярности' }, { type: 'price', name: 'цене' }, { type: 'name', name: 'алфавиту' }];

const Home = React.memo(() => {


    const dispatch = useDispatch()

    const pizzas = useSelector(state => state.pizzas.items)
    const isLoaded = useSelector(state => state.pizzas.isLoaded)
    const { category, sortBy } = useSelector(state => state.filters)
    const cartPizzas = useSelector(state => state.cart.items)

    const setCategory = useCallback((ind) => {
        dispatch(setActiveCategory(ind))
    }, [])


    const onSelectType = useCallback((type) => {
        dispatch(setSortBy(type))
    }, [])

    useEffect(() => {
        dispatch(fetchPizzas(sortBy, category))
    }, [category, sortBy])

    const onAddPizza = (obj) => {
        dispatch(addPizzaToCart(obj))
    }

    return (
        <div className="container">
            <div className="content__top">
                <Categories activeCategory={category} items={categoriesNames} onSelectCategory={setCategory} />
                <SortPopup onSelectType={onSelectType} items={popupNames} activeSortType={sortBy} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded ? pizzas.map(obj => {
                    return <PizzaBlock key={obj.id} addedCount={cartPizzas[obj.id] && cartPizzas[obj.id].items.length} onAddPizza={onAddPizza} {...obj} key={`${obj.name}_${obj.price}`} />
                }) : Array(10).fill(0).map((_, ind) => <LoaderBlock key={ind} />)}
            </div>
        </div>
    )
}
)


export default Home
