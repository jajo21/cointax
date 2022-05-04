import { useParams, Link } from "react-router-dom";
import WalletTransactions from "./Wallet-transactions";

export function WalletTransactionsRoute() {
	const params = useParams();
	
	return (
		<>
            <WalletTransactions walletSite={params.walletSite} />
                <Link to="/wallet">Gå tillbaka till wallet</Link>
                <br /><br />
		</>
	);
}