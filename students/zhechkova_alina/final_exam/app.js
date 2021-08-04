const express = require("express");
const {
    v4
} = require("uuid");
const cors = require("cors");

const app = express();

app.use(cors());

let PRODUCTS = [{
        id: v4(),
        name: 'Fairfield Chronograph',
        fullName: "Fairfield 41mm Leather Strap Watch",
        brand: 'Fairfield',
        price: '108.00',
        specialPrice: '120.00',
        gender: 'Women',
        discount: '-20%',
        labels: {
            new: "New",
        },
        characteristics: ['Water Resistant to 30 meters', 'Leather strap', 'Indiglo® light-up watch dial'],
        img: "1.jpg",
        sku: "TW2R26300VQ",
    },
    {
        id: v4(),
        name: 'Fairfield Chronograph',
        fullName: "Fairfield Chronograph 41mm Leather Strap Watch",
        brand: 'Fairfield',
        price: '109.00',
        specialPrice: '120.00',
        gender: 'Women',
        discount: '-20%',
        labels: {
            new: "New",
        },
        characteristics: ['Water Resistant to 30 meters', 'Chronograph watch', 'Leather strap', 'Indiglo® light-up watch dial', 'Date window'],
        img: "2.jpg",
        sku: "TW2T11500VQ",
    },
    {
        id: v4(),
        name: 'Fairfield Chronograph',
        fullName: "Fairfield Chronograph 41mm Mesh Band Watch",
        brand: 'Fairfield',
        price: '129.00',
        specialPrice: '129.00',
        gender: 'Women',
        labels: {},
        characteristics: ['Chronograph watch', 'Stainless steel mesh bracelet', 'Indiglo® light-up watch dial'],
        img: "3.jpg",
        sku: "TW2R27100VQ",
    },
    {
        id: v4(),
        name: 'Fairfield Chronograph',
        fullName: "Fairfield Chronograph 41mm Mesh Band Watch",
        brand: 'Fairfield',
        price: '129.00',
        specialPrice: '129.00',
        gender: 'Women',
        labels: {},
        characteristics: ['Chronograph watch', 'Stainless steel mesh bracelet', 'Indiglo® light-up watch dial'],
        img: "4.jpg",
        sku: "TW2R27100VQ",
    },
    {
        id: v4(),
        name: 'Fairfield Chronograph',
        fullName: "Fairfield Chronograph 41mm Mesh Band Watch",
        brand: 'Fairfield',
        price: '129.00',
        specialPrice: '129.00',
        gender: 'Women',
        labels: {},
        characteristics: ['Chronograph watch', 'Stainless steel mesh bracelet', 'Indiglo® light-up watch dial'],
        img: "5.jpg",
        sku: "TW2R27100VQ",
    },
    {
        id: v4(),
        name: 'TIMEX® IRONMAN®',
        fullName: "TIMEX® IRONMAN® T200 42mm Silicone Strap Watch",
        brand: 'Ironman',
        price: '70.00',
        specialPrice: '70.00',
        gender: 'Women',
        labels: {
            new: "New",
        },
        characteristics: ['Water Resistant to 100 meters', 'Chronograph watch', 'Interval training timer', 'Indiglo® light-up watch dial'],
        img: "7.jpg",
        sku: "TW5M46400SO",
    },

    {
        id: v4(),
        name: 'TIMEX® IRONMAN®',
        fullName: "TIMEX® IRONMAN® Transit+ 33mm Resin Strap Activity and Heart Rate Watch",
        brand: 'Ironman',
        price: '60.00',
        specialPrice: '60.00',
        gender: 'Women',
        labels: {},
        characteristics: ['Durable Resin Strap', 'Customizable Alarm', 'Sports Stopwatch with 10 Lap Memory', 'Water Resistant to 50 Meters', 'Indiglo® light-up watch dial'],
        img: "10.jpg",
        sku: "TW2R27100VQ",
    },
    {
        id: v4(),
        name: 'TIMEX® IRONMAN®',
        fullName: "TIMEX® IRONMAN® R300 GPS 41mm Silicone Strap Watch",
        brand: 'Ironman',
        price: '129.00',
        specialPrice: '129.00',
        gender: 'Women',
        labels: {},
        characteristics: ['Timex Smart', 'Fast Accurate GPS', 'Accurate On-Wrist Heart Rate', 'Guided Coaching Activity Tracking', 'Easy-to-Use Menus ', 'Soft Silicone Rubber Strap', 'Customizable Vibrating Alarm', 'TapScreen™ Technology', 'Water Resistant to 50 Meters'],
        img: "11.jpg",
        sku: "TIMEX-IRONMAN-R300-GPS-Watch",
    },
    {
        id: v4(),
        name: 'IRONMAN Essential',
        fullName: "IRONMAN Essential 30 Silicone Strap Watch",
        brand: 'Ironman',
        price: '65.00',
        specialPrice: '60.00',
        gender: 'Women',
        labels: {
            discount: '-10%'
        },
        characteristics: ['Soft Silicone Rubber Strap', 'Countdown Timer', 'Customizable Alarm', 'Water Resistant to 100 Meters', 'INDIGLO® Light-Up Watch Dial', 'Sports Stopwatch with 30 Lap Memory'],
        img: "12.jpg",
        sku: "TW5M14500JT",
    },
    {
        id: v4(),
        name: 'Expedition Scout',
        fullName: "Expedition Scout 40mm Fabric Strap Watch",
        brand: 'Expedition',
        price: '74.00',
        specialPrice: '70.00',
        gender: 'Men',
        discount: '-10%',
        labels: {
            new: "New",
        },
        characteristics: ['Water Resistant to 50 meters', 'Mixed-material strap', 'Date window', 'Rugged metal watch case', '24 hour watch', 'Indiglo® light-up watch dial'],
        img: "13.jpg",
        sku: "Scout-40mm-Fabric-Strap-Watch",
    },
    {
        id: v4(),
        name: 'Expedition Scout',
        fullName: "Expedition Scout 40mm Fabric Strap Watch",
        brand: 'Expedition',
        price: '109.00',
        specialPrice: '120.00',
        gender: 'Men',
        price: '74.00',
        specialPrice: '70.00',
        gender: 'Men',
        discount: '-10%',
        labels: {
            new: "New",
        },
        characteristics: ['Water Resistant to 50 meters', 'Mixed-material strap', 'Date window', 'Rugged metal watch case', '24 hour watch', 'Indiglo® light-up watch dial'],
        img: "14.jpg",
        sku: "Scout-40mm-Fabric-Strap-Watch",
    },
    {
        id: v4(),
        name: 'Expedition Scout',
        fullName: "Expedition Scout 40mm Fabric Strap Watch",
        brand: 'Expedition',
        price: '74.00',
        specialPrice: '70.00',
        gender: 'Men',
        discount: '-10%',
        labels: {},
        characteristics: ['Chronograph watch', 'Stainless steel mesh bracelet', 'Indiglo® light-up watch dial'],
        img: "15.jpg",
        sku: "TW2R27100VQ",
    },
    {
        id: v4(),
        name: 'Expedition Scout Chronograph',
        fullName: "Expedition Scout Chronograph 42mm Leather Strap Watch",
        brand: 'Expedition',
        price: '119.00',
        specialPrice: '110.00',
        gender: 'Men',
        discount: '-10%',
        labels: {},
        characteristics: ['Rugged outdoor watch', 'Chronograph watch', 'Leather strap', 'Water resistant to 100 meters', 'Indiglo® light-up watch dial'],
        img: "16.jpg",
        sku: "TW2R27100VQ",
    },
    {
        id: v4(),
        name: 'IRONMAN Essential',
        fullName: "IRONMAN Essential 30 Silicone Strap Watch",
        brand: 'Ironman',
        price: '65.00',
        specialPrice: '60.00',
        gender: 'Women',
        discount: '-10%',
        labels: {},
        characteristics: ['Soft Silicone Rubber Strap', 'Countdown Timer', 'Customizable Alarm', 'Water Resistant to 100 Meters', 'INDIGLO® Light-Up Watch Dial', 'Sports Stopwatch with 30 Lap Memory'],
        img: "12.jpg",
        sku: "TW5M14500JT",
    },
    {
        id: v4(),
        name: 'Expedition Scout',
        fullName: "Expedition Scout 40mm Fabric Strap Watch",
        brand: 'Expedition',
        price: '74.00',
        specialPrice: '70.00',
        gender: 'Men',
        discount: '-10%',
        labels: {
            new: "New",
        },
        characteristics: ['Water Resistant to 50 meters', 'Mixed-material strap', 'Date window', 'Rugged metal watch case', '24 hour watch', 'Indiglo® light-up watch dial'],
        img: "13.jpg",
        sku: "Scout-40mm-Fabric-Strap-Watch",
    },
    {
        id: v4(),
        name: 'Originals',
        fullName: "Originals 42mm Leather Strap Watch",
        brand: 'Originals',
        price: '79.00',
        specialPrice: '79.00',
        gender: 'Women',
        labels: {
            new: "New",
        },
        characteristics: ['Water Resistant to 30 meters', 'Leather strap'],
        img: "19.jpg",
        sku: "TW2U05700VQ",
    },
    {
        id: v4(),
        name: 'Originals',
        fullName: "Originals 38mm Stainless Steel Mesh Band Watch",
        brand: 'Originals',
        price: '89.00',
        specialPrice: '80.00',
        gender: 'Women',
        discount: '-10%',
        labels: {},
        characteristics: ['Stainless steel mesh bracelet', 'Water resistant to 30 meters'],
        img: "20.jpg",
        sku: "TW5M37900IQ",
    },
    {
        id: v4(),
        name: 'Originals',
        fullName: "Originals 42mm Leather Strap Watch",
        brand: 'Originals',
        price: '79.00',
        specialPrice: '79.00',
        gender: 'Women',
        labels: {},
        characteristics: ['Leather strap', 'Water resistant to 30 meters'],
        img: "21.jpg",
        sku: "TW5M40400JT",
    },
    {
        id: v4(),
        name: 'Originals',
        fullName: "Originals 42mm Leather Strap Watch",
        brand: 'Originals',
        price: '100.00',
        specialPrice: '90.00',
        gender: 'Men',
        discount: '-20%',
        labels: {},
        characteristics: ['Durable Resin Strap', 'Customizable Alarm', 'Sports Stopwatch with 10 Lap Memory', 'Water Resistant to 50 Meters', 'Indiglo® light-up watch dial'],
        img: "22.jpg",
        sku: "TW2R27100VQ",
    },
    {
        name: 'Originals',
        fullName: "Originals 42mm Leather Strap Watch",
        brand: 'Originals',
        price: '100.00',
        specialPrice: '90.00',
        gender: 'Men',
        discount: '-20%',
        labels: {},
        characteristics: ['Fast Accurate GPS', 'Accurate On-Wrist Heart Rate', 'Guided Coaching Activity Tracking', 'Easy-to-Use Menus ', 'Soft Silicone Rubber Strap', 'Customizable Vibrating Alarm', 'TapScreen™ Technology', 'Water Resistant to 50 Meters'],
        img: "23.jpg",
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


app.listen(3000, () => {
    console.log('Server start on port 3000')
});
