import {
    Course, Nutrition, MenuItem, ComboDeal, OrderLine, MenuItemPartial, kitchenTicket, allergyCard }
    from './menuTypes';


// Menu

const soup: MenuItem = {
    id: 1,
    name: "Roast Tomato Soup",
    course: "starter",
    price: 5.5,
    nutrition: {
        calories: 180,
        allergens: ["celery"],
    },
};

const risotto: MenuItem = {
    id: 2,
    name: "Mushroom Risotto",
    course: "main",
    price: 14.0,
    nutrition: {
        calories: 620, 
        allergens: ["milk"],
    },
};

const brownie: MenuItem = {
    id: 3,
    name: "Chocolate Brownie",
    course: "dessert",
    price: 6.0,
    nutrition: {
        calories: 450,
        allergens: ["milk", "eggs", "gluten"],
    },
};

const menu = [soup, risotto, brownie];

const lunchCombo: ComboDeal = {
    id: 101,
    name: "Soup & Sweet",
    items: [soup, brownie],
    price: 10.0,
};

const currentOrder = [risotto, lunchCombo, soup];



//Functions

function describe(item: MenuItem) {
    return `${item.name} (${item.course}) - EUR ${item.price.toFixed(2)}`;
}

function lineTotal(line: OrderLine) {
    if ("items" in line) {
        return line.price; //combos are sold at their bundle price.
    }
    return line.price;
}

function orderTotal(lines: OrderLine[]) {
    return lines.reduce((total, line) => total + lineTotal(line), 0);
}

function filterMenu(items:MenuItem[], predicate: (item: MenuItem) => boolean) {
    return items.filter(predicate);
}


function cheapest(items: MenuItem[], max?: number) {
    const sorted = items.sort((a, b) => a.price - b.price);
    if (max !== undefined) {
        return sorted;
    }
    return sorted.slice(0, max);
}




function firstMatch<M>(data: M[], criteria: (data: M) => boolean): M | undefined {
  return data.find(criteria);
}

  

function updateItem(item: MenuItem, changes: MenuItemPartial): MenuItem {
  return { ...item, ...changes };
}



function kitchenTicket(item: MenuItem): kitchenTicket {
  return {
    name: item.name,
    course: item.course,
  };
}


function allergyCard(item: MenuItem): allergyCard {
  return {
    id: item.id,
    name: item.name,
    course: item.course,
    price: item.price,
    warning: `Contains: ${item.nutrition.allergens.join(", ")}`,
  };
}



//Tests


console.log(describe(risotto));
console.log(orderTotal(currentOrder));
console.log(filterMenu(menu, (i) => i.nutrition.calories < 500));
console.log(cheapest(menu, 2));
console.log(cheapest(menu));
console.log(firstMatch(menu, (i) => i.course === "dessert"));
console.log(updateItem(soup, { price: 6.0, discountPercent: 10 }));
console.log(kitchenTicket(brownie));
console.log(allergyCard(brownie));



//Readonly means this cannot be changed.
//kitchenTicket(brownie).name = "New Name"; // This line will cause a TypeScript error because the properties of the returned object are read-only.



//Bug 1 fix
//console.log(describe(lunchCombo));
//describe should have a menuItem, not a combo deal. So need to change the type of the parameter to MenuItem.
console.log(describe(lunchCombo.items[0])); // This will describe the first item in the combo deal, which is a MenuItem.


//Bug 2 fix
//console.log(updateItem(soup, { price: "7.00" }));
//price should be a number not a string. Need to change the price property to a number in the updateItem function call.
console.log(updateItem(soup, { price: 7.00 }));


//Bug 3 fix
//console.log(firstMatch(menu, (i) => i.calories < 300));
//The calories should be inside the nutrition property of the MenuItem. 
console.log(firstMatch(menu, (i) => i.nutrition.calories < 300));



