// import React from 'react'


// const Login=()=>{

//     return (
//         <div>
//            <h1>k</h1>
           
            
//         </div>
//     )


// }
// export default Login


// export default function EmailInput() {

//     let errorMessage = '';
  
//     function evaluateEmail(event) {
//       console.log('Hello')
//       const enteredEmail = event.target.value;
  
//       if (enteredEmail.trim() === '' || !enteredEmail.includes('@')) {
  
//         errorMessage = 'The entered email address is invalid.';
//         console.log(errorMessage)
//       } else {
  
//         errorMessage = '';
//        console.log('email has @')
//       }
  
//     };
  
//     return (
  
//       <div>
  
//         <input placeholder="Your email" type="email" onBlur={evaluateEmail} />
  
//         <p>{errorMessage}</p>
  
//       </div>
  
//     );
  
//   };


import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleVerificationCodeChange = (e) => {
    setVerificationCode(e.target.value);
  };

  const handleVerifyEmail = () => {
    // Send verification code to the provided email address
    // You can use an API or a backend service to send the email

    // Once the user receives the verification code, they can enter it here
    if (verificationCode === '123456') {
      setIsVerified(true);
    } else {
      setIsVerified(false);
    }
  };

  return (
    <div>
      <input type="email" value={email} onChange={handleEmailChange} />
      <button onClick={handleVerifyEmail}>Send Verification Code</button>
      {isVerified ? (
        <p>Email has been verified successfully!</p>
      ) : (
        <div>
          <input
            type="text"
            value={verificationCode}
            onChange={handleVerificationCodeChange}
          />
          <button onClick={handleVerifyEmail}>Verify Email</button>
        </div>
      )}
    </div>
  );
}

export default Login;
