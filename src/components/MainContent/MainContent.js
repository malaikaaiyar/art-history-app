import React, { useState } from 'react';

import { Slider } from '@mui/material';

import { ArtContainer } from '../ArtContainer/ArtContainer';
import { KeyMovements } from '../KeyMovements/KeyMovements';

import './MainContent.scss'

function MainContent() {
    const initialState = null;
    const [fetchedCSVData, setFetchedCSVData] = useState(initialState);

    const [currentYear, setCurrentYear] = useState(1600)

    const onSliderChange = (event) => {
        setCurrentYear(event.target.value)
    }

    if (!fetchedCSVData) {
        fetch('/data/tate.csv')
        .then(res => res.text())
        .then(stringData => {
            setFetchedCSVData(stringData);
        });
    }

    if (fetchedCSVData) {
        var csv = fetchedCSVData

        var array = csv.toString().split("\n");
 
        let result = []
        
        let headers = array[0].split(';')

        for (let i = 1; i < array.length - 1; i++) {
            let obj = {}    

            let str = array[i]
            let vals = str.split(";")

            for (let i = 0; i < headers.length - 1; i++) {
                obj[headers[i]] = vals[i]
            }
            
            result.push(obj)
        }

        if (result) {
            const filteredResult = result.filter(piece => piece.data_thumbnail)

            return <div className="main">
                <Slider 
                    className="main__slider"
                    onChange={onSliderChange}
                    max={2020}
                    min={1600}
                    valueLabelDisplay='auto'
                />
                
                <KeyMovements currentYear={currentYear.toString()}/>

                <ArtContainer data={filteredResult} currentYear={currentYear.toString()}/>
            </div>;
        }
    }
    return "Loading...";
};


export { MainContent };
