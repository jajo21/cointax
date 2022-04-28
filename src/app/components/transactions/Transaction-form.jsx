import React from 'react';

import './transaction-form.css';
import {useForm} from 'react-hook-form';

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
        <>
            <form 
                className='transaction-form'
                name='transaction-form'
                onSubmit={handleSubmit((data) => {
                    props.handleUpdate(data)
                })}
            >
                <h2>Lägg till transaktion</h2>

                <label>Datum på transaktionen <br/>
                    <input  
                        {...register("date", {
                            required: "Fältet är obligatoriskt"
                        })} 
                        type="date"
                    />
                </label>
                <p>{errors.date?.message}</p>

                <label>Valuta köpt<br/>
                    <input 
                        {...register("cNameBought", {
                            required: "Fältet är obligatoriskt"
                            }
                        )} 
                        placeholder="Ex: BTC"
                    />
                </label>
                <p>{errors.cNameBought?.message}</p>

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

                <label>Valuta såld<br/>
                    <input 
                        {...register("cNameSold", {
                            required: "Fältet är obligatoriskt"
                            }
                        )} 
                        placeholder="Ex: SEK"
                    />
                </label>
                <p>{errors.cNameSold?.message}</p>

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

                <input type="submit" value={'Spara'}/>
            </form>
        </>
    )
}

export default TransactionForm;