import {useFormContext} from "react-hook-form";

const Test = () => {
    const methods = useFormContext();
    const onSubmit = data => console.log(data);
    return <div>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input defaultValue="test" {...methods.register("example")} />

            {/* include validation with required or other standard HTML validation rules */}
            <input {...methods.register("exampleRequired", {required: true})} />
            {/* errors will return when field validation fails  */}
            {methods.formState.errors.exampleRequired && <span>This field is required</span>}

            <input type="submit"/>
        </form>
    </div>
}

export default Test;