// import logo from './logo.svg';
// import './App.css';
// import { Container,AppBar,Typography,Grow,Grid }   from '@material-ui/core';
// import Form from './components/FORM/form';

// function App() {
//   return (
//     <div className="App">
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//       {/* <div>
//         <table>
//           <tr>
//             <th>
//               username
//             </th>
//             <th>
//               age
//             </th>
//             <th>
//               action
//             </th>
//           </tr>
//           <tr>
//             <td></td>
//             <td></td>
//             <td></td>
//           </tr>
//         </table>
//       </div> */}
//       <div>
//         <h1>My App</h1>
//         <Form />
//       </div>

//     </div>
//   );
// }

// export default App;
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

// import css
import './App.css';

// import components
import UserListing from './components/UserListing';
import Adduser from './components/AddUser';
import Updateuser from './components/UpdateUser';

// import Navbar bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function App () {

    return ( 
          <BrowserRouter>
          {/* <BasicBar/> */}
            <div className='header'>
              {/* bootstrap navabr */}
            <Navbar bg="light" expand="lg">
          <Container>
        <Navbar.Brand href={'/'}>User Management</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href={'/'}>Home</Nav.Link>
            {/* <Link to={'/'}>Home</Link> */}
            <Nav.Link href={'/user'}>User</Nav.Link>
            {/* <Link to={'/user'}>User</Link> */}
            <Nav.Link href={'/user/add'}>Add</Nav.Link>
            {/* <Link to={'/user'}>User</Link> */}
          </Nav>
        </Navbar.Collapse>
       </Container>
       </Navbar>
       </div>
       
        <Routes>
            <Route path='/user' element={<UserListing/>}></Route>
              <Route path='/user/add' element={<Adduser/>}></Route>
              <Route path='/user/edit/:code' element={<Updateuser/>}></Route>
        </Routes>
          </BrowserRouter> 
         
    )
    }
export default App;