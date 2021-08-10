import React from 'react'

const Categories = React.memo(({ items, activeCategory, onSelectCategory }) => {

    return (
        <div className="categories">
            <ul>
                <li onClick={() => onSelectCategory(null)} className={activeCategory === null ? 'active' : ''}>Все</li>
                {items.map((name, ind) => {
                    return <li onClick={() => onSelectCategory(ind)} className={activeCategory === ind ? 'active' : ''} key={`${name}_${ind}`}>{name}</li>
                })}
            </ul>
        </div>

    )
})

export default Categories
