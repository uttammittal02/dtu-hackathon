export const linearRegression = (rating, discount, category, payment) => {
    const values = {
        Rating: -0.04585547,
        discount: -2.79027955,
        category: {
            0: -0.31365909,
            1: -1.00786882,
            2: 0.47200465,
            3: 0.10098165,
            4: 0.34548805,
            5: 0.40305357,
        },
        payment: {
            0: 0.15643702,
            1: -0.19539297,
            2: 0.03895595,
        },
        intercept: 14.971974670261101,
    };
    // gross income
    return (
        values["intercept"] +
        rating * values["Rating"] +
        discount * values["discount"] +
        values["category"][category] +
        values["payment"][payment]
    );
};
