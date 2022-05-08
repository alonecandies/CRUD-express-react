import { Link, useNavigate } from "react-router-dom";
import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const [search, setSearch] = useState("");
  const navigation = useNavigate()
  const handleSearch = () => {
    navigation("/blogs/search/" + search)
  }
  const handleKeyPress = (e) =>{
    if(e.key === "Enter"){
      handleSearch()
    }
  }
  return (
    <>
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/blogs">
                Blogs
              </Nav.Link>
              <Nav.Link as={Link} to="/blogs/create">
                New Blog
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={(e) => handleKeyPress(e)}
            />
            <Button variant="outline-light" type="button">
              <FaSearch onClick={handleSearch}/>
            </Button>
          </Form>
        </Container>
      </Navbar>
    </>
  );
}
