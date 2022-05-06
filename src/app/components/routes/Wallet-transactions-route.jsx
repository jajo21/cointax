import { useParams } from "react-router-dom";
import WalletTransactions from "../wallet/Wallet-transactions";

export function WalletTransactionsRoute() {
	const params = useParams();
	
	return (
		<>
            <WalletTransactions walletSite={params.walletSite} />
		</>
	);
}