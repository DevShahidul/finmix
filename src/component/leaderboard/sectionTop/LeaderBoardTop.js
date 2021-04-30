import { Select, Switch } from 'antd';
import React from 'react';

const { Option } = Select;

function onSwitchChange(checked) {
}

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

const LeaderBoardTop = props => {
  return (
    <div className="section-top">
      <div className="switch">
        <h4 className="first">Feed</h4>
        <Switch defaultChecked onChange={onSwitchChange} />
        <h4 className="second">Leaderboard</h4>
      </div>
              <Select
            showSearch
            style= {{width: 90, borderRadius: "10px"}}
            placeholder="Global"
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            filterOption={(input, option) =>
              option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="jack">Global</Option>
            <Option value="lucy">Local</Option>
          </Select>
    </div>
  );
};



export default LeaderBoardTop;