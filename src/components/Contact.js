import React from 'react';
import {base_url} from "../utils/Constants";



class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: []
        }
    }

    componentDidMount() {
        fetch(`${base_url}/v1/planets`)
            .then(response => response.json())
            .then(data => {
                const arr = [];
                data.forEach( data => {
                  let x = data['name'];
                  arr.push(x);
                  //   arr.push(data['name'])
                })
                return arr
            })
            .then(arr => {
                this.setState({
                    arr: arr
                });
                localStorage.setItem('planets', JSON.stringify(this.state.arr));
            })
    }


    render() {
        const h =  localStorage.getItem('planets');
        const k = Date.now();
        if((k - h) > 604800000 || localStorage.getItem('planets' === '')){
            localStorage.clear();
            return (
                <div className="container">
                    <form onSubmit={(event =>
                        event.preventDefault())}>
                        <label htmlFor="fname">First Name</label><br/>
                        <input type="text" itemID="fname" name="firstname" placeholder="Your name.."/><br/>
                        <label htmlFor="lname">Last Name</label><br/>
                        <input type="text" itemID="lname" name="lastname" placeholder="Your last name.."/><br/>
                        <label htmlFor="planet">Country</label><br/>
                        <select itemID="planet" name="planet">
                            {this.state.arr.map((item, index) => <option key={index}>{item}</option>)}
                        </select><br/>
                        <label htmlFor="subject">Subject</label><br/>
                        <textarea itemID="subject" name="subject" placeholder="Write something.."></textarea><br/>
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
            );
        }  else {
            return (
                <div className="container">
                    <form onSubmit={(event =>
                    event.preventDefault())}>
                        <label htmlFor="fname">First Name</label><br/>
                        <input type="text" itemID="fname" name="firstname" placeholder="Your name.."/><br/>
                        <label htmlFor="lname">Last Name</label><br/>
                        <input type="text" itemID="lname" name="lastname" placeholder="Your last name.."/><br/>
                        <label htmlFor="planet">Country</label><br/>
                        <select itemID="planet" name="planet">
                            {JSON.parse(localStorage.getItem('planets')).map((item, index) => <option key={index}>{item}</option>)}
                        </select><br/>
                        <label htmlFor="subject">Subject</label><br/>
                        <textarea itemID="subject" name="subject" placeholder="Write something.."></textarea><br/>
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
            );
        }
    }
}

export default Contact;