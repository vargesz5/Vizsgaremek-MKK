import type { CartItem } from './cart';

export interface CheckoutProps {
  cartItems: CartItem[];
  onSuccess: () => void;
}

export interface SignUpProps {
  setIsRightPanelActive: (value: boolean) => void;
  resetTrigger: boolean;
}

export interface SignInProps {
  resetTriggerLi: boolean;
  onSuccess : () => void;
}

export interface WebshopProps {
  cart: { [id: number]: number };
  updateCart: (id: number, amount: number) => void;
}
export type SuLiProps = {
  onSuccess: () => void;
};