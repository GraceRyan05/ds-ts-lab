

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
    discountPercent?: number; // Optional property
    availableFrom?: Date; // Optional property
}

export interface ComboDeal {
    id: number,
    name: string;
    items: MenuItem[];
    price: number;
}

export type OrderLine = MenuItem | ComboDeal;

export type MenuItemPartial = Partial<MenuItem>;

export type kitchenTicket = ReadOnly<
    Pick<MenuItem, "name" | "course" >
>;

export type allergyCard = Omit<MenuItem, "nutrition"> & { warning: string } ;

