import Banner from '../components/Banner';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './Home.css';
/* 
let titles = ['Iphone 13', 'Apple Set', 'Airpods', 'Figures', 'Dark Set', 'Dell' ];

let imgSrs = [
    "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=966&q=80",
    "https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1516163109866-e9d98630a0a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1572797258555-4f33f86f443f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1048&q=80",
    "https://images.unsplash.com/photo-1550029402-226115b7c579?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80",
    "https://images.unsplash.com/photo-1593642632505-1f965e8426e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=925&q=80"
];

let prices = [1200, 3000, 200, 100, 5000, 2000];

export default function () {
    return (
        <div className="App">
            <Header/>
            <main>
                <Card price = {prices[0]} title = {titles[0]} imgSrc = {imgSrs[0]}/>
                <Card price = {prices[1]} title = {titles[1]} imgSrc = {imgSrs[1]}/>
                <Card price = {prices[2]} title = {titles[2]} imgSrc = {imgSrs[2]}/>
                <Card price = {prices[3]} title = {titles[3]} imgSrc = {imgSrs[3]}/>
                <Card price = {prices[4]} title = {titles[4]} imgSrc = {imgSrs[4]}/>
                <Card price = {prices[5]} title = {titles[5]} imgSrc = {imgSrs[5]}/>
            </main>
            <Footer/>
        </div>
    );
}

 */

let products = [
    {
        id: 'p1',
        title: 'Iphone 13',
        imgSrc: 'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=966&q=80',
        price: 12000
    },
    {
        id: 'p2',
        title: 'Apple Set',
        imgSrc: 'https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
        price: 3000
    },
    {
        id: 'p3',
        title: 'Airpods',
        imgSrc: 'https://images.unsplash.com/photo-1516163109866-e9d98630a0a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        price: 200
    },
    {
        id: 'p4',
        title: 'Figures',
        imgSrc: 'https://images.unsplash.com/photo-1572797258555-4f33f86f443f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1048&q=80',
        price: 100
    },
    {
        id: 'p5',
        title: 'Dark Set',
        imgSrc: 'https://images.unsplash.com/photo-1550029402-226115b7c579?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80',
        price: 5000
    },
    {
        id: 'p6',
        title: 'Dell',
        imgSrc: 'https://images.unsplash.com/photo-1593642632505-1f965e8426e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=925&q=80',
        price: 2000
    }
];

let cart = [];

let click = (id) => {
    let isUpdated = false;
    let products = cart.map(item => {
        if(item.id == id) {
            item.amount += 1;
            isUpdated = true;
        }
        return item;
    });

    if (isUpdated) {
        cart = products;
    } else {
        cart.push({id, amount: 1});
    }
    console.log(cart);
}

export default function () {
    let cards = products.map( 
        product => <Card 
                    onclick = {()=>click(product.id)} 
                    price = {product.price} 
                    title = {product.title} 
                    imgSrc = {product.imgSrc}
                    /> 
    );
    
    return (
        <div className="App">
            <Header/>
            <main className = "grid-container">
                { cards }
            </main>
            <br/>
            <Footer/>
        </div>
    );
}



/*
export default function () {
    return (
        <div className="App">
            <Header/>
            <main>
                <Card price = {products[0].price} title = {products[0].title} imgSrc = {products[0].imgSrc}/>
                <Card price = {products[1].price} title = {products[1].title} imgSrc = {products[1].imgSrc}/>
                <Card price = {products[2].price} title = {products[2].title} imgSrc = {products[2].imgSrc}/>
                <Card price = {products[3].price} title = {products[3].title} imgSrc = {products[3].imgSrc}/>
                <Card price = {products[4].price} title = {products[4].title} imgSrc = {products[4].imgSrc}/>
                <Card price = {products[5].price} title = {products[5].title} imgSrc = {products[5].imgSrc}/>
            </main>
            <Footer/>
        </div>
    );
}
*/


/*
import Card from '../components/Card';
import Footer from '../components/Footer';
import Header from '../components/Header';

let titles = ['Iphone 13', 'Apple Set', 'Airpods', 'Figures', 'Dark Set', 'Dell' ];

export default function () {
    return (
        <div className="App">
            <Header/>
            <main>
                <Card title = "Iphone 13" imgSrc = "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=966&q=80"/>
                <Card title = "Apple Set"  imgSrc = "https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"/>
                <Card imgSrc = "https://images.unsplash.com/photo-1516163109866-e9d98630a0a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"/>
                <Card imgSrc = "https://images.unsplash.com/photo-1572797258555-4f33f86f443f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1048&q=80"/>
                <Card imgSrc = "https://images.unsplash.com/photo-1550029402-226115b7c579?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80"/>
                <Card imgSrc = "https://images.unsplash.com/photo-1593642632505-1f965e8426e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=925&q=80"/>
            </main>
            <Footer/>
        </div>
    );
}


*/