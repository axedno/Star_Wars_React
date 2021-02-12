import React from 'react';
import {friends} from "../utils/Constants";
import Friend from "./Friend";


const DreamTeam = () => {
    return (
        <section className="float-right row w-50 border no-gutters mt-1 mb-0 mr-1 mn-3">
            <h2 className="col-12 text-center">Dream team</h2>
            {friends.map((item, index) => <Friend picture={item} key={index} number={index+1} />)}
        </section>
    );
};

export default DreamTeam;