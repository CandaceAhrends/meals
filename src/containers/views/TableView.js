import './views.scss'; 
import React from 'react'; 
import DetailItem from '../../components/lists/DetailItem';

class TableView extends React.Component{ 

    render() {       
      
        return (<div >
            <DetailItem>
                    <p>detail data</p>
            </DetailItem>
        </div>);
    }
 }; 

 export default TableView;