import {useForm, FormProvider} from "react-hook-form";
import Many from "./many/many";

export default function App() {
    //const methods = useForm();


    // console.log(methods.watch("example")); // watch input value by passing the name of it
    // console.log(methods)
    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
       // <FormProvider {...methods}>
            <Many/>
       // </FormProvider>
    );
}