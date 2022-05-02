import React from 'react';

import './transactions-css/transaction-form.css';
import {useForm} from 'react-hook-form';
import TransactionSelect from './Transaction-select';

function TransactionForm(props) {
    const {
        register,
        handleSubmit,
        getValues,
        formState: {errors }
    } = useForm({
        defaultValues: {
            date: '',
            cNameBought: '',
            sumBought: '',
            cNameSold: '',
            sumSold: '',
        }
    });

    return (
        <div className='transaction-form-background'>
            <div className='transaction-form-container'>
                <div className='transaction-form-close-div'>
                    <button onClick={() => props.closeModal()}> X </button>
                </div>

                <div className='transaction-form-title'>
                    <h2>Lägg till transaktion</h2>
                </div>
                <form 
                    className='transaction-form'
                    name='transaction-form'
                    onSubmit={handleSubmit((data) => {
                        props.handleSubmit(data);
                        props.closeModal();
                    })}
                >
                    <label>Datum<br/>
                        <input  
                            {...register("date", {
                                required: "Fältet är obligatoriskt"
                            })} 
                            type="date"
                        />
                    </label>
                    <p className='error'>{errors.date?.message}</p>

                    <TransactionSelect 
                        register={register("cNameBought", {
                            required: "Fältet är obligatoriskt",
                            validate: value => value !== getValues('cNameSold') || 'Du måste ha sålt och köpt olika valutor!'
                        })}
                        title="Valuta köpt"
                        errors={errors.cNameBought?.message}
                        show="BTC"
                    />

                    <label>Antal<br/>
                        <input 
                            {...register("sumBought", {
                                required: "Fältet är obligatoriskt", 
                                pattern: {
                                    value: /^(0|[1-9][0-9]*)$/,
                                    message: 'Du kan bara skriva in nummer utan siffran 0 i början'
                                }
                            })} 
                            placeholder="Ex: 1"
                        />
                    </label>
                    <p className='error'>{errors.sumBought?.message}</p>

                    <TransactionSelect 
                        register={register("cNameSold", {
                            required: "Fältet är obligatoriskt",
                            validate: value => value !== getValues('cNameBought') || 'Du måste ha sålt och köpt olika valutor!'
                        })}
                        title="Valuta såld"
                        errors={errors.cNameSold?.message}
                        show="SEK"
                    />

                    <label>Summa<br/>
                        <input 
                            {...register("sumSold", {
                                required: "Fältet är obligatoriskt", 
                                pattern: {
                                    value: /^(0|[1-9][0-9]*)$/,
                                    message: 'Du kan bara skriva in nummer utan siffran 0 i början'
                                }
                            })} 
                            placeholder="Ex: 40000"
                        />
                    </label>
                    <p className='error'>{errors.sumSold?.message}</p>

                    <button type='submit'>Spara</button>
                </form>
            </div>
        </div>
    )
}

export default TransactionForm;