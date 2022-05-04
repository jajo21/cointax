import { useParams, Link } from "react-router-dom";
import WalletTransactions from "../wallets/Wallet-transactions";

export function WalletTransactionsRoute() {
	const params = useParams();
	
	return (
		<>
            <WalletTransactions walletSite={params.walletSite} />
                <Link to="/wallet">
					<button>Gå tillbaka till wallet</button>
				</Link>
                <br /><br />
		</>
	);
}