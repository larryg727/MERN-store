const priceFormatter = price => {
    let dollars = price / 100;
    return '$' + dollars;
};

export { priceFormatter };
