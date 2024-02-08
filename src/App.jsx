import Card_Profile from './Card_Profile'; // Import komponen Card_Profile
import './App.css'; // Import file
import imageVictor from './assets/img/profile/image-victor.jpg'; // Import gambar


const App = () => {
    return (
        // div Yang Menampung Isi Card Profile
        <div className="app">
            <Card_Profile
                image={imageVictor}
                name="Victor Crest"
                age="26"
                location="London"
                followers="80K"
                likes="803K"
                photos="1.4K"
            />
        </div>
        // div Yang Menampung Isi Card Profile
    );
}

export default App;
