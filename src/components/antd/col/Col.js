import React from 'react';
import { Col as ColAntd } from 'antd';
import 'antd/dist/antd.css';


class Col extends React.Component {


    render() {

        return (
            <ColAntd
                {...this.props}
            />
            
        );
    }
}
export default Col;
