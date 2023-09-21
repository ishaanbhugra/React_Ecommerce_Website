const FilterReducer = (state, action) => {
    if (action.type === "LOAD_FILTER_PRODUCTS") {
        return {
            ...state,
            filterProducts: [...action.payload],
            allProducts: [...action.payload],
        }
    }

    if (action.type === "SET_GRID_VIEW") {
        return {
            ...state,
            gridView: true,
        }
    }

    if (action.type === "SET_LIST_VIEW") {
        return {
            ...state,
            gridView: false,
        }
    }

    if (action.type === "GET_SORT_VALUE") {
        let userSortValue = document.getElementById("sort")
        let sortValue = userSortValue.options[userSortValue.selectedIndex].value

        console.log(sortValue)
        return {
            ...state,
            sortingValue: sortValue,
        }
    }

    if (action.type === "SORTING_PRODUCTS") {

        let newSortData;
        let tempSortProduct = [...action.payload]//copy of og data//not disturbing og data

        if (state.sortingValue === "a-z") {
            newSortData = tempSortProduct.sort((a, b) => {
                return a.name.localeCompare(b.name)
            })
        }

        if (state.sortingValue === "z-a") {
            newSortData = tempSortProduct.sort((a, b) => {
                return b.name.localeCompare(a.name)
            })
        }


        if (state.sortingValue === "lowest") {
            const sortingProducts = (a, b) => {
                return a.price - b.price;
            }
            newSortData = tempSortProduct.sort(sortingProducts)
        }

        if (state.sortingValue === "highest") {
            const sortingProducts = (a, b) => {
                return b.price - a.price;
            }
            newSortData = tempSortProduct.sort(sortingProducts)
        }


        return {
            ...state,
            filterProducts: newSortData,
        }
    }


    if (action.type === "UPDATE_FILTERS_VALUE") {
        const { name, value } = action.payload

        return {
            ...state,
            filters: {
                ...state.filters,
                [name]: value,
            },
        }
    }


    if (action.type === "FILTER_PRODUCTS") {
        let { allProducts } = state
        let tempFilterProduct = [...allProducts]
        const { text, category, company, color } = state.filters
        if (text) {
            tempFilterProduct = tempFilterProduct.filter((currentElement) => {
                return currentElement.name.toLowerCase().includes(text) //.startsWith(text)
            })
        }

        if (category?.toLowerCase() !== "all") {

            tempFilterProduct = tempFilterProduct.filter((currentElement) => {
                return currentElement.category === category
            })
        }

        if (company?.toLowerCase() !== "all") {
            tempFilterProduct = tempFilterProduct.filter((currentElement) => {
                return currentElement.company.toLowerCase() === company.toLowerCase()
            })
        }

        if (color?.toLowerCase() !== "all") {
            tempFilterProduct = tempFilterProduct.filter((currentElement) =>
                currentElement.colors.includes(color)
            );
        }

        return {
            ...state,
            filterProducts: tempFilterProduct,
        }
    }

    return state
}

export default FilterReducer