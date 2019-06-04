import React from 'react';
import { Select as SelectAntd } from 'antd';
import 'antd/dist/antd.css';


class Select extends React.Component {


    render() {

        return (
            <SelectAntd
                {...this.props}
            />

        );
    }
}
export default Select;
