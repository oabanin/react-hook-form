import React from "react";
import { useFieldArray } from "react-hook-form";
import NestedArray from "./nestedFieldArray";

let renderCount = 0;

export default function FieldArray({ control, register, setValue, getValues }) {
    const { fields, append, remove, prepend } = useFieldArray({
        control,
        name: "test"
    });
    console.log(fields);


    renderCount++;

    return (
        <>
            <ul>
                {fields.map((item, index) => {
                    return (
                        <li key={item.id}>
                            <input
                                {...register(`test.${index}.name`)}
                                //defaultValue={item.name}
                            />

                            <button type="button" onClick={() => remove(index)}>
                                Delete
                            </button>
                            <NestedArray nestIndex={index} {...{ control, register }} />
                        </li>
                    );
                })}
            </ul>

            <section>
                <button
                    type="button"
                    onClick={() => {
                        append({ name: "append" }, );
                    }}
                >
                    append
                </button>

                <button
                    type="button"
                    onClick={() => {
                        append({ name: "appendb2v2", nestedArray: [{ field1: "appendv2", field2: "appendv2" }] }, );
                    }}
                >
                  append   v2 with nestsed
                </button>

                <button
                    type="button"
                    onClick={() => {
                        setValue("test", [
                            ...getValues().test,
                            {
                                name: "append",
                                nestedArray: [{ field1: "append", field2: "append" }]
                            }
                        ]);
                    }}
                >
                    Append Nested
                </button>

                <button
                    type="button"
                    onClick={() => {
                        prepend({ name: "prepend" });
                    }}
                >
                    prepend
                </button>

                <button
                    type="button"
                    onClick={() => {
                        setValue("test", [
                            {
                                name: "prepend",
                                nestedArray: [{ field1: "Prepend", field2: "Prepend" }]
                            },
                            ...getValues().test
                        ]);
                    }}
                >
                    prepend Nested
                </button>
            </section>

            <span className="counter">Render Count: {renderCount}</span>
        </>
    );
}
