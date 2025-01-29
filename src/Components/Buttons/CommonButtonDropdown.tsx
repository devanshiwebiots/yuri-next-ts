import { Href } from "@/Constants";
import { useState } from "react";
import { ButtonGroup, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";

export type Direction = "up" | "down" | "start" | "end" | "bottom";
export interface BasicDropdownType {
  toggleClass: string;
  groupClass?: string;
  bodyClass?: string;
  position?: Direction;
  text: string;
  menulist: string[];
}

export interface DropdownCommonProp {
  item: BasicDropdownType;
}

export default function DropdownCommon({ item }: DropdownCommonProp) {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <ButtonGroup className={item.groupClass}>
      <Dropdown className={item.groupClass} isOpen={open} toggle={toggle}>
        <DropdownToggle color={item.toggleClass} caret>
          {item.text}
        </DropdownToggle>
        <DropdownMenu className={item.bodyClass}>
          {item.menulist &&
            item.menulist.map((item, index) => (
              <DropdownItem href={Href} key={index}>
                {item}
              </DropdownItem>
            ))}
        </DropdownMenu>
      </Dropdown>
    </ButtonGroup>
  );
}
