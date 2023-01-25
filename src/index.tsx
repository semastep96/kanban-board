import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { ErrorPage } from './pages/ErrorPage';
import { Root } from './pages/Root';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider } from '@mui/material';
import { appTheme } from './mui/appTheme';
import { SignIn } from './pages/SignIn';
import RequireAuth from './hoc/RequireAuth';
import { AuthProvider } from './hoc/AuthProvider';
import { SignUp } from './pages/SignUp';
import { Boards } from './pages/Boards';
import { Board } from './pages/Board';
import { CreateBoard } from './pages/CreateBoard';
import { DndProvider } from 'react-dnd';
import { TouchBackend } from 'react-dnd-touch-backend';
import { DndPreview } from './components/dnd/DndPreview';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <RequireAuth>
        <Root />
      </RequireAuth>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'boards',
        element: <Boards />,
      },
      {
        path: 'boards/new',
        element: <CreateBoard />,
      },
      { path: 'boards/:boardId', element: <Board /> },
    ],
  },
  {
    path: '/signin',
    element: <SignIn />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <DndProvider backend={TouchBackend} options={{ enableMouseEvents: true, delayTouchStart: 50 }}>
    <React.StrictMode>
      <ThemeProvider theme={appTheme}>
        <AuthProvider>
          <RouterProvider router={router} />
          <DndPreview />
        </AuthProvider>
      </ThemeProvider>
    </React.StrictMode>
  </DndProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
