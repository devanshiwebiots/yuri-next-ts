export interface CommonPopoverProp {
    key?: number;
    item: ItemProp;
  }
  interface ItemProp {
    id: number;
    placement?: any;
    Popoverheader?: string;
    Popoverbody?: string;
    btnColor?: string;
    btntext?: string;
    trigger?: string;
  }