import React, { useState, useEffect } from "react";
import useAuth from '../utils/useAuth';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Input from '../components/Input';
import Button from "../components/Button";
var tf = require('@tensorflow/tfjs');
// stats page will show a graph of Revenue vs time then a dot connecting to the predicted value.


const Stats = () => {

    useAuth();
    const [resultData, setResultData] = useState('')

    const [userState, setUserState] = useState({

        expensesVal: '',
        monthlyEarnings: '',
        predictionMonth: ''
    })
    useEffect(() => {
    }, [resultData])
    const handleChange = e => {
        const value = e.target.value;
        const name = e.target.name;

        setUserState({
            ...userState,
            [name]: value
        })

    }

    const handleSubmit = e => {
        //when submitted will grab the value and the name of the users input and then add it to the state.
        e.preventDefault();
        const value = e.target.value;
        const name = e.target.name;

        setUserState({ ...userState, [name]: value })



        const { expensesVal, monthlyEarnings, predictionMonth } = userState
        var testmon = monthlyEarnings.split(',').map(x => +x)


        predictor(expensesVal, monthlyEarnings, predictionMonth);
    }


    function predictor(expensesVal, monthlyEarnings, predictionMonth) {


        var xUnitsCountArr = monthlyEarnings.split(',');
        // creates a new array ignoring all the commas so i can count the array length
        const xUnitVal = [];
        // on a graph this is the variable where the x units are contained

        xUnitsCount(xUnitsCountArr.length + 1);
        // 5 values inputted then get 6, etc

        function xUnitsCount(limit) {
            // this function counts for us so we can get the length the user inputted correctly and don't have to worry about any x value limiting.
            for (var i = 0; i < limit; i++) {


                xUnitVal.push(i);
            }
        }
        // adds one to account for the expenses x value hence why starting at 0 rather than 1 
        // 0,1,2,3,...

        var revenue = [];
        for (let index = 0; index < xUnitsCountArr.length; index++) {
            revenue.push(xUnitsCountArr[index] - expensesVal);
            // does basic math here so the user does not have to do math but rather can just input data and go!

        }
        const model = tf.sequential();
        model.add(tf.layers.dense({ units: 1, inputShape: [1] }));

        model.compile({ loss: 'meanSquaredError', optimizer: 'sgd', metrics: ['accuracy'] })

        const yUnitVal = revenue
        yUnitVal.unshift(-expensesVal)

        const xs = tf.tensor2d(xUnitVal, [xUnitVal.length, 1])
        const ys = tf.tensor2d(yUnitVal, [xUnitVal.length, 1])
        if (predictionMonth < xUnitVal.length + 1) { alert("please make sure you are asking to predict in the future!, make sure to add one month") }
        else {
            model.fit(xs, ys, { epochs: 100 }).then(() => {
                model.predict(tf.tensor2d([parseFloat(predictionMonth)], [1, 1])).print();
                //  console.log(model.predict(tf.tensor2d([parseFloat(predictionMonth-xUnitVal)], [1,1])))
                let resultTest = [];
                // console.log(resultTest);
                // gave me an error here so i ended up having to parsefloat
                for (let index = 14; index < 24; index++) {
                    resultTest.push(model.predict(tf.tensor2d([parseFloat(predictionMonth)], [1, 1])).toString()[index])

                }

                setResultData(resultTest);

            });
        }
        // call populateChart
        console.log(resultData)
    }

    return (
        //   wrap body tag here so the page looks all pretty

        <div>
            <Navbar />
            <Header />
            <form
                className="control" onSubmit={handleSubmit}>
                <Input
                    type="text"

                    value={userState.expensesVal}
                    name="expensesVal"
                    handleChange={handleChange}
                    placeholder="Please input your expenses, do not include dollar signs"
                />

                <Input
                    value={userState.monthlyEarnings}
                    handleChange={handleChange}
                    name="monthlyEarnings"
                    placeholder="Please input your Total Monthly Earnings in  seperating each month with a comma.Also, please do not include dollar signs"
                />

                <Input
                    type="number"
                    name="predictionMonth"
                    value={userState.predictionMonth}
                    handleChange={handleChange}
                    placeholder="How many months in the future would you like me to predict?"
                />
                <Button
                    name="Predict for me!"
                    type="submit"
                    color="#fb8500" />

                <p>your value for your monthly earnings is <p>{resultData}</p>

                </p>
                
            </form>
            <section id = "main"></section>
            <Footer />
        </div>
    );
}

export default Stats;
