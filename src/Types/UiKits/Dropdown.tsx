interface itemArray extends React.HTMLAttributes<HTMLElement> {
  btnColor?: string;
  btnText: string;
  items: ItemsArray[];
  dropclassName?: string;
  toggleClassName?: string;
  size?: string;
}
export interface CommonDropdownProp {
  item: itemArray;
}

interface ItemsArray {
  item?: string;
  divider?: boolean;
}

export interface CommonAlignmentProp {
  value: {
    items: ItemProps[];
    btnText: string;
    btnColor: string;
    directions: any;
    dropclassName: string;
  };
}
interface ItemProps {
  item: string;
}

interface ItemsArrays {
  item: string;
}
interface ArrayType {
  btnColor: string;
  btnText: string;
  items: ItemsArrays[];
}
export interface SplitButtonDropdownProp {
  item: ArrayType;
}
interface Itemtype {
  id: number;
  placement?: any;
  tooltip?: string | JSX.Element;
  btnColor?: string;
  btntext?: string;
  className?: string;
}

export interface CommonTooltipProp {
  item: Itemtype;
  outline?: boolean;
}
