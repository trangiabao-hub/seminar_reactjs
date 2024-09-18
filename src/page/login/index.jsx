import { Button, Form, Input } from "antd";
import "./index.scss";
import Header from "../../component/header";

const Login = () => {
  return (
    <>
      <Header />
      <div className="login">
        <div className="login__image">
          <img
            src="https://img.freepik.com/free-photo/colorful-fish-swimming-underwater_23-2150777184.jpg"
            alt=""
          />
        </div>
        <div className="login__form">
          <div className="form-wrapper">
            <Form
              className="form"
              labelCol={{
                span: 24,
              }}
            >
              <Form.Item label="Username" name="username">
                <Input type="text" placeholder="Username" />
              </Form.Item>
              <Form.Item label="Password" name="password">
                <Input type="password" placeholder="Password" />
              </Form.Item>
              <Form.Item>
                <Button type="primary">Login</Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
