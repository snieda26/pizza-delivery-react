import React, { useState } from 'react'
import cn from 'classnames'
import Button from './Button'

const allSizes = [26, 30, 40]
const typeItems = ['тонкое', 'традиционное']


function PizzaBlock({ onAddPizza, addedCount, price, sizes, types, imageUrl, name, id }) {

    const [activeType, setActiveType] = useState(types[0])
    const [activeSize, setActiveSize] = useState(sizes[0])



    const handleAddPizza = () => {
        const obj = {
            name,
            price,
            id,
            image: imageUrl,
            size: activeSize,
            type: typeItems[activeType]
        }
        onAddPizza(obj)
    }

    return (
        <div>
            <div className="pizza-block">
                <img
                    className="pizza-block__image"
                    src={imageUrl}
                    alt="Pizza"
                />
                <h4 className="pizza-block__title">{name}</h4>
                <div className="pizza-block__selector">
                    <ul>
                        {typeItems.map((type, ind) => {
                            return <li onClick={() => setActiveType(ind)} className={cn({
                                active: activeType === ind,
                                disabled: !types.includes(ind)
                            })} key={`${type}_${ind}`}>{type}</li>
                        })}
                    </ul>
                    <ul>
                        {allSizes.map((size, ind) => {
                            return <li onClick={() => setActiveSize(size)} key={`${name}_${ind}`} className={cn({
                                disabled: !sizes.includes(size),
                                active: activeSize === size
                            })} > от {size} см</li>
                        })}
                    </ul>
                </div>
                <div className="pizza-block__bottom">
                    <div className="pizza-block__price">от {price} ₽</div>

                    <Button onClick={handleAddPizza}>

                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                fill="white"
                            />
                        </svg>
                        <span>Добавить</span>
                        {addedCount && <i>{addedCount}</i>}

                    </Button>
                </div>
            </div>
        </div>)
}

export default PizzaBlock
