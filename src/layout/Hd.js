import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Scrollspy from 'react-scrollspy';

const Hd = (props) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 80);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
  
      <Navbar   expand="lg" id="nahd" className={isScrolled ? 'fixed-top scrolldown' : 'fixed-top'} >
        <div className="container">
        <Navbar.Brand href="#home" className='d-block p-0 m-0'><img src={`./img/logo/${ isScrolled ? 'logo' : 'logo_all' }.png`} alt='portfolio' className='img-fluid' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='flex-grow-0 '>
          <Scrollspy
            items={[props.dbpath[0].href, props.dbpath[1].href]}
            currentClassName="active"
            offset={-100}
            >
                  {
                    props.dbpath.map((v, i)=>{
                      return(
                        <li className={v.cls}><Nav.Link href={"#"+v.href}>{v.txt}</Nav.Link></li> 
                      )

                    })
                   }        
          </Scrollspy>

        </Navbar.Collapse>
        </div>
       
      </Navbar>     

  );
};

export default Hd;