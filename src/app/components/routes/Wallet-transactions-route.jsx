import { useParams } from "react-router-dom";
import WalletTransactions from "../wallets/Wallet-transactions";

export function WalletTransactionsRoute() {
	const params = useParams();
	
	return (
		<>
            <WalletTransactions walletSite={params.walletSite} />
		</>
	);
}