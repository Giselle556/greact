import React from 'react';
import {Footer} from 'react-materialize'

function Foot(){
return(
<Footer
  className="example"

  links={<ul id="footer"><li><a className="grey-text text-lighten-3" href="https://github.com/Giselle556">GitHub</a></li><li><a className="grey-text text-lighten-3" href="https://www.linkedin.com/in/giselle-borbolla-46805a16a/">LinkedIn</a></li><li><a className="grey-text text-lighten-3" href="mailto:annalisa.bauer1@gmail.com">gisellesmeborbolla@gmail.com</a></li></ul>}
  
>
</Footer>
);
}

export default Foot;