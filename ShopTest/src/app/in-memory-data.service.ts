import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const items = [
            { id: 1,  name: 'iPhone 5'   , price: 20000, image: './src/img/iphone5.png',   count: 1 },
            { id: 2,  name: 'iPhone 5s'  , price: 25000, image: './src/img/iphone5s.png',  count: 1 },
            { id: 3,  name: 'iPhone 6'   , price: 30000, image: './src/img/iphone6.png',   count: 1 },
            { id: 4,  name: 'iPhone 6s'  , price: 35000, image: './src/img/iphone6s.png',  count: 1 },
            { id: 5,  name: 'iPhone 7'   , price: 40000, image: './src/img/iphone7.png',   count: 1 },
            { id: 6,  name: 'iPhone 7s'  , price: 42000, image: './src/img/iphone7.png',   count: 1 },
            { id: 7,  name: 'iPhone 8'   , price: 45000, image: './src/img/iphone8.png',   count: 1 },
            { id: 8,  name: 'iPhone X'   , price: 80000, image: './src/img/iphone8.png',   count: 1 },
            { id: 9,  name: 'Xiaomi Mi5' , price: 25000, image: './src/img/xiaomimi5.png', count: 1 },
            { id: 10, name: 'Xiaomi MS'  , price: 30000, image: './src/img/iphone8.png',   count: 1 },
            { id: 11, name: 'Sony Xperia', price: 35000, image: './src/img/xperiax.png',   count: 1 },
            { id: 12, name: 'Galaxy S6'  , price: 40000, image: './src/img/galaxys6.png',  count: 1 },
            { id: 13, name: 'Galaxy S7'  , price: 42000, image: './src/img/galaxys7.png',  count: 1 },
            { id: 14, name: 'Galaxy S8'  , price: 45000, image: './src/img/galaxys8.png',  count: 1 },
            { id: 15, name: 'Galaxy SS'  , price: 45000, image: './src/img/iphone8.png',   count: 1 }
        ];
        let wishlist = [
            { id: 8,  name: 'iPhone X',  price: 80000, image: './src/img/iphone8.png',  count: 1 },
            { id: 13, name: 'Galaxy S7', price: 42000, image: './src/img/galaxys7.png', count: 1 },
            { id: 14, name: 'Galaxy S8', price: 45000, image: './src/img/galaxys8.png', count: 1 },
            { id: 15, name: 'Galaxy SS', price: 45000, image: './src/img/iphone8.png',  count: 1 }
        ];
        let cart = [
            { id: 15, name: 'Galaxy SS', price: 45000, image: './src/img/iphone8.png', count: 1 }
        ];
        return {items, wishlist, cart};
    }
}
