import React from 'react';
import {Row,Col,Carousel,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomeScreen = () => {
    return(
        <>

        <div>
            <marquee>Fill the form and upload images!!
            <Link to='/form'>Click here....</Link></marquee>
        </div>

        <div>
            <Carousel>
                <Carousel.Item>
                    <img height="550px"
                    className="d-block w-100"
                    src="images/img1.jpeg"
                    alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img height="550px"
                    className="d-block w-100"
                    src="images/img2.jpeg"
                    alt="Second slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img height="550px"
                    className="d-block w-100"
                    src="images/img3.png"
                    alt="Third slide"
                    />
                </Carousel.Item>
        </Carousel>
        <br/><br/>
        </div>

        <div>
            <Row>
                <Col>
                    <p className='p-style'>
                      Over the years, the number of vehicles on the roads has increased along with the expansion of routes.
                      And thus, there is a serious need for creating active systems to manage traffic flow and ensure roadway safety.
                      This brings a range of smart traffic solutions to overcome such conditions. 
                      Based on IoT and AI, our solutions ensure safe and smooth movement for transport.
                      Surveillance systems offer effective vehicle tracking and analysing for detailed information of incidents.
                      Ideal for urban environments,smart traffic solutions help ensure safety & security of vehicles and citizens.
                    </p>

                    <Link to='/about' className='btn btn-success'>Read more</Link>
                </Col>
            </Row>
        </div>
        </>
    )
}

export default HomeScreen