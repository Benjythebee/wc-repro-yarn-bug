import { initializeConnector } from "@web3-react/core";
import { WalletConnect } from "@web3-react/walletconnect-v2";
export const [walletConnect, hooks] = initializeConnector(
	actions =>
		new WalletConnect({
			actions,
			options: {
				showQrModal:true,
				projectId: 'snap-shack-cyberbrokers',
				chains: [1,5],
				rpcMap: {
					'1':''
				}
			},
		}),
);

function MyApp({ Component, pageProps }) {
	walletConnect;
	return (
        <div></div>
	);
}

export default MyApp;
