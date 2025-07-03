import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const register = async (userData) => {
    try {
      const { password, confirmPassword, ...userDataWithoutPassword } = userData;
      
      // Check if user already exists
      const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
      if (existingUsers.some(user => user.email === userData.email)) {
        return { success: false, error: 'Email already registered' };
      }

      // Store user with hashed password
      const userToStore = {
        ...userDataWithoutPassword,
        password: btoa(password) // Basic encoding for demo purposes
      };
      
      // Store user in users array
      existingUsers.push(userToStore);
      localStorage.setItem('users', JSON.stringify(existingUsers));

      // Store current user (without password)
      localStorage.setItem('user', JSON.stringify(userDataWithoutPassword));
      localStorage.setItem('isAuthenticated', 'true');
      
      setUser(userDataWithoutPassword);
      return { success: true };
    } catch (error) {
      console.error('Registration error:', error);
      return { success: false, error: 'Registration failed' };
    }
  };

  const login = async (credentials) => {
    try {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find(u => u.email === credentials.email);
      
      if (user && btoa(credentials.password) === user.password) {
        const { password, ...userWithoutPassword } = user;
        localStorage.setItem('user', JSON.stringify(userWithoutPassword));
        localStorage.setItem('isAuthenticated', 'true');
        setUser(userWithoutPassword);
        return { success: true };
      }
      
      return { success: false, error: 'Invalid email or password' };
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: 'Login failed' };
    }
  };

  const loginWithGoogle = async () => {
    try {
      // Simulated Google login for demo
      const googleUser = {
        email: 'demo@gmail.com',
        fullName: 'Demo User',
        provider: 'google'
      };
      
      localStorage.setItem('user', JSON.stringify(googleUser));
      localStorage.setItem('isAuthenticated', 'true');
      setUser(googleUser);
      return { success: true };
    } catch (error) {
      console.error('Google login error:', error);
      return { success: false, error: 'Google login failed' };
    }
  };

  const loginWithFacebook = async () => {
    try {
      // Simulated Facebook login for demo
      const facebookUser = {
        email: 'demo@facebook.com',
        fullName: 'Demo User',
        provider: 'facebook'
      };
      
      localStorage.setItem('user', JSON.stringify(facebookUser));
      localStorage.setItem('isAuthenticated', 'true');
      setUser(facebookUser);
      return { success: true };
    } catch (error) {
      console.error('Facebook login error:', error);
      return { success: false, error: 'Facebook login failed' };
    }
  };

  const logout = async () => {
    try {
      localStorage.removeItem('user');
      localStorage.removeItem('isAuthenticated');
      setUser(null);
      return { success: true };
    } catch (error) {
      console.error('Logout error:', error);
      return { success: false, error: 'Logout failed' };
    }
  };

  const value = {
    user,
    loading,
    register,
    login,
    logout,
    loginWithGoogle,
    loginWithFacebook
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;