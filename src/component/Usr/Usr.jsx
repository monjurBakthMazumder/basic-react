import { Link, useNavigate } from "react-router-dom";


const Usr = ({usr}) => {
    const {id,name, phone, username, website} = usr;

    const navigate = useNavigate();
    const handleClick = () => {
      navigate(`/user/${id}`)
    }
    return (
        <div className="card card-compact border-2">
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{username}</p>
    <p>{phone}</p>
    <p>{website}</p>
    <Link to={`/user/${id}`}>Show details</Link>
    <button className="btn" onClick={handleClick}>see details</button>
  </div>
</div>
    );
};

export default Usr;