import propTypes from 'prop-types';

function User(props){
    return (
        <div className="card-container">
            <span className={props.online ? "pro online" : "pro offline"}>{props.online ? "ONLINE" : "OFFLINE"}</span>
            <img src={props.profile} className="img" alt="User Icon" />
            <h3>{props.name}</h3>
            <h3>{props.city}</h3>
            <p>{props.description}</p>
            <div className="button">
                <button className="primary">Message</button>
                <button className="primary-outline">Following</button>
            </div>
            <div className="skills">
                <h6>Skills</h6>
                <ul>
                    {props.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

const Usercard = () => {
    const users = [
        {
            name: "Anu",
            city: "Chennai",
            description: "Full Stack Developer",
            skills: ["UI/UX", "Front End Development", "HTML", "CSS", "JavaScript", "React", "Node", "Express", "MongoDB"],
            online: true,
            profile: "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/default-profile-picture-female-icon.png"
        },
        {
            name: "Vikram",
            city: "Mumbai",
            description: "Backend Developer",
            skills: ["Node.js", "Express", "MongoDB", "SQL", "JavaScript"],
            online: false,
            profile: "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/default-profile-picture-male-icon.png"
        },
        {
            name: "Priya",
            city: "Bangalore",
            description: "Frontend Developer",
            skills: ["HTML", "CSS", "JavaScript", "React", "Node", "Express", "MongoDB"],
            online: true,
            profile: "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/default-profile-picture-female-icon.png"
        }
    ];

    return (
        <div>
            {users.map((user, index) => (
                <User 
                    key={index} 
                    name={user.name}
                    city={user.city}
                    description={user.description}
                    skills={user.skills}
                    online={user.online}
                    profile={user.profile}
                />
            ))}
        </div>
    );
}

User.propTypes = {
    name: propTypes.string.isRequired,
    city: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    skills: propTypes.arrayOf(propTypes.string).isRequired,
    profile: propTypes.string.isRequired,
    online: propTypes.bool.isRequired
};

export default Usercard;
