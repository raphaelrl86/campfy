import { GithubFilled, LinkedinFilled } from '@ant-design/icons'

const Footer = () => {
    return ( 

        <footer className="text-center text-white vw-100" style={{backgroundColor: '#013c4c'}}>
        
        <div className="container p-3"></div>
        
      
        
        <div className="text-center p-3" style={{backgroundColor: `rgba(${0}, ${0}, ${0}, ${0.2})`}}>
          <ul className='list-inline mb-0'>
              <li className='list-inline-item'>
                <spam>Carolina Barbosa</spam>
              </li>
              <li className='list-inline-item'>
                <a target="_blank" href="https://github.com/carolinabsr" className="text-white" >
                <GithubFilled style={{ fontSize: '18px' }}/>
                </a>
              </li>
              <li className='list-inline-item'>
                <a target="_blank" href="https://www.linkedin.com/in/carolinabarbosaribeiro/" className="text-white" >
                <LinkedinFilled style={{ fontSize: '18px' }}/></a>                
              </li>
          </ul>
          <ul className='list-inline mb-0'>
              <li className='list-inline-item'>
                <spam>Raphael Lacerda</spam>
              </li>
              <li className='list-inline-item'>
              <a target="_blank" href="https://github.com/raphaelrl86" className="text-white" >
                <GithubFilled style={{ fontSize: '18px' }}/>
                </a>
              </li>
              <li className='list-inline-item'>
                <a target="_blank" href="https://www.linkedin.com/in/raphael-lacerda-99692b21/" className="text-white" >
                <LinkedinFilled style={{ fontSize: '18px' }}/></a>                
              </li>
          </ul>
          <p>© 2023 Créditos:  
            <spam> <a target="_blank" href="https://mdbootstrap.com/" className="text-white">MDBootstrap.com</a> | </spam>
            <spam> <a target="_blank" href="https://unsplash.com/" className="text-white">Unsplash.com</a> | </spam> 
      
          
          </p>
          
        </div>
        
      </footer> 

    );
}
 
export default Footer;
