import React ,{ useState }from 'react'
import { Input } from 'antd';
import { DatePicker, Space } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;

const range = (start, end) => {
  const result = [];

  for (let i = start; i < end; i++) {
    result.push(i);
  }

  return result;
}; // eslint-disable-next-line arrow-body-style

const disabledDate = (current) => {
  // Can not select days before today and today
  return current && current < moment().endOf('day');
};
function SearchFilter() {


 
    return (

        <div className="searchWrapper">
            <Space direction="vertical" size={12}>
            <RangePicker disabledDate={disabledDate} />
            </Space>
            <div className="filter">
            <Input placeholder="Basic usage" />
            <input type="text" placeholder="Search city, Country,Place for Travel advisory"/>
            
            </div>
            
            <div className="table">
            <ul id="horizontal-list">
            <li>From</li>
            <li>To</li>
            <li></li>
            <li>Number person</li>
       
            <li>
                <button type="button">Search</button>
            </li>
            </ul>
            </div>
            
            
        
        </div>
        
    )
}

export default SearchFilter;
