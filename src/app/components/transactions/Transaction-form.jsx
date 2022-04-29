import React from 'react';

import './transactions-css/transaction-form.css';
import {useForm} from 'react-hook-form';
import TransactionSelect from './Transaction-select';

function TransactionForm(props) {
    const {
        register,
        handleSubmit,
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
                    <p>{errors.date?.message}</p>

                    <TransactionSelect 
                        register={register("cNameBought")}
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
                                    message: 'You can only insert numbers without zero in beginning'
                                }
                            })} 
                            placeholder="Ex: 1"
                        />
                    </label>
                    <p>{errors.sumBought?.message}</p>

                    <TransactionSelect 
                        register={register("cNameSold")}
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
                                    message: 'You can only insert numbers without zero in beginning'
                                }
                            })} 
                            placeholder="Ex: 40000"
                        />
                    </label>
                    <p>{errors.sumSold?.message}</p>

                    <button type='submit'>Spara</button>
                </form>
            </div>
        </div>
    )
}

export default TransactionForm;