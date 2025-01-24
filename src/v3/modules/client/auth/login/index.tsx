import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "src/redux/store";
import { fetchLogin } from "src/redux/slice/login";
import LoginForm, { LoginFormValues } from "src/components/Forms/LoginForm";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const navigateWelcome = () => navigate("/admin/auth/welcome-back");

  const handleSubmit = async (values: LoginFormValues) => {
    const username = values.userNameOrEmail;
    const password = values.password;

    // Handle login
    await dispatch(
      fetchLogin({
        username,
        password,
        auth: "admin",
        navigate: navigateWelcome,
      }),
    );
  };

  return (
    <div className="mt-20 flex justify-center">
      <div className="w-[90%] lg:w-3/5">
        <LoginForm
          onSubmit={handleSubmit}
          onForgotPasswordClick={() => {
            navigate("/admin/auth/forgot-password");
          }}
        />
      </div>
    </div>
  );
};

export default Login;
