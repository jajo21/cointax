import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import WalletsService from "../../services/wallets-service";
import TransactionsContext from "../contexts/TransactionsContext";
import TransactionsService from "../../services/transactions-service";
import './css/wallet-transactions-route.css'

export function WalletTransactionsRoute() {
	const params = useParams();
	const [walletTransactions, setWalletTransactions] = useState(null);
	const [searchInput, setSearchInput] = useState('');
	const [error, setError] = useState(null);
	const [isPending, setIsPending] = useState(true);
	const walletsService = new WalletsService();

	const {addWalletTransactions} = useContext(TransactionsContext);

	useEffect(() => {
		const fetchData = async () => {
			let wallet = await walletsService.getWallet(params.walletSite);
			let data = await walletsService.getWalletTransactions(wallet.apiURL);
			if (typeof data === 'string') {
				setError(data);
			} else {
				setWalletTransactions(data);
			}
			setIsPending(false);
		}
		fetchData();
	}, []);

	let filteredTransactions;
	if (Array.isArray(walletTransactions) && error === null) {
		filteredTransactions = walletsService.filterTransactions(walletTransactions, searchInput);
	}

	return (
		<div className='wallet-transactions-content'>
			<h2>Transaktionshistorik från {params.walletSite}</h2>

			<div className='wallet-transactions-buttons'>
				<button className='connect-button' onClick={() => {
					addWalletTransactions(walletTransactions);
					}}
					>Koppla ihop hämtade transaktioner med manuella
				</button>

				<Link to="/wallet"><button className='go-back-button'>Gå tillbaka till Plånbok</button></Link>
			</div>

			<div className='search-bar'>
				<label htmlFor="search-bar">Sök efter köpta valutor <br />
					<input name="search-bar" placeholder='EX: BTC' type="text" onChange={(e) => setSearchInput(e.target.value)} />
				</label>
			</div>

			<div className='wallet-transactions'>
				{(Array.isArray(filteredTransactions)) && filteredTransactions.map((transaction) => {
					return (
						<div key={transaction.id} className='wallet-transaction'>
							<p>{transaction.date}</p>
							<p>{`Köpt: ${transaction.sumBought} ${transaction.cNameBought}`}</p>
							<p>{`Kostnad: ${transaction.sumSold} ${transaction.cNameSold}`}</p>
						</div>
					)
				})}
				{isPending &&
					<div>LADDAR...</div>
				}
				{error &&
					<div className="error">
						<p>Kan inte hämta transaktionerna!</p>
						<p>Status: {error}</p>
					</div>
				}
			</div>
		</div>
	);
}