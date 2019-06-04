import React from 'react';
import { Row as RowAntd } from 'antd';
import 'antd/dist/antd.css';


class Row extends React.Component {


    render() {

        return (
            <RowAntd
                {...this.props}
            />
            
        );
    }
}
export default Row;
