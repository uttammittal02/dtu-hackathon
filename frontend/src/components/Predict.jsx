import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button, TextField } from "@mui/material";

import "./css/Predict.css";
import { linearRegression } from "../utils/linearRegression";

const Predict = () => {
    const [category, setCategory] = useState("");
    const [payment, setPayment] = useState("");
    const [rating, setRating] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [income, setIncome] = useState(0);

    const handleChangePayment = (event) => {
        setPayment(event.target.value);
    };

    const handleChangeCategory = (event) => {
        setCategory(event.target.value);
    };

    const handlePredict = () => {
        setIncome(linearRegression(rating, discount, category, payment));
    };

    return (
        <div className="predict-form">
            <h1>Gross Income</h1>
            <FormControl fullWidth>
                <TextField
                    id="standard-basic"
                    label="Rating (out of 10)"
                    variant="standard"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                />
            </FormControl>
            <FormControl fullWidth>
                <TextField
                    id="standard-basic-2"
                    label="Discount(upto 5%)"
                    variant="standard"
                    value={discount}
                    onChange={(e) => setDiscount(e.target.value)}
                />
            </FormControl>

            <FormControl fullWidth>
                <InputLabel id="category">Category</InputLabel>
                <Select
                    labelId="category"
                    id="simple-select"
                    value={category}
                    label="Category"
                    onChange={handleChangeCategory}
                >
                    <MenuItem value={0}>Electronic Accessories</MenuItem>
                    <MenuItem value={1}>Fashion Accessories</MenuItem>
                    <MenuItem value={2}>Food and beverages</MenuItem>
                    <MenuItem value={3}>Health and Beauty</MenuItem>
                    <MenuItem value={4}>Home and lifestyle</MenuItem>
                    <MenuItem value={5}>Sports and Travel</MenuItem>
                </Select>
            </FormControl>
            <FormControl fullWidth>
                <InputLabel id="payment">Payment gateway</InputLabel>
                <Select
                    labelId="payment"
                    id="simple-select-2"
                    value={payment}
                    label="Payment Gateway"
                    onChange={handleChangePayment}
                >
                    <MenuItem value={0}>Cash</MenuItem>
                    <MenuItem value={1}>Credit card</MenuItem>
                    <MenuItem value={2}>E wallet</MenuItem>
                </Select>
            </FormControl>

            <FormControl>
                <Button variant="contained" onClick={handlePredict}>
                    PREDICT!
                </Button>
            </FormControl>

            {income > 0 && (
                <p>
                    The gross income is{" "}
                    {Math.round(income * 1000) / 1000}
                </p>
            )}
        </div>
    );
};

export default Predict;
