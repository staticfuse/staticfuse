import React from "react";
import addToMailchimp from 'gatsby-plugin-mailchimp'
import { Box, Input, Button, Heading } from '@chakra-ui/core'

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
            <Box className="optin-box"
            mb={8}
            mt={8}
            bg='#f7fafc'
            borderRadius='5px'
            p={10}>
                <Box
                maxW='2xl'
                m='auto'
                textAlign='center'>

                    <Heading as="h3" mb={1}>Get More Great Stuff Like This</Heading>

                    <p style={{color:'#777'}}>Enter your email below. You know the drill.</p>

                    <form style={{display:'flex'}} onSubmit={this._handleSubmit}>

                        <Box className="p-2 sm:w-3/4 pr-2 w-full"
                        p={2}
                        w='75%'
                        >
                            <label htmlFor="email" style={{display:'none'}}>Email</label>
                            <Input
                                type="email"
                                onChange={this._handleChange}
                                name="email"
                                placeholder="Enter your email"
                                className="border rounded appearance-none  w-full h-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />

                        </Box>

                        <Box className="p-2 sm:w-1/4 w-full pl-2"
                        w="25%"
                        p={2}>
                            
                            <Button display='block' width='100%' variantColor="primary" className="w-full block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline" type="submit" value="Subscribe">Submit</Button>

                        </Box>
                        
                    </form>
                </Box>
            </Box>
        );
    }
}