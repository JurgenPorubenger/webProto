import React from 'react';
import { Checkbox as CheckboxAntd } from 'antd';
import 'antd/dist/antd.css';


class Checkbox extends React.Component {


    render() {

        return (
            <CheckboxAntd
                {...this.props}
            />
            
        );
    }
}
export default Checkbox;
