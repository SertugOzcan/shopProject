export const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {...state, cartProducts: [...state.cartProducts,{...action.payload, amount: 1}]}

        case 'INCREASE_PRODUCT_AMOUNT':
            return {...state, cartProducts: state.cartProducts.map((product) => {
                if(product.id === action.payload.id){
                    product = {...product, amount: product.amount + 1 };
                }
                return product;
            })
            };

        case 'DECREASE_PRODUCT_AMOUNT':
            return {...state, cartProducts: state.cartProducts.map((product) => {
                if(product.id === action.payload.id){
                    product = { ...product, amount: product.amount - 1 };
                }
                return product;
            })
            };

        case 'REMOVE_FROM_CART':
            return {...state, cartProducts: state.cartProducts.filter((product) => product.id !== action.payload.id)}

        case 'RESET_CART':  // YAPILMADI
            return state;
        default:
            return state;
    }
};