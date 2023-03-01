import { useState, useRef } from 'react';
import { Formik, Form, Field, ErrorMessage, FormikValues } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import UserFormProps from 'types/props/UserFormProps';
import Notification from 'components/UI/notification/Notification';

import eyeOpen from 'assets/eye-open.svg';
import eyeClose from 'assets/eye-close.svg';

import 'react-toastify/dist/ReactToastify.css';

import styles from './UserForm.module.scss';

const validationSchema = Yup.object({
  email: Yup.string().required('Email is required').email('Invalid email'),
  password: Yup.string().required('Password is required').min(6, 'Password is too short'),
});

const UserForm: React.FC<UserFormProps> = ({ title, linkText, buttonText, href, handleSubmit }) => {
  const [showPass, setShowPass] = useState<boolean>(false);
  const inputPassRef = useRef<HTMLInputElement | null>(null);

  if (inputPassRef.current) {
    inputPassRef.current.type = showPass ? 'text' : 'password';
  }

  const toggleShowPassword = (): void => {
    setShowPass((showPass) => !showPass);
  };

  return (
    <>
      <section className="h-screen grid place-items-center bg-[#121f3d]">
        <div className="form-container">
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={({ email, password }: FormikValues) => handleSubmit(email, password)}
          >
            {({ values, errors, touched }) => (
              <Form className="w-[350px] p-[20px] border border-white rounded-[5px]">
                <div className="mb-[30px] flex items-center justify-between">
                  <h3 className="text-3xl text-white">{title}</h3>
                  <Link
                    className="px-[15px] py-[7px] rounded-[5px] border text-[#ccc] transition-all hover:border-[#98ca3f] hover:text-white"
                    to={href}
                  >
                    {linkText}
                  </Link>
                </div>
                <div className="mb-[25px]">
                  <div className="relative">
                    <svg
                      className="absolute top-1/2 left-[20px] translate-x-[-50%] translate-y-[-50%]"
                      width="25px"
                      height="25px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                      <g id="SVGRepo_iconCarrier">
                        <path
                          d="M3.29289 5.29289C3.47386 5.11193 3.72386 5 4 5H20C20.2761 5 20.5261 5.11193 20.7071 5.29289M3.29289 5.29289C3.11193 5.47386 3 5.72386 3 6V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V6C21 5.72386 20.8881 5.47386 20.7071 5.29289M3.29289 5.29289L10.5858 12.5857C11.3668 13.3668 12.6332 13.3668 13.4142 12.5857L20.7071 5.29289"
                          stroke="#ccc"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </svg>
                    <Field
                      className={`${styles.input} w-full p-[10px] pl-[40px] border border-[#ccc] rounded-[5px] text-white text-lg bg-transparent transition-all`}
                      id="email"
                      name="email"
                      type="text"
                      autoComplete="off"
                      placeholder=" "
                      style={errors.email && touched.email ? { borderColor: '#8a2f2f' } : {}}
                    />
                    <label
                      className="absolute top-1/2 left-[40px] px-[5px] text-[#ccc] pointer-events-none bg-[#121f3d] translate-y-[-50%] transition-all"
                      htmlFor="email"
                      style={errors.email && touched.email ? { color: '#8a2f2f' } : {}}
                    >
                      Email
                    </label>
                  </div>
                  <ErrorMessage className="mt-[10px] text-[#8a2f2f]" name="email" component="div" />
                </div>
                <div className="mb-[30px]">
                  <div className="relative">
                    <svg
                      className="absolute top-1/2 left-[20px] translate-x-[-50%] translate-y-[-50%]"
                      width="25px"
                      height="25px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                      <g id="SVGRepo_iconCarrier">
                        <path
                          d="M13 14C13 13.4477 12.5523 13 12 13C11.4477 13 11 13.4477 11 14V16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16V14Z"
                          fill="#ccc"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7 8.12037C5.3161 8.53217 4 9.95979 4 11.7692V17.3077C4 19.973 6.31545 22 9 22H15C17.6846 22 20 19.973 20 17.3077V11.7692C20 9.95979 18.6839 8.53217 17 8.12037V7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7V8.12037ZM15 7V8H9V7C9 6.64936 9.06015 6.31278 9.17071 6C9.58254 4.83481 10.6938 4 12 4C13.3062 4 14.4175 4.83481 14.8293 6C14.9398 6.31278 15 6.64936 15 7ZM6 11.7692C6 10.866 6.81856 10 8 10H16C17.1814 10 18 10.866 18 11.7692V17.3077C18 18.7208 16.7337 20 15 20H9C7.26627 20 6 18.7208 6 17.3077V11.7692Z"
                          fill="#ccc"
                        />
                      </g>
                    </svg>
                    <Field
                      className={`${styles.input} w-full py-[10px] pl-[40px] pr-[40px] border rounded-[5px] text-white text-lg bg-transparent transition-all`}
                      id="pass"
                      name="password"
                      type="password"
                      autoComplete="off"
                      placeholder=" "
                      style={errors.password && touched.password ? { borderColor: '#8a2f2f' } : {}}
                      innerRef={inputPassRef}
                    />
                    <label
                      className="absolute top-1/2 left-[40px] px-[5px] text-[#ccc] pointer-events-none bg-[#121f3d] translate-y-[-50%] transition-all"
                      htmlFor="pass"
                      style={errors.password && touched.password ? { color: '#8a2f2f' } : {}}
                    >
                      Password
                    </label>
                    {values.password.length > 0 && (
                      <button
                        className="absolute top-1/2 right-[10px] translate-y-[-50%]"
                        type="button"
                        onClick={toggleShowPassword}
                      >
                        <img src={showPass ? eyeClose : eyeOpen} alt="Eye" />
                      </button>
                    )}
                  </div>
                  <ErrorMessage className="mt-[10px] text-[#8a2f2f]" name="password" component="div" />
                </div>
                <button
                  className="block w-full p-[7px] rounded-[5px] text-center text-white uppercase bg-[#98ca3f] transition-all hover:bg-[#7ca339]"
                  type="submit"
                >
                  {buttonText}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </section>
      <Notification />
    </>
  );
};

export default UserForm;
