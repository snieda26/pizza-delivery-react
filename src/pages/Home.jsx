import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPizzas } from '../redux/actions';

import { Categories, SortPopup, PizzaBlock, LoaderBlock } from '../components'

const categoriesNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const popupNames = [{ type: 'popular', name: 'популярности' }, { type: 'price', name: 'цене' }, { type: 'alphabet', name: 'алфавиту' }];


let a = 0;

const Home = React.memo(() => {

    const dispatch = useDispatch()
    console.log('Render Home', ++a)

    const pizzas = useSelector(state => state.pizzas.items)
    const isLoaded = useSelector(state => state.pizzas.isLoaded)
    const activeCategory = useSelector(state => state.filters.category)

    useEffect(() => {
        dispatch(fetchPizzas())
    }, [activeCategory])

    return (
        <div className="container">
            <div className="content__top">
                <Categories activeCategory={activeCategory} items={categoriesNames} />
                <SortPopup items={popupNames} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded ? pizzas.map(obj => {
                    return <PizzaBlock key={obj.id} {...obj} key={`${obj.name}_${obj.price}`} />
                }) : Array(10).fill(<LoaderBlock />)}
            </div>
        </div>
    )
}
)
export default Home
