import React from 'react';
import {Container, Navbar, NavDropdown, Carousel} from 'react-bootstrap';
import {useNavigate} from "react-router-dom";

const Dashboard = () => {
    const user = localStorage.getItem('user')
    const navigate = useNavigate()

    const logout = () => {
        localStorage.clear();
        navigate('/');
    }

    return (
        <div>
            <Navbar>
                <Container>
                    <Navbar.Brand href="/dashboard">Ujian Web Application</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <NavDropdown title={user} id="navbarScrollingDropdown">
                            <NavDropdown.Item href="/change-password">Ubah Password</NavDropdown.Item>
                            <NavDropdown.Item onClick={logout}>
                                Log out
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/picture-2.jpeg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/picture-1.jpeg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/picture-3.jpeg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Container className="my-4">
                <h2>Selamat datang, {user}</h2>
            </Container>
        </div>

    )
}

export default Dashboard;