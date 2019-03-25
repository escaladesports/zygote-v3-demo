import React from 'react'
import { Cart, openCart, addToCart } from '@escaladesports/zygote-cart'

import Layout from '../components/layouts/default'

export default class HomePage extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			open: false,
		}
	}
	render() {
		return (
			<Layout>
				<div>
					<button onClick={() => addToCart({
						id: `TESTA`,
						name: `7.5' Covington Billiard Table`,
						image: `https://images.salsify.com/image/upload/s--5scl3VX0--/w_75,h_75,c_pad/g8gkpmmhuhqzrqxu6boh.jpg`,
						description: `Beautiful and refined, the 8' Minnesota Fats Covington Pool Table with Dur-A-Bond play bed will make a stunning centerpiece for your game room. Carved...`,
						price: 999,
						shippable: true,
						stock: 999999,
					})}>7.5' Covington Billiard Table</button>
				</div>

				<button onClick={openCart}>Open Cart</button>
				<Cart
					stripeApiKey='pk_test_0EMVTB6nEzmrjGA0Fc0kyVOR'
					infoWebhook='/.netlify/functions/info-stripe'
					orderWebhook='/.netlify/functions/order-stripe'
				/>
			</Layout>
		)
	}
}
