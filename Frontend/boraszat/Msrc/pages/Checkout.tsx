import React from 'react';
import '../Mcss/checkout.css';
import type { CheckoutProps } from '../types/props';
import { useUser } from '../context/UserContext';
import { useCart } from '../context/CartContext';
import emailjs from '@emailjs/browser';



const Checkout: React.FC<CheckoutProps> = ({ onSuccess }) => {
    const { getCartItems, clearCart } = useCart();
    const { user } = useUser();
    const cartItems = getCartItems();

    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const handleCardInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const rawValue = e.target.value.replace(/\D/g, '').slice(0, 16);
        const formatted = rawValue.replace(/(.{4})/g, '$1 ').trim();
        e.target.value = formatted;
    };

    const handleExpiryInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        let raw = e.target.value.replace(/\D/g, '').slice(0, 4);


        if (raw.length >= 2) {
            const month = parseInt(raw.slice(0, 2), 10);
            if (month > 12) {
                raw = '12' + raw.slice(2);
            } else if (month === 0) {
                raw = '01' + raw.slice(2);
            }
        }

        const formatted = raw.length >= 3 ? `${raw.slice(0, 2)}/${raw.slice(2)}` : raw;
        e.target.value = formatted;
    };


    function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        const cartItems = getCartItems();

        const cardNumber = (document.getElementById('cardnumber') as HTMLInputElement).value;
        const cardHolder = (document.getElementById('cardholder') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const expiry = (document.getElementById('expiry') as HTMLInputElement).value;
        const cvc = (document.getElementById('cvc') as HTMLInputElement).value;

        const errors: string[] = [];

        if (cardNumber.replace(/\s/g, '').length !== 16) {
            errors.push('A kártyaszámnak pontosan 16 számjegyből kell állnia.');
        }

        if (!cardHolder.trim()) {
            errors.push('A kártyabirtokos neve kötelező.');
        }

        if (!email.includes('@')) {
            errors.push('Az email cím nem érvényes.');
        }

        if (!/^\d{2}\/\d{2}$/.test(expiry)) {
            errors.push('A lejárati dátum formátuma MM/YY kell legyen.');
        }

        if (cvc.length !== 3 || !/^\d{3}$/.test(cvc)) {
            errors.push('A CVC-nek pontosan 3 számjegyből kell állnia.');
        }

        if (errors.length > 0) {
            alert(errors.join('\n'));
            return;

        }
        const templateParams = {
            order_id: 'VIN-2025-001',
            email: email,
            orders: cartItems.map(item => ({    
                name: item.name,
                units: item.quantity.toString(),
                price: (item.quantity * item.price).toString()
            })),
            cost_shipping: '1200',
            cost_tax: '500',
            cost_total: (total + 1200 + 500).toString()
        };





        emailjs.send('service_gw8s2ev', 'template_rswa0kl', templateParams, '06N54_B8CMh2bFLOV')
            .then(() => {
                alert('Sikeres vásárlás! Email elküldve.');
                onSuccess();
                clearCart();
            })
            .catch((error) => {
                console.error('Email küldési hiba:', error);
                alert('A vásárlás sikeres, de az email küldése nem sikerült.');
                onSuccess();
                clearCart();
            });
    };


    return (
        <>
            <div className="checkout-page">
                <div id="wrapper">
                    <div id="container-checkout">
                        {/* BAL OLDAL – Kosár */}
                        <div id="left-col">
                            <div id="left-col-cont">
                                <h2>Summary</h2>

                                {cartItems.map((item) => (
                                    <div className="item" key={item.id}>
                                        <div className="img-col">
                                            <img src={item.image} alt={item.name} />
                                        </div>
                                        <div className="meta-col">
                                            <h3>{item.name}</h3>
                                            <p className="price">
                                                {item.price} Ft × {item.quantity}
                                            </p>
                                        </div>
                                    </div>
                                ))}

                                <p id="total">Total</p>
                                <h4 id="total-price">
                                    {total.toFixed(2)} <span>Ft</span>
                                </h4>
                            </div>
                        </div>

                        {/* JOBB OLDAL – Fizetés */}
                        <div id="right-col">
                            <h2>Payment</h2>

                            <form className="checkout-form">
                                {/* Kártyaszám */}
                                <div className="input-with-icon full-width">
                                    <i className="fa fa-credit-card input-icon" aria-hidden="true"></i>
                                    <input
                                        className="input-field cardnumber-input"
                                        id="cardnumber"
                                        type="text"
                                        placeholder="1234 5678 9012 3456"
                                        pattern="\d{4} \d{4} \d{4} \d{4}"
                                        onChange={handleCardInput}
                                        maxLength={19}
                                        inputMode="numeric"
                                        required
                                    />
                                </div>

                                {/* Kártyabirtokos */}
                                <div className="input-with-icon full-width">
                                    <i className="fa fa-user input-icon" aria-hidden="true"></i>
                                    <input
                                        className="input-field cardholder-input"
                                        id="cardholder"
                                        type="text"
                                        placeholder="John Doe"
                                        defaultValue={user?.name || ''}
                                        required
                                    />
                                </div>
                                {/* Email */}
                                <div className="input-with-icon full-width">
                                    <i className="fa fa-envelope input-icon" aria-hidden="true"></i>
                                    <input
                                        className="input-field email-input"
                                        id="email"
                                        type="email"
                                        placeholder="you@example.com"
                                        defaultValue={user?.email || ''}
                                        required
                                    />
                                </div>

                                {/* Lejárat és CVC */}
                                <div className="left">
                                    <label htmlFor="expiry" className="checkout-label">Expiration Date</label>
                                    <div className="input-with-icon">
                                        <i className="fa fa-calendar input-icon" aria-hidden="true"></i>
                                        <input
                                            className="input-field expiry-input"
                                            id="expiry"
                                            type="text"
                                            placeholder="MM/YY"
                                            pattern="\d{2}/\d{2}"
                                            maxLength={5}
                                            minLength={5}
                                            onChange={handleExpiryInput}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="right">
                                    <label htmlFor="cvc" className="checkout-label">CVC</label>
                                    <input
                                        className="input-field cvc-input no-spinner"
                                        id="cvc"
                                        type="text"
                                        placeholder="123"
                                        maxLength={3}
                                        minLength={3}
                                        inputMode="numeric"
                                        pattern="\d{3}"
                                        required
                                        onInput={(e) => {
                                            e.currentTarget.value = e.currentTarget.value.replace(/\D/g, '').slice(0, 3);
                                        }}
                                    />
                                </div>

                                {/* Gomb */}
                                <div className="full-width">
                                    <button className="btn btn-purchase" type="button" onClick={handleSubmit}>Purchase</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Checkout;
