import { Button, Form, Input } from "antd";
import "./index.scss";
import Header from "../../component/header";
import api from "../../config/axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  // vùng của javascript
  const handleLogin = async (values) => {
    console.log(values);

    try {
      // gửi request đến server
      const response = await api.post("login", values);
      const { token } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(response.data));
      navigate("/");
    } catch (err) {
      console.log(err);
      alert(err.response.data);
    }
  };

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
              onFinish={handleLogin} // event => chạy khi mà form đc submit thành công
            >
              <Form.Item
                label="Phone"
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập số điẹn thoại!",
                  },
                ]}
              >
                <Input type="text" placeholder="Username" />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập mật khẩu!",
                  },
                ]}
              >
                <Input type="password" placeholder="Password" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Login
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
