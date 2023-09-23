import { useLoaderData, useNavigate, useParams } from "react-router-dom";
const UserDetails = () => {
    const navigate = useNavigate();
    const user = useLoaderData();
    const {userId} = useParams();
    const {name} = user;
    const handleClick= () => {
        navigate(-1)
    }
    return (
        <div>
            <h1>{userId}</h1>
            <h1>user name: {name}</h1>
            <button className="btn" onClick={handleClick}>Go back</button>
        </div>
    );
};

export default UserDetails;