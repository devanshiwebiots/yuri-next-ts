
export interface ToggleModalType {
    nestedModal?: boolean;
    closeAll?: boolean;
    toggle?: () => void;
    toggleNested?: () => void;
    toggleAll: () => void;
  }
  
  export interface ProfileModalType {
    modalOne: boolean;
    modalOneTogggle: () => void;
  }
  
  export interface BalanceModalType {
    modalThird: boolean;
    modalThirdTogggle: () => void;
  }
  
  export interface CommonYuriModalTitleType {
    heading: string;
    subHeading: string;
    text: string;
  }

  export interface StaticModalToggleProp {
    staticModalToggle: () => void;
  }

  export interface CommonFullScreenDataType {
    color: string;
    onClick: () => void;
    title: string;
    fullscreen: "sm" | "md" | "lg" | "xl" | "xxl";
    isOpen: boolean;
    toggle: () => void;
  }
  
  export interface CommonModalType {
    children?: React.ReactNode;
    size?: string;
    isOpen?: boolean;
    toggle?: () => void;
    title?: string;
    modalBodyClassName?: string;
    modalTitleClassName?: string;
    heading?: string;
    sizeTitle?: string;
    fullTitle?: string;
    staticTitle?: string;
    fullscreen?: true | "sm" | "md" | "lg" | "xl" | "xxl";
    centered?: boolean;
    onClosed?: () => void;
    backdrop?: boolean | "static";
  }
  
  export interface FormSubmitProp {
    modal: () => void;
  }