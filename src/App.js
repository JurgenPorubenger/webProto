import React from 'react';
import  {Select, Checkbox, Row, Col}  from './components/antd';
import logo from './logo.svg';
import './App.css';



function onChange(value) {
    console.log(`selected ${value}`);
}

function onBlur() {
    console.log('blur');
}

function onFocus() {
    console.log('focus');
}

function onSearch(val) {
    console.log('search:', val);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <body>
      <div>
          <Row>
              <Col xs={8}> <div>
                  <Checkbox defaultChecked={false} disabled />
                  <br />
                  <Checkbox defaultChecked disabled />
              </div></Col>
              <Col xs= {8}> <Select
                              showSearch
                              style={{ width: 200 }}
                              placeholder="Select a person"
                              optionFilterProp="children"
                              onChange={onChange}
                              onFocus={onFocus}
                              onBlur={onBlur}
                              onSearch={onSearch}
                              filterOption={(input, option) =>
                                  option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                              }
              /></Col>
          </Row>

      </div>
      </body>
    </div>
  );
}

export default App;
