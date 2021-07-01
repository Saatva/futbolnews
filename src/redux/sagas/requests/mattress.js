export const requestGetMattresses = () => fetch('http://localhost:3001/mattresses').then((response) => response.json());
