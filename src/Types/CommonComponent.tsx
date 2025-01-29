interface SubTitleObjectProps {
    text?: string;
    code?: string;
};
export interface CommonCardHeaderProps {
    headClass?: string;
    title: string;
    subTitle?: SubTitleObjectProps[];
    titleClass?: string;
};

export interface TableHeadItems {
    class?: string;
    name: string;
}

export interface TableHeaderProp {
    headeData: TableHeadItems[]
}