import styled from "styled-components"

export const MailChimpFormStyles = styled.section`

.outer {
  //background: linear-gradient(45deg, #FC466B, #3F5EFB);
  min-height: 70vh;
}


.container {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 51%;
    left: 50%;
}

@media (max-width: 2560px) {
    .container {
        top: 49%;
        left: 50%;
    }
    
      .outer {
    //background: linear-gradient(45deg, #FC466B, #3F5EFB);
    min-height: 50vh;
  }
}

@media (max-width: 1440px) {
    .container {
        top: 48%;
        left: 50%;
    }
    
      .outer {
    //background: linear-gradient(45deg, #FC466B, #3F5EFB);
    min-height: 90vh;
  }
}


@media (max-width: 1024px) {
    .container {
        top: 50%;
        left: 50%;
    }
    
      .outer {
    //background: linear-gradient(45deg, #FC466B, #3F5EFB);
    min-height: 90vh;
  }
}

@media (max-width: 890px) {
    .container {
        top: 52%;
        left: 50%;
    }

    .outer {
        min-height: 75vh;
    }
}

@media (max-width: 768px) {
    .container {
        top: 52%;
        left: 50%;
    }

    .outer {
        min-height: 75vh;
    }
}
    @media (max-width: 676px) {
    .container {
        top: 51%;
        left: 50%;
    }

    .outer {
        min-height: 75vh;
    }
}

@media (max-width: 526px) {
    .container {
        top: 50%;
        left: 50%;
    }

    .outer {
        min-height: 75vh;
    }
}

@media (max-width: 426px) {
    .container {
        top: 50%;
        left: 50%;
    }

    .outer {
        min-height: 90vh;
    }
}

@media (max-width: 375px) {
    .container {
        top: 50%;
        left: 50%;
    }

    .outer {
        min-height: 90vh;
    }
}

form {
  background: rgba(255,255,255,0.3);
  padding: 3em;
  height: 500px;
  border-radius: 20px;
  border-left: 1px solid rgba(255,255,255,0.3);
  border-top: 1px solid rgba(255,255,255,0.3);
  backdrop-filter: blur(10px);
  box-shadow: 20px 20px 40px -6px rgba(0,0,0,0.2);
  text-align: center;
  position: relative;
  transition: all 0.2s ease-in-out;
  
  p {
    font-weight: 500;
    color: #fff;
    opacity: 0.7;
    font-size: 1.4rem;
    margin-top: 0;
    margin-bottom: 60px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
  }
  
  a {
    text-decoration: none;
    color: #ddd;
    font-size: 12px;
    
    &:hover {
      text-shadow: 2px 2px 6px #00000040;
    }
    
    &:active {
      text-shadow: none;
    }
  }
  
  input {
    background: transparent;
    width: 250px;
    padding: 1em;
    margin-bottom: 2em;
    border: none;
    border-left: 1px solid rgba(255,255,255,0.3);
    border-top: 1px solid rgba(255,255,255,0.3);
    border-radius: 5000px;
    backdrop-filter: blur(5px);
    box-shadow: 4px 4px 60px rgba(0,0,0,0.2);
    color: #fff;
    font-family: Montserrat, sans-serif;
    font-weight: 500;
    transition: all 0.2s ease-in-out;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
    
    &:hover {
      background: rgba(255,255,255,0.1);
      box-shadow: 4px 4px 60px 8px rgba(0,0,0,0.2);
    }
    
    &[type="email"],
    &[type="password"] {
      
      &:focus {
        background: rgba(255,255,255,0.1);
        box-shadow: 4px 4px 60px 8px rgba(0,0,0,0.2);
      }
    }
    
    &[type="button"] {
      margin-top: 10px;
      width: 150px;
      font-size: 1rem;
      
      &:hover {
        cursor: pointer;
      }
      
      &:active {
        background: rgba(255,255,255,0.2);
      }
    }
  }
  
  &:hover {
    margin: 4px;
  }
}

::placeholder {
  font-family: Montserrat, sans-serif;
  font-weight: 400;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.4);
}

.drop {
  background: rgba(255,255,255,0.3);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  border-left: 1px solid rgba(255,255,255,0.3);
  border-top: 1px solid rgba(255,255,255,0.3);
  box-shadow: 10px 10px 60px -8px rgba(0,0,0,0.2);
  position: absolute;
  transition: all 0.2s ease;
  
  &-1 {
    height: 80px;
    width: 80px;
    top: -20px;
    left: -40px;
    z-index: -1;
  }
  
  &-2 {
    height: 80px;
    width: 80px;
    bottom: -30px;
    right: -10px;
  }
  
  &-3 {
    height: 100px;
    width: 100px;
    bottom: 120px;
    right: -50px;
    z-index: -1;
  }
  
  &-4 {
    height: 120px;
    width: 120px;
    top: -60px;
    right: -60px;
  }
  
  &-5 {
    height: 60px;
    width: 60px;
    bottom: 170px;
    left: 90px;
    z-index: -1;
  }
}

a,
input:focus,
select:focus,
textarea:focus,
button:focus {
    outline: none;
}

  
`