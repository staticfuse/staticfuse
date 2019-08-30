import React from "react";
import addToMailchimp from 'gatsby-plugin-mailchimp'

export default class IndexPage extends React.Component {
    state = {
        name: null,
        email: null,
    }

    _handleChange = (e) => {
        console.log({
            [`${e.target.name}`]: e.target.value,
        });
        this.setState({
            [`${e.target.name}`]: e.target.value,
        });
    }

    _handleSubmit = (e) => {
        e.preventDefault();

        console.log('submit', this.state);

        addToMailchimp(this.state.email, this.state)
            .then(({ msg, result }) => {
                console.log('msg', `${result}: ${msg}`);

                if (result !== 'success') {
                    throw msg;
                }
                alert(msg);
            })
            .catch((err) => {
                console.log('err', err);
                alert(err);
            });
    }

    render() {
        return (
            <div className="w-full mb-8 bg-gray-100 p-10 rounded">
                <div className="max-w-2xl m-auto text-center">

                    <h3>Get More Great Stuff Like This</h3>

                    <p className="text-md text-gray-600 mb-1">Enter your email below. You know the drill.</p>

                    <form className="sm:flex sm:flex-row" onSubmit={this._handleSubmit}>

                        <div className="p-2 sm:w-3/4 pr-2 w-full">
                            <label htmlFor="email" className="block text-gray-500 text-sm font-bold hidden">Email</label>
                            <input
                                type="email"
                                onChange={this._handleChange}
                                name="email"
                                placeholder="Enter your email"
                                className="border rounded appearance-none  w-full h-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />

                        </div>

                        <div className="p-2 sm:w-1/4 w-full pl-2">
                            
                            <input className="w-full block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline" type="submit" value="Subscribe" />

                        </div>
                        
                    </form>
                </div>
            </div>
        );
    }
}