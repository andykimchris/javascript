import { Button, Form, Input } from "antd";

import React from 'react'
import axios from 'axios';

const FormItem = Form.Item;

class CustomForm extends React.Component {

  handleFormSubmit = (e, requestType, articleID) => {

     const  title = e.target.elements.title.value;
     const content = e.target.elements.content.value;
     
     console.log(title, content);
     
    switch( requestType ) {
      case 'post':
        return axios.post('http://127.0.0.1:8000/api/', { 
            title: title,
            content: content
           })
           .then(res  => console.log(res))
           .catch(error => console.err(error))
      case 'put':
           return axios.put(`http://127.0.0.1:8000/api/${articleID}`, {
             title: title,
             content: content
           })
           .then(res => console.log(res))
           .catch(error => console.err(error))
    }

  }

  render() {
    return (
      <div>
        <Form onSubmit={e => this.handleFormSubmit(e, this.props.requestType,this.props.articleID, )}>
          <FormItem
            label="Title"
          >
            <Input placeholder="Put a title here" name="title" />
          </FormItem>
          <FormItem
            label="Content"
          >
            <Input placeholder="Enter some content" name="content"/>
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit">{this.props.btnText}</Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default CustomForm;