import faker from 'faker';

class apiProd {
    constructor() {
        this.data = []
    }

    get() {
        return this.data;
    }

    post() {
        this.data.push({
            id: this.data.length + 1,
            nombre: faker.commerce.product(),
            precio:faker.commerce.price(),
            foto: faker.image.imageUrl(),
        })
        console.log(this.data);
    }
}

export const ProductoAPI = new apiProd();