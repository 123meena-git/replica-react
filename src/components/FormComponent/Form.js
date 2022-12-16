import './Form.css'
import React from 'react';
import { useState } from 'react';
const Form = () => {
   const [title, setTitle] = useState('');
   const [body, setBody] = useState('');
   
    return (
        <div className="form">
            <form>
                <label>
                Name:
                </label>
               <input
               type="text"
               required
               value={title}
               onChange={(e) => setTitle(e.target.value)}
               /> 
                <label>
                Email:
                </label>
               <textarea
               required
               value={body}
               onChange={(e) => setBody(e.target.value)}
               ></textarea>
                <label>
                Password:
                </label>
                <textarea
               required
               value={body}
               onChange={(e) => setBody(e.target.value)}
               ></textarea>
               <button className="btn">
                Join Now</button> 
               <p>{ title }</p>
               <p>{ body }</p>
              
            </form>
        </div>
    );
}
export default Form;
// Second login form type.

/*import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';

const App: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default App;*/