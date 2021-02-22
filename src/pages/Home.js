import Card from '../components/Card';
import Footer from '../components/Footer';
import Header from '../components/Header';

let titles = ['Iphone 13', 'Apple Set', 'Airpods', 'Figures', 'Dark Set', 'Dell' ];
let imgSrs = [
    "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=966&q=80",
    "https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1516163109866-e9d98630a0a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1572797258555-4f33f86f443f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1048&q=80",
    "https://images.unsplash.com/photo-1550029402-226115b7c579?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80",
    "https://images.unsplash.com/photo-1593642632505-1f965e8426e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=925&q=80"
];

export default function () {
    return (
        <div className="App">
            <Header/>
            <main>
                <Card title = {titles[0]} imgSrc = {imgSrs[0]}/>
                <Card title = {titles[1]} imgSrc = {imgSrs[0]}/>
                <Card title = {titles[2]} imgSrc = {imgSrs[2]}/>
                <Card title = {titles[3]} imgSrc = {imgSrs[3]}/>
                <Card title = {titles[4]} imgSrc = {imgSrs[4]}/>
                <Card title = {titles[5]} imgSrc = {imgSrs[5]}/>
            </main>
            <Footer/>
        </div>
    );
}