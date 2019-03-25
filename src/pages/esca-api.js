import React from 'react'
import Layout from '../components/layouts/default'

import { Cart, openCart, addToCart } from '@escaladesports/zygote-cart'
import * as escaApi from '@escaladesports/zygote-plugin-esca-api'
import * as standardPayment from '@escaladesports/zygote-cart/dist/plugins/zygote-plugin-standard-billing'

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
						id: `35-7090-2`,
						name: `Microfiber Bean Bags with Tub`,
						image: `https://images.salsify.com/image/upload/s--ibaII9O1--/w_75,h_75,c_pad/tcuv43grz2uec6z5twln.jpg`,
						description: `Microfiber Bean Bags with Tub.`,
						price: 3499,
						shippable: true,
					})}>Microfiber Bean Bags with Tub</button>
				</div>

				<button onClick={openCart}>Open Cart</button>
				<Cart
					header={<img style={{ maxWidth: `200px`}} src='/uploads/backend-logo.png' />}
					cartHeader={<div>With FREE shipping!</div>}
					cartFooter={<div>* Free shipping, except Alaska and Hawaii</div>}

					infoWebhook='/api/inventory/load'
					plugins={[
						standardPayment,
						escaApi,
					]}
					styles={{
						fontColor: `#333`,
						borderColor: `#c0bfbf`,
						primaryColor: `#21b7ef`,
						backgroundColor: `#fff`,
						overlayColor: `rgba(33,183,239,0.7)`,
						fontFamily: `Roboto`,
					}}
				/>
			</Layout>
		)
	}
}
