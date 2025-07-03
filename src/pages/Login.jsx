import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginBg } from '../assets/images';
import { useAuth } from '../context/AuthContext';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
const validationRules = {
  email: {
    required: 'Email is required',
    pattern: {
      value: /^\S+@\S+$/i,
      message: 'Email is invalid',
    },
  },
  password: {
    required: 'Password is required',
    minLength: {
      value: 6,
      message: 'Password must be at least 6 characters',
    },
  },
  fullName: {
    required: 'Full name is required',
    minLength: {
      value: 2,
      message: 'Full name must be at least 2 characters',
    },
  },
  confirmPassword: {
    required: 'Confirm password is required',
    validate: (value, getValues) =>
      value === getValues('password') || 'Passwords do not match',
  },
};


const validateForm = (formData, mode) => {
  const errors = {};
  Object.keys(validationRules).forEach((key) => {
    const rules = validationRules[key];
    const value = formData[key];

    if (rules.required && !value) {
      errors[key] = rules.required;
    } else if (rules.pattern && !rules.pattern.value.test(value)) {
      errors[key] = rules.pattern.message;
    } else if (rules.minLength && value.length < rules.minLength.value) {
      errors[key] = rules.minLength.message;
    } else if (rules.validate && typeof rules.validate === 'function') {
      const validationMessage = rules.validate(value, () => formData);
      if (validationMessage !== true) {
        errors[key] = validationMessage;
      }
    }
  });

  return errors;
};


const handleAuthError = (error) => {
  if (error.code === 'auth/user-not-found') {
    return 'No account found with this email';
  } else if (error.code === 'auth/wrong-password') {
    return 'Incorrect password. Please try again';
  } else if (error.code === 'auth/email-already-in-use') {
    return 'This email is already registered';
  } else {
    return 'Authentication failed. Please try again.';
  }
};


const Login = () => {
  const navigate = useNavigate();
  const { login, register, loginWithGoogle, loginWithFacebook } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [rememberMe, setRememberMe] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Form validation
    const errors = validateForm(formData, isLogin ? 'login' : 'register');
    if (Object.keys(errors).length > 0) {
      setError(errors[Object.keys(errors)[0]]);
      return;
    }

    try {
      let result;
      if (isLogin) {
        result = await login(formData);
      } else {
        if (formData.password !== formData.confirmPassword) {
          setError('Passwords do not match');
          return;
        }
        result = await register(formData);
      }

      if (result.success) {
        navigate('/');
      } else {
        setError(result.error || `${isLogin ? 'Login' : 'Registration'} failed`);
      }
    } catch (err) {
      setError(handleAuthError(err));
    }
  };

  /**
   * Handles social login attempts via Google or Facebook
   * @param {'google' | 'facebook'} provider - The social login provider to use
   */
  const handleSocialLogin = async (provider) => {
    try {
      setError('');
      const result =
        provider === 'google'
          ? await loginWithGoogle()
          : await loginWithFacebook();
      if (result.success) {
        navigate('/');
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError(`${provider} login failed. Please try again.`);
    }
  };

  /**
   * Toggles password visibility for password fields
   * @param {'password' | 'confirm'} field - The password field to toggle
   */
  const togglePasswordVisibility = (field) => {
    if (field === 'password') {
      setShowPassword(!showPassword);
    } else if (field === 'confirm') {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  /**
   * Toggles between login and registration modes
   * Resets form data and errors when switching modes
   */
  const toggleMode = () => {
    setIsLogin(!isLogin);
    setError('');
    setFormData({
      email: '',
      password: '',
      fullName: '',
      confirmPassword: '',
    });
  };

  /**
   * Form error state management
   * @type {Object} errors - Object containing field-specific error messages
   * @type {Function} setErrors - Function to update error state
   */
  const [errors, setErrors] = useState({});

  /**
   * Validates form input on blur
   * Performs real-time validation when user leaves an input field
   * @param {React.FocusEvent<HTMLInputElement>} e - The blur event
   */
  const handleBlur = (e) => {
    const { name, value } = e.target;
    const rules = validationRules[name];

    if (rules) {
      let errorMessage = '';

      if (rules.required && !value) {
        errorMessage = rules.required;
      } else if (rules.pattern && !rules.pattern.value.test(value)) {
        errorMessage = rules.pattern.message;
      } else if (rules.minLength && value.length < rules.minLength.value) {
        errorMessage = rules.minLength.message;
      } else if (rules.validate && typeof rules.validate === 'function') {
        const validationMessage = rules.validate(value, () => formData);
        if (validationMessage !== true) {
          errorMessage = validationMessage;
        }
      }

      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: errorMessage,
      }));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${loginBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.7)',
        }}
      />

      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md z-10 relative">
        {/* Toggle Buttons */}
        <div className="flex mb-8 bg-gray-100 p-1 rounded-lg">
          <button
            className={`flex-1 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
              isLogin
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => (isLogin ? null : toggleMode())}
          >
            Sign In
          </button>
          <button
            className={`flex-1 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
              !isLogin
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => (isLogin ? toggleMode() : null)}
          >
            Register
          </button>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h2>
          <p className="mt-2 text-gray-600">
            {isLogin
              ? 'Please sign in to your account'
              : 'Join our community today'}
          </p>
        </div>

        {error && (
          <div className="mb-4 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                className="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your full name"
                required={!isLogin}
              />
              {errors.fullName && (
                <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
              )}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
              required
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="mt-1 relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder={
                  isLogin ? 'Enter your password' : 'Create a password'
                }
                required
              />
              <button
                type="button"
                onClick={() => togglePasswordVisibility('password')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600 hover:text-gray-800 focus:outline-none"
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible className="w-5 h-5" />
                ) : (
                  <AiOutlineEye className="w-5 h-5" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">{errors.password}</p>
            )}
          </div>

          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <div className="mt-1 relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Confirm your password"
                  required={!isLogin}
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility('confirm')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600 hover:text-gray-800 focus:outline-none"
                >
                  {showConfirmPassword ? (
                    <AiOutlineEyeInvisible className="w-5 h-5" />
                  ) : (
                    <AiOutlineEye className="w-5 h-5" />
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.confirmPassword}
                </p>
              )}
            </div>
          )}

          {isLogin && (
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember-me"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <Link
                  to="/forgot-password"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Forgot password?
                </Link>
              </div>
            </div>
          )}

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {isLogin ? 'Sign in' : 'Create Account'}
          </button>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => handleSocialLogin('google')}
              className="w-full inline-flex justify-center items-center gap-2 py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <FaGoogle className="w-5 h-5 text-red-500" />
              <span>Google</span>
            </button>
            <button
              type="button"
              onClick={() => handleSocialLogin('facebook')}
              className="w-full inline-flex justify-center items-center gap-2 py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <FaFacebook className="w-5 h-5 text-blue-600" />
              <span>Facebook</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;