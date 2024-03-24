import React from 'react';

import {Form} from 'react-bootstrap';




const LoginPage = () => {

    return(
          // <Link to='/' 
          // className='btn btn-dark'
          // style={{marginTop:"1rem"}}>Go Home</Link>

          // <Row className='text-center'>
          //   <Col>
          //     <h4 style={{marginTop:"1rem"}}>Fill the form </h4><br/>
          //   </Col>
          // </Row>
          // <Row>
          //   <Col style={{marginLeft:"-3rem"}}>
          //   <Form>
          //       <label>Enter Name: </label><br/>
          //       <input type = 'text' placeholder="Name"/>
          //   </Form>
          //   </Col>
          //   <Col style={{marginRight:"8rem"}}>
          //       <label>Number:</label><br/>
          //       <input type='text' placeholder="Num"/>
          //   </Col>
          //   <Col style={{marginLeft:"-8rem"}}>
          //       <label>Location:</label><br/>
          //       <input type='text' placeholder="location"/><br/>
          //   </Col>
          // </Row>
          )
}

export default LoginPage;


// function uploadImage(){
//   console.log("hi")
//   const input = document.getElementById('imageInput');
//   const output = document.getElementById('output');

//   if(input){

//       const file = input.files[0];
//       console.log("hello",file);
//       const reader = new FileReader();

//       reader.onload = function(e) {
//           const img = new Image();
//           img.src = e.target.result;
//           img.onload = function() {
//               output.innerHTML = <img src="${img.src}" alt="Uploaded Image"/>;
//           };
//       };
//       reader.readAsDataURL(file);
//   }
// }
// export default LoginPage;