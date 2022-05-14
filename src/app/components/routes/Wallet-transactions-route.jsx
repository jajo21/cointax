import React, {useState, useEffect} from "react";
import { useParams, Link } from "react-router-dom";
import WalletsService from "../../services/wallets-service";
import './css/wallet-transactions-route.css'

export function WalletTransactionsRoute() {
	const params = useParams();
	const [transactions, setTransactions] = useState(null);
	const [searchInput, setSearchInput] = useState('');
	const walletsService = new WalletsService();

	useEffect(() => {
		const fetchData = async () => {
			let wallet = await walletsService.getWallet(params.walletSite);
			let transactions = await walletsService.getWalletTransactions(wallet.apiURL);
			setTransactions(transactions);
		}
		fetchData();
	}, []);

	const filteredTransactions = walletsService.filterTransactions(transactions || [], searchInput);
	
	return (
		<div className='wallet-transactions-content'>
			<h2>Transaktionshistorik från {params.walletSite}</h2>

			<div className='wallet-transactions-buttons'>
				<button className='connect-button'>Koppla ihop hämtade transaktioner med manuella</button>
				<Link to="/wallet"><button className='go-back-button'>Gå tillbaka till Plånbok</button></Link>
			</div>

			<div className='search-bar'>
				<label htmlFor="search-bar">Sök efter köpta valutor <br />
					<input name="search-bar" placeholder='EX: BTC' type="text" onChange={(e) => setSearchInput(e.target.value)}/>
				</label>
			</div>

			<div className='wallet-transactions'>
				{filteredTransactions?.map((transaction) => {
					return (                       
						<div key={transaction.id} className='wallet-transaction'>
							<p>{transaction.date}</p>
							<p>{`Köpt ${transaction.cNameBought}: ${transaction.sumBought}`}</p>
							<p>{`Sålt ${transaction.cNameSold}: ${transaction.sumSold}`}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}