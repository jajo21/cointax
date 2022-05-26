import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import WalletsService from "../../services/wallets-service";
import TransactionsContext from "../contexts/TransactionsContext";
import './css/wallet-transactions-route.css'

export function WalletTransactionsRoute() {
	const params = useParams();
	const [walletTransactions, setWalletTransactions] = useState(null);
	const [searchInput, setSearchInput] = useState('');
	const [error, setError] = useState(null);
	const [isPending, setIsPending] = useState(true);
	const walletsService = new WalletsService();

	const { addWalletTransactions, transactions } = useContext(TransactionsContext);
	const isWalletAdded = transactions.some(t => t.walletSite.includes(params.walletSite));

	useEffect(() => {
		const fetchData = async () => {
			const wallet = await walletsService.getWallet(params.walletSite);
			if(wallet.walletSite === 'MockKryptobörs') {
				const [data, error] = await walletsService.getWalletTransactions(wallet);
				if (data !== null) {
					setWalletTransactions(data);
				} else {
					setError(error);
				}
				setIsPending(false);
			} else {
				setError({status: '404', message: 'Ooops, denna kryptobörs API har inte kopplats ännu! Vi beklagar!'});
				setIsPending(false);
			}
		}
		fetchData();
	}, []);

	handleAddWalletTransactions = () => {
		if (!isWalletAdded) {
			addWalletTransactions(walletTransactions);
		}
	}

	let filteredTransactions;
	if (Array.isArray(walletTransactions) && error === null) {
		filteredTransactions = walletsService.filterTransactions(walletTransactions, searchInput);
	}

	return (
		<div className='wallet-transactions-content'>
			<h2>Transaktionshistorik från {params.walletSite}</h2>


			<div className='wallet-transactions-buttons'>
				{!isWalletAdded && walletTransactions !== null &&
					<button className='connect-button' onClick={() => { handleAddWalletTransactions() }}
					>Koppla ihop plånbokens historik med transaktioner
					</button>
				}
				<Link to="/wallet"><button className='go-back-button'>Gå tillbaka till Plånbok</button></Link>
			</div>

			{isWalletAdded &&
				<div className="wallet-transactions-connected">
					<p>{params.walletSite} transaktionshistorik är kopplad med alla transaktioner.</p>
				</div>
			}

			<div className='search-bar'>
				<label htmlFor="search-bar">Sök efter köpta valutor <br />
					<input name="search-bar" placeholder='EX: BTC' type="text" onChange={(e) => setSearchInput(e.target.value)} />
				</label>
			</div>

			<div className='wallet-transactions'>
				{(Array.isArray(filteredTransactions)) && filteredTransactions.map((transaction) => {
					let date = new Date(transaction.date);
					return (
						<div key={transaction.id} className='wallet-transaction'>
							<p>{date.toLocaleDateString("sv-SV")}</p>
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
						<p>{error.message}</p>
						<p>Status: {error.status}</p>
					</div>
				}
			</div>
		</div>
	);
}