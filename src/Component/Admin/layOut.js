import React from 'react'
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'
import Horzonatal from './Horzonatal'
import Sidebarr from "./Sidebar"
import "./layout.css";

const LayOut = ({children}) => {
  return (
    <>
      <Grid columns={2}>  
        
           <GridColumn width={3}>
             <Sidebarr /> 
          </GridColumn>  
          <GridColumn width={13}>
              <GridRow>
            <Horzonatal />
            </GridRow> 
            <div className='main-body'>
            {children}
            </div>
          </GridColumn> 
        
       </Grid>
    </>
  );
}

export default LayOut;