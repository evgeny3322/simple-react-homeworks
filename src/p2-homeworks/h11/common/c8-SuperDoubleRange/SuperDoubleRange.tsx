import React from 'react'
import {Box, Grid, Slider} from "@mui/material";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки

    const handleChange = (event: Event, value: number | number[]) => {
        onChangeRange && onChangeRange(value as [number, number]);
    };

    return (
        <>
            {/*DoubleRange*/}
            <Grid container
                  justifyContent="center">
                <Slider
                    sx={{width: 300}}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"/>
            </Grid>

        </>
    )
}

export default SuperDoubleRange
