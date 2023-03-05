import {useForm} from "react-hook-form";

const TTT = () => {
    const {
        getValues,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: { months: ['January'] },
    })
    const onSubmit = data => console.log(data);
    return (
        <div className='mx-auto justify-center p-32 flex'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='p-2'>
                    <label htmlFor=''>January</label>
                    <input
                        type='checkbox'
                        value='January'
                        placeholder='January'
                        {...register('months')}
                        className='mx-3'
                    />
                </div>
                <div className='p-2'>
                    <label htmlFor=''>February</label>
                    <input
                        type='checkbox'
                        value='February'
                        placeholder='February'
                        {...register('months')}
                        className='mx-3'
                    />
                </div>
                <input type='submit' />
            </form>
        </div>
    )
}

export default TTT;