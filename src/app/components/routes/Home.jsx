import React from 'react';
import Modal from '../modal/Modal'
/* 
---------------------------------------------------


DEN HÄR KLASSEN ÄR INTE FÄRDIG, DEN JOBBAS ÄNNU PÅ


---------------------------------------------------
 */

export default class Home extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }
    }

    render() {
        return (
            <>
                <h2>(Hem) Välkommen!</h2>
                <p>Applikationen är under konstruktion!</p>
                <p>Menyvalen som har en påbörjad funktionalitet är "Plånbok", "Transaktioner" och "Admin"</p>
                <ul>
                    <li>Plånbok: Här ska man kunna koppla sin privata historik från olika kryptobörser. Just nu finns mockad data med funktioner här.</li>
                    <li>Transaktioner: Här ska man kunna se alla sina transaktioner, även lägga till manuella transaktioner. Just nu finns bara funktionalitet för att se, lägga till och ta bort de manuella transaktionerna.</li>
                    <li>Admin: Här kan du se alla valutor som kan hanteras av applikationen just nu, du kan även lägga till och ta bort fler valutor.</li>
                </ul>

                <button onClick={() => {this.setState({isOpen: true})}}>Show Modal</button>

                <Modal
                    open={this.state.isOpen}
                    onClose={() => {this.setState({isOpen: false})}}
                    title={'Min titel'}
                >
                    <h3>Hejsan</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Totam tempore quos pariatur aspernatur nam libero aut atque
                        sapiente explicabo alias, excepturi ad a ullam recusandae sit
                        qui facilis molestias eveniet.</p>
                </Modal>
            </>
        )
    }
} 
