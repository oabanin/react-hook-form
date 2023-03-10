import React, {useState} from "react";
import {Controller, useForm} from "react-hook-form";
import Header from "./Header";
import {Checkbox, FormControlLabel, Radio, RadioGroup, TextField} from "@mui/material";
import "react-datepicker/dist/react-datepicker.css";

import "./styles.css";
import ButtonsResult from "./ButtonsResult";

let renderCount = 0;


const defaultValues = {
    Native: "",
    TextField: "123",
    Select: "",
    ReactSelect: {value: "vanilla", label: "Vanilla"},
    Checkbox: false,
    switch: false,
    RadioGroup: "",
    numberFormat: 123456789,
    downShift: "apple"
};

export default function MUIForm() {
    const {handleSubmit, register, reset, control} = useForm({defaultValues});
    const [data, setData] = useState(null);
    renderCount++;

    return (
        <form onSubmit={handleSubmit(data => setData(data))} className="form">
            <Header renderCount={renderCount}/>
            <div className="container">
                <section>
                    <label>Native Input:</label>
                    <input className="input" {...register("Native")}  />
                </section>

                <section>
                    <label>MUI Checkbox</label>
                    <Controller
                        control={control}
                        name="Checkbox"
                        render={({
                                     field: {onChange, onBlur, value, name, ref},
                                     fieldState: {invalid, isTouched, isDirty, error},
                                     formState,
                                 }) => (
                            <Checkbox
                                onBlur={onBlur} // notify when input is touched
                                onChange={onChange} // send value to hook form
                                checked={value}
                                inputRef={ref}
                            />
                        )}
                    />
                </section>

                <section>
                  <label>Radio Group</label>
                    <Controller
                        control={control}
                        name="RadioGroup"
                        render={({
                                     field: {onChange, onBlur, value, name, ref},
                                     fieldState: {invalid, isTouched, isDirty, error},
                                     formState,
                                 }) => (
                            <RadioGroup onBlur={onBlur} onChange={onChange} aria-label="gender">
                                <FormControlLabel
                                    value="female"
                                    control={<Radio />}
                                    label="Female"
                                />
                                <FormControlLabel
                                    value="male"
                                    control={<Radio />}
                                    label="Male"
                                />
                            </RadioGroup>
                        )}
                    />

                </section>

                <section>
                  <label>MUI TextField</label>

                    <Controller
                        control={control}
                        name="TextField"
                        render={({
                                     field: {onChange, onBlur, value, name, ref},
                                     fieldState: {invalid, isTouched, isDirty, error},
                                     formState,
                                 }) => (
                            <TextField onChange={onChange} onBlur={onBlur} value={value}/>
                        )}
                    />
                </section>

                {/*<section>*/}
                {/*  <label>MUI Select</label>*/}
                {/*  <Controller*/}
                {/*    as={*/}
                {/*      <Select>*/}
                {/*        <MenuItem value={10}>Ten</MenuItem>*/}
                {/*        <MenuItem value={20}>Twenty</MenuItem>*/}
                {/*        <MenuItem value={30}>Thirty</MenuItem>*/}
                {/*      </Select>*/}
                {/*    }*/}
                {/*    name="Select"*/}
                {/*    control={control}*/}
                {/*  />*/}
                {/*</section>*/}

                {/*<section>*/}
                {/*  <label>MUI Switch</label>*/}
                {/*  <Controller*/}
                {/*    as={Switch}*/}
                {/*    type="checkbox"*/}
                {/*    name="switch"*/}
                {/*    control={control}*/}
                {/*  />*/}
                {/*</section>*/}

                {/*<section>*/}
                {/*  <label>MUI Slider</label>*/}
                {/*  <Controller*/}
                {/*    name="MUI_Slider"*/}
                {/*    control={control}*/}
                {/*    defaultValue={[0, 10]}*/}
                {/*    onChange={([, value]) => value}*/}
                {/*    as={<Slider valueLabelDisplay="auto" max={10} step={1} />}*/}
                {/*  />*/}
                {/*</section>*/}

                {/*<section>*/}
                {/*  <label>MUI autocomplete</label>*/}
                {/*  <MuiAutoComplete control={control} />*/}
                {/*</section>*/}

                {/*<section>*/}
                {/*  <label>React Select</label>*/}
                {/*  <Controller*/}
                {/*    as={ReactSelect}*/}
                {/*    options={options}*/}
                {/*    name="ReactSelect"*/}
                {/*    isClearable*/}
                {/*    control={control}*/}
                {/*  />*/}
                {/*</section>*/}

                {/*<section>*/}
                {/*  <label>React Datepicker</label>*/}
                {/*  <Controller*/}
                {/*    as={ReactDatePicker}*/}
                {/*    control={control}*/}
                {/*    valueName="selected" // DateSelect value's name is selected*/}
                {/*    onChange={([selected]) => selected}*/}
                {/*    name="ReactDatepicker"*/}
                {/*    className="input"*/}
                {/*    placeholderText="Select date"*/}
                {/*  />*/}
                {/*</section>*/}

                {/*<section>*/}
                {/*  <label>NumberFormat</label>*/}
                {/*  <Controller*/}
                {/*    as={NumberFormat}*/}
                {/*    thousandSeparator*/}
                {/*    name="numberFormat"*/}
                {/*    className="input"*/}
                {/*    control={control}*/}
                {/*  />*/}
                {/*</section>*/}

                {/*<section>*/}
                {/*  <Controller as={DonwShift} control={control} name="downShift" />*/}
                {/*</section>*/}
            </div>

            <ButtonsResult {...{data, reset, defaultValues}} />
        </form>
    );
}


