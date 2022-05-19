import React, {useContext} from 'react';
import {useForm} from 'react-hook-form';
import PropTypes from 'prop-types';
import TransactionSelect from './Transaction-select';
import TransactionsContext from '../../contexts/TransactionsContext';
import './transactions-css/transaction-form.css';

function TransactionForm(props) {
    const {addTransaction} = useContext(TransactionsContext);

    const {
        register,
        handleSubmit,
        getValues,
        formState: {errors }
    } = useForm({
        defaultValues: {
            date: '',
            cNameBought: 'BTC',
            sumBought: '',
            cNameSold: 'BTC',
            sumSold: '',
        }
    });

    return (
            <form 
                className='transaction-form'
                name='transaction-form'
                onSubmit={handleSubmit((data) => {
                    addTransaction(data);
                    props.closeForm();
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

                <button className='save-button' type='submit'>Spara</button>
            </form>
    )
}

TransactionForm.propTypes = {
    closeForm: PropTypes.func
}

export default TransactionForm;