const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        // currency: 'USD'
        currency: 'INR'
    }).format(amount)
}
 
export default formatPrice;