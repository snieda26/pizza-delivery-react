const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
}

const getTotalPrice = (pizzas) => pizzas.reduce((sum, obj) => obj.price + sum, 0)


const _get = (obj, path) => {
    const [firstKey, ...keys] = path.split('.');
    return keys.reduce((val, key) => {
        return val[key];
    }, obj[firstKey]);
};

const getTotalSum = (obj, path) => {
    return Object.values(obj).reduce((sum, obj) => {
        const value = _get(obj, path);
        return sum + value;
    }, 0);
};

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PIZZAS_TO_CART': {
            const currentPizzaItems = state.items[action.payload.id] ? [...state.items[action.payload.id].items, action.payload] : [action.payload]


            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentPizzaItems,
                    totalPrice: getTotalPrice(currentPizzaItems),
                    totalCount: currentPizzaItems.length
                }
            }
            const items = Object.values(newItems).map(obj => obj.items)
            const allPizzas = [].concat.apply([], items)
            const totalPrice = getTotalPrice(allPizzas)

            return {
                ...state,
                items: newItems,
                totalPrice: totalPrice,
                totalCount: state.totalCount + 1
            }
        }
        case 'REMOVE_CART_ITEM': {

            const newItems = { ...state.items }
            const currentTotalPrice = newItems[action.payload].totalPrice
            const currentTotalCount = state.totalCount - newItems[action.payload].items.length
            delete newItems[action.payload]



            return {
                ...state,
                items: newItems,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: currentTotalCount
            }
        }

        case 'PLUS_CART_ITEM': {
            const newObjItems = [
                ...state.items[action.payload].items,
                state.items[action.payload].items[0],
            ];
            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: newObjItems,
                    totalPrice: getTotalPrice(newObjItems),
                },
            };

            const totalCount = getTotalSum(newItems, 'items.length');
            const totalPrice = getTotalSum(newItems, 'totalPrice');

            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice,
            };
        }
        case 'MINUS_CART_ITEM': {
            const oldItems = state.items[action.payload].items;
            const newObjItems =
                oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;
            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: newObjItems,
                    totalPrice: getTotalPrice(newObjItems),
                },
            };

            const totalCount = getTotalSum(newItems, 'items.length');
            const totalPrice = getTotalSum(newItems, 'totalPrice');

            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice,
            };
        }

        // case 'MINUS_CART_ITEM': {
        //     const oldItems = state.items[action.payload].items
        //     const currentPizzaPrice = state.items[action.payload].items[0].price
        //     const newItems = oldItems.length > 1 ? oldItems.slice(1) : oldItems

        //     if (newItems.length < 1) {
        //         return state
        //     }

        //     return {
        //         ...state,
        //         items: {
        //             ...state.items,
        //             [action.payload]: {
        //                 items: newItems,
        //                 totalPrice: getTotalPrice(newItems)
        //             }
        //         },
        //         totalPrice: state.totalPrice - currentPizzaPrice,
        //         totalCount: state.totalCount - 1
        //     }
        // }
        case 'CLEAR_CART':
            return {
                ...state,
                items: {},
                totalCount: 0,
                totalPrice: 0
            }


        default:
            return state
    }
}

export default cart