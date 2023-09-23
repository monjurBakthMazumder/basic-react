import { useLoaderData } from "react-router-dom";
import Usr from "../Usr/Usr";

const User = () => {

    const user = useLoaderData();
    console.log(user);
    return (
        <div>
            <h1>user: {user.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    user.map(usr=> <Usr key={usr.id} usr={usr}/>)
                }
            </div>
        </div>
    );
};

export default User;