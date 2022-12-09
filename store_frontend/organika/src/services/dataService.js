import axios from 'axios';

const catalog = [
    {
        "_id": 1,
        "title": "Strawberry",
        "price": 12.31,
        "category": "fruit",
        "image": "img-1.png"
    },
    {
        "_id": 2,
        "title": "Pear",
        "price": 15.31,
        "category": "fruit",
        "image": "img-2.png"
    },
    {
        "_id": 3,
        "title": "Apple",
        "price": 6.23,
        "category": "fruit",
        "image": "img-3.png"
    },
    {
        "_id": 4,
        "title": "Banana",
        "price": 18.34,
        "category": "fruit",
        "image": "img-4.png"
    },
    {
        "_id": 5,
        "title": "Orange",
        "price": 5.09,
        "category": "fruit",
        "image": "img-5.png"
    },
    {
        "_id": 6,
        "title": "Carrot",
        "price": 21.23,
        "category": "Vegetable",
        "image": "img-6.png"
    },
    {
        "_id": 7,
        "title": "Chile",
        "price": 5.13,
        "category": "Vegetable",
        "image": "img-7.png"
    },
    {
        "_id": 8,
        "title": "Tomato",
        "price": 7.43,
        "category": "Vegetable",
        "image": "img-8.png"
    }
];


class DataService {

    async getCatalog() {
        //return catalog;
        //todo: get catalog from server
        //TODO: get the catalog from the server
        let result = await axios.get("http://127.0.0.1:5000/api/catalog");
        return result.data;
    }

    async saveProduct(product) {
        let result = await axios.post("http://127.0.0.1:5000/api/catalog", product);
        return result.data;
    }
    //create the getCoupons
    async getCoupons() {
        //return catalog;
        try {
            let result = await axios.get("http://127.0.0.1:5000/api/coupons")
            return result.data;
        }
        catch {
            return [];
        }

    }
}
export default DataService;