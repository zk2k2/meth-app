export function getProducts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
            id: 1,
            name: "Crystallized Methamphetamine 95",
            price: 200,
        },  
        {   
            id: 2,
            name: "Premium Methamphetamine 99",
            price: 400,
        },  
        {   
            id: 3,
            name: "Regular Methamphetamine 90",
            price: 90,
        },
        {
            id: 4,
            name: "Methamphetamine 80",
            price: 60,
        },
        {
            id: 5,
            name: "Methamphetamine 70",
            price: 50,
        }
      ]);
    }, 2000);
  });
}

export function getCashiers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: "Jesse Pinkman",
        },
        {
          id: 2,
          name: "Saul Goodman",
        },
        {
          id: 3,
          name: "Mike Ehrmantraut",
        },
      ]);
    }, 2000);
  });
}

export function getCategories() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: "category 1",
        },
        {
          id: 2,
          name: "category 2",
        },
        {
          id: 3,
          name: "category 3",
        },
      ]);
    }, 2000);
  });
}

export function getSubCategories() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: "subcategory 1",
          id_category: 1,
        },
        {
          id: 2,
          name: "subcategory 2",
          id_category: 1,
        },
        {
          id: 3,
          name: "subcategory 3",
          id_category: 2,
        },
        {
          id: 4,
          name: "subcategory 4",
          id_category: 2,
        },
        {
          id: 5,
          name: "subcategory 5",
          id_category: 3,
        },
        {
          id: 6,
          name: "subcategory 6",
          id_category: 3,
        },
      ]);
    }, 2000);
  });
}

export function sendSale(sale) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 2000);
  });
}
