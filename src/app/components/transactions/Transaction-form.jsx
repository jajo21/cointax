import React from 'react';
import {useForm} from 'react-hook-form';
import PropTypes from 'prop-types';
import TransactionSelect from './Transaction-select';
import Modal from '../modal/Modal';
import './transactions-css/transaction-form.css';

function TransactionForm(props) {
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
            cNameSold: 'SEK',
            sumSold: '',
        }
    });

    return (
        <Modal
            show={props.modalValue}
            closeModal={() => props.closeModal()}
            title={'Lägg till transaktion'}
        >

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
                    coins={props.coins}
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
                    coins={props.coins}
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
        </Modal>
    )
}

TransactionForm.propTypes = {
    closeModal: PropTypes.func,
    modalValue: PropTypes.bool,
    handleSubmit: PropTypes.func,
    coins: PropTypes.array
}

export default TransactionForm;