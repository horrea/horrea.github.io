export interface NavItem {
    label: string;
    icon: string;
    order: number;
    visiblity: 'FULL' | 'RESTRICTED';
}

export declare type NavItems = NavItem[];