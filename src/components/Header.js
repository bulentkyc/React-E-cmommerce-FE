import Banner from './Banner';
import './Header.css';

export default function () {
    return (
    <header>
        <h1>Welcome on My Store</h1>

        <Banner rounded = "bottom" source = "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"/>
    </header>
    );
}