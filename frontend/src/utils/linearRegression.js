export const linearRegression = (rating, discount, category, payment, costprice) => {
    const values = {
        category: {
            0: 0.07477751,
            1: -1.28411352,
            2: 0.38353776,
            3: 0.23707158,
            4: 0.41537578,
            5: 0.17335089,
        },
        payment: {
            0: -0.04016975,
            1: 0.00451285,
            2: 0.0356569,
        }
        Rating: -0.02723889,
        discount: -2.94148402,
        Cost price: 0.16647424,
        intercept: 14.971974670261101,
    };
    // gross income
    return (
        values["intercept"] +
        rating * values["Rating"] +
        discount * values["discount"] +
        values["category"][category] +
        values["payment"][payment] +
        costprice * values["Cost price"]
    );
};
