import React from 'react';
import Modal from '../modal/Modal'
/* 
---------------------------------------------------


DEN HÄR KLASSEN ÄR INTE FÄRDIG, DEN JOBBAS ÄNNU PÅ


---------------------------------------------------
 */

export default class Home extends React.Component {

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
            </>
        )
    }
} 
