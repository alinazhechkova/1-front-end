const express = require("express");
const {
    v4
} = require("uuid");
const cors = require("cors");

const app = express();

app.use(cors());

let PRODUCTS = [{
        id: v4(),
        name: 'New Balance',
        fullName: "New Balance 393 ML393VR1 48 (14) 32 см",
        brand: 'New Balance',
        price: '170.00',
        specialPrice: '159.00',
        gender: 'Men',
        discount: '-20%',
        labels: {
            new: "New",
        },
        img: "1.png",
        sku: "TW2R26300VQ",
    },
    {
        id: v4(),
        name: 'New Balance',
        fullName: "New Balance 393 ML393VR1 48 (14) 32 см",
        brand: 'New Balance',
        price: '170.00',
        specialPrice: '159.00',
        gender: 'Men',
        discount: '-20%',
        labels: {
            new: "New",
        },
        img: "2.png",
        sku: "TW2T11500VQ",
    },
    {
        id: v4(),
        name: 'New Balance',
        fullName: "New Balance U410CB 42 (9.5) 27.5 см",
        brand: 'New Balance',
        price: '170.00',
        specialPrice: '159.00',
        gender: 'Men',
        labels: {},
        img: "3.png",
        sku: "TW2R27100VQ",
    },
    {
        id: v4(),
        name: 'New Balance',
        fullName: "New Balance 410 U410CC 40.5 (8) 26 см",
        brand: 'New Balance',
        price: '129.00',
        specialPrice: '129.00',
        gender: 'Men',
        labels: {},
        img: "4.png",
        sku: "TW2R27100VQ",
    },
    {
        id: v4(),
        name: 'New Balance',
        fullName: "New Balance WL574SY2 35.5 (6) 23 см ",
        brand: 'New Balance',
        price: '129.00',
        specialPrice: '129.00',
        gender: 'Women',
        labels: {},
        img: "5.png",
        sku: "TW2R27100VQ",
    },
    {
        id: v4(),
        name: 'ASICS Gel-Contend',
        fullName: "ASICS Gel-Contend 7 1011B040-400 42.5 (9) 27 см",
        brand: 'ASICS',
        price: '70.00',
        specialPrice: '70.00',
        gender: 'Men',
        labels: {
            new: "New",
        },
        img: "7.png",
        sku: "TW5M46400SO",
    },

    {
        id: v4(),
        name: 'ASICS Gel-Venture',
        fullName: "ASICS Gel-Venture 8 WP 1011A825-003 45 (11) 28.5 см",
        brand: 'ASICS',
        price: '60.00',
        specialPrice: '60.00',
        gender: 'Men',
        labels: {},
        img: "10.png",
        sku: "TW2R27100VQ",
    },
    {
        id: v4(),
        name: 'ASICS Jolt',
        fullName: "ASICS Jolt 3 Gs 1014A203-004 40 (7) 25.2",
        brand: 'ASICS',
        price: '170.00',
        specialPrice: '159.00',
        gender: 'Women',
        labels: {},
        characteristics: ['Timex Smart', 'Fast Accurate GPS', 'Accurate On-Wrist Heart Rate', 'Guided Coaching Activity Tracking', 'Easy-to-Use Menus ', 'Soft Silicone Rubber Strap', 'Customizable Vibrating Alarm', 'TapScreen™ Technology', 'Water Resistant to 50 Meters'],
        img: "11.png",
        sku: "TIMEX-IRONMAN-R300-GPS-Watch",
    },
    {
        id: v4(),
        name: 'ASICS Gel-Sonoma',
        fullName: "ASICS Gel-Sonoma 6 1011B050-020 44 (10) 28 см",
        brand: 'ASICS',
        price: '65.00',
        specialPrice: '60.00',
        gender: 'Men',
        labels: {
            discount: '-10%'
        },
        img: "12.png",
        sku: "TW5M14500JT",
    },
    {
        id: v4(),
        name: 'Nike Wmns Revolution',
        fullName: "Nike Wmns Revolution 5 BQ3207-011 37.5 (7.5) 24.5 см",
        brand: 'Nike',
        price: '74.00',
        specialPrice: '70.00',
        gender: 'Women',
        discount: '-10%',
        labels: {
            new: "New",
        },
        img: "13.png",
        sku: "Scout-40mm-Fabric-Strap-Watch",
    },
    {
        id: v4(),
        name: 'Nike Wmns Revolution',
        fullName: "Nike Wmns Revolution 5 BQ3207-107 35.5 (6) 23 см",
        brand: 'Nike',
        price: '109.00',
        specialPrice: '120.00',
        gender: 'Men',
        discount: '-10%',
        labels: {
            new: "New",
        },
        img: "14.png",
        sku: "Scout-40mm-Fabric-Strap-Watch",
    },
    {
        id: v4(),
        name: 'Nike Tanjun',
        fullName: "Nike Tanjun 812654-001 42 (9.5) 27,5 см",
        brand: 'Nike',
        price: '74.00',
        specialPrice: '70.00',
        gender: 'Men',
        discount: '-10%',
        labels: {},
        img: "15.png",
        sku: "TW2R27100VQ",
    },
    {
        id: v4(),
        name: 'Nike W Run Swift',
        fullName: "Nike W Run Swift 2 CU3528-100 35 (5.5) 22.5 см",
        brand: 'Nike',
        price: '119.00',
        specialPrice: '110.00',
        gender: 'Women',
        discount: '-10%',
        labels: {},
        img: "16.png",
        sku: "TW2R27100VQ",
    },
    {
        id: v4(),
        name: 'Nike Flex Runner',
        fullName: "Nike Flex Runner (Ps) AT4663-019 30 (13C) 19 см",
        brand: 'NIke',
        price: '65.00',
        specialPrice: '60.00',
        gender: 'Men',
        discount: '-10%',
        labels: {},
        img: "12.png",
        sku: "TW5M14500JT",
    },
    {
        id: v4(),
        name: 'Nike Legend Essential',
        fullName: "Nike Legend Essential 2 CQ9356-004 39 (7) 25 см",
        brand: 'Nike',
        price: '74.00',
        specialPrice: '70.00',
        gender: 'Men',
        discount: '-10%',
        labels: {
            new: "New",
        },
        img: "13.png",
        sku: "Scout-40mm-Fabric-Strap-Watch",
    },
    {
        id: v4(),
        name: 'Adidas Lite Racer',
        fullName: "Adidas Lite Racer 2.0 FZ0394 39 (7) 25.5 см",
        brand: 'Adidas',
        price: '79.00',
        specialPrice: '79.00',
        gender: 'Men',
        labels: {
            new: "New",
        },
        img: "19.png",
        sku: "TW2U05700VQ",
    },
    {
        id: v4(),
        name: 'Adidas Lite Racer',
        fullName: "Adidas Lite Racer 2.0 EG3283 40.5 (8UK) 26.5 см",
        brand: 'Adidas',
        price: '89.00',
        specialPrice: '80.00',
        gender: 'Women',
        discount: '-10%',
        labels: {},
        img: "20.png",
        sku: "TW5M37900IQ",
    },
    {
        id: v4(),
        name: 'Adidas Response',
        fullName: "Adidas Response Sr FY9153 40.5 (8UK) 26.5 см",
        brand: 'Adidas',
        price: '79.00',
        specialPrice: '79.00',
        gender: 'Women',
        labels: {},
        img: "21.png",
        sku: "TW5M40400JT",
    },
    {
        id: v4(),
        name: 'Adidas Originals',
        fullName: "Adidas Originals Zx 1K Boost FY5649 40.5 (8UK) 26.5 см",
        brand: 'Adidas',
        price: '100.00',
        specialPrice: '90.00',
        gender: 'Men',
        discount: '-20%',
        labels: {},
        img: "22.png",
        sku: "TW2R27100VQ",
    },
    {
        name: 'Adidas Originals',
        fullName: "Adidas Originals Zx 1K Boost FY5649 40.5 (8UK) 26.5 см",
        brand: 'Adidas',
        price: '100.00',
        specialPrice: '90.00',
        gender: 'Men',
        discount: '-20%',
        labels: {},
        img: "19.png",
        sku: "TW2R27100VQ",
    },

];

let CART = [];
app.use(express.json());
//GET
app.get("/api/products", (req, res) => {
    res.status(200).json(PRODUCTS)
});
app.get('/api/cart', (req, res) => {
    res.status(200).json(CART)
})

//POST

app.post("/api/cart", (req, res) => {
    const product = {
        ...req.body
    };
    CART.push(product);
    res.status(201).json(product);
});

//PUT
app.put("/api/cart/:id", (req, res) => {
    const index = CART.findIndex((product) => product.id === req.params.id)
    CART[index] = req.body;
    res.json(CART[index]);
});

//DELETE
app.delete("/api/cart/:id", (req, res) => {

    CART = CART.filter((product) => product.id !== req.params.id);
    res.status(200).json({
        message: 'The product was deleted'
    })
})

app.delete("/api/cart/", (req, res) => {
    CART = [];
    res.status(200).json({
        message: 'The cart is empty'
    })
})

app.listen(3000, () => {
    console.log('Server start on port 3000')
});
