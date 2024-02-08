import PropTypes from 'prop-types'; // Import PropTypes
import './assets/css/style.css'; // Import file CSS

// Card Profile Component Yang Di Tampilkan Atau Di Panggil Oleh App.jsx
const Card_Profile = ({ image, name, age, location, followers, likes, photos }) => {
    return (
        <div className="kotak-profil">
            <img src={image} alt="Gambar Profil" />
            <div className="biodata_profil">
                <div className="nama">{name} <span className="umur">{age}</span></div>
                <div className="lokasi_tempat">{location}</div>
            </div>
            <hr />
            <div className="status_profil">
                <div className="jumlah_follow">{followers}<span>Followers</span></div>
                <div className="jumlah_suka">{likes}<span>Likes</span></div>
                <div className="jumlah_foto">{photos}<span>Photos</span></div>
            </div>
        </div>
    );
}

// Menambahkan PropTypes menentukan isi dari Card_Profile
Card_Profile.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    followers: PropTypes.string.isRequired,
    likes: PropTypes.string.isRequired,
    photos: PropTypes.string.isRequired
}

export default Card_Profile;
