

export interface CheckoutProps {
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

export type SuLiProps = {
  onSuccess: () => void;
};