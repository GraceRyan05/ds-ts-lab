

export type Course = "starter" | "main" | "dessert";

export interface Nutrition {
    calories: number;
    allergens: string[];
}

export interface MenuItem {
    id: number;
    name: string;
    course: Course;
    price: number;
    nutrition: Nutrition;
    discountPercent?: number; //optional
    availableFrom?: Date; //optional
}

export interface ComboDeal {
    id: number,
    name: string;
    items: MenuItem[];
    price: number;
}

export type OrderLine = MenuItem | ComboDeal;

export type MenuItemPartial = Partial<MenuItem>;


export type kitchenTicket = Readonly<
    Pick<MenuItem, "name" | "course" >
>;

export type allergyCard = Omit<MenuItem, "nutrition"> & { warning: string } ;

