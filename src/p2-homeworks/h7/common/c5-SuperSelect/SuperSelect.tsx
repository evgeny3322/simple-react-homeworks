import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import s from './SuperSelect.module.css'
import {Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@material-ui/core";

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: any[] = options ? options.map((e, i) => (
        <option className={''} key={e + '-' + i} value={e}>
            {e}
        </option>
    )) : [] // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange && onChange(e);
        onChangeOption && onChangeOption(e.currentTarget.value);
    }
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };
    return (
        <div>
            <select onChange={onChangeCallback} {...restProps}>
                {mappedOptions}
            </select>
            {/*<Box sx={{minWidth: 120}}>*/}
            {/*    <FormControl fullWidth>*/}
            {/*        <InputLabel id="demo-simple-select-label">Age</InputLabel>*/}
            {/*        <Select onChange={onChangeCallback} {...restProps}>*/}
            {/*            {mappedOptions}*/}
            {/*        </Select>*/}
            {/*    </FormControl>*/}
            {/*</Box>*/}
        </div>

    )
}

export default SuperSelect