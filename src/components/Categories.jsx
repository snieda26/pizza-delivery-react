import React from 'react'
import { setActiveCategory } from '../redux/actions'
import { useDispatch } from 'react-redux'

const Categories = React.memo(({ items, activeCategory }) => {

    const dispatch = useDispatch()

    const setCategory = (ind) => {
        dispatch(setActiveCategory(ind))
    }

    return (
        <div className="categories">
            <ul>
                <li onClick={() => setCategory(null)} className={activeCategory === null ? 'active' : ''}>Все</li>
                {items.map((name, ind) => {
                    return <li onClick={() => setCategory(ind)} className={activeCategory === ind ? 'active' : ''} key={`${name}_${ind}`}>{name}</li>
                })}
            </ul>
        </div>

    )
})

export default Categories
