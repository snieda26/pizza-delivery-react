export const setSortBy = (type) => {
    return { type: 'SET_SORT_BY', payload: type }

}

export const setActiveCategory = ind => {
    return { type: 'SET_CATEGORY', payload: ind }
}