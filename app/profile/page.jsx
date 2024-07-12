    
    const Profile = () => {
    const profileData = {
        name: 'John Doe',
        username: '@johndoe',
        bio: 'Frontend Developer | Passionate about React',
        profileImage: 'https://example.com/profile-image.jpg'
    };

    return (
        <div className="profile">
        <img src={profileData.profileImage} alt="Profile" className="profile-image" />
        <div className="profile-info">
            <h2>{profileData.name}</h2>
            <p>{profileData.username}</p>
            <p>{profileData.bio}</p>
        </div>
        </div>
    );
    };

    export default Profile;
