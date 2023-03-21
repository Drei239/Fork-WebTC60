import React, {useState} from 'react';
import {Formik} from "formik";

const FormikReact = () => {
    const [members, setMembers] = useState([]);
     return (
         <div>
             <h1>Anywhere in your app!</h1>
             <Formik
                 initialValues={{ name: '', email: '', age: '' }}
                 validate={values => {
                     const errors = {};
                     if (!values.email) {
                         errors.email = 'Required';
                     } else if (
                         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                     ) {
                         errors.email = 'Invalid email address';
                     }

                     if (!values.name) {
                         errors.name = 'Required';
                     }

                     if (!values.age) {
                         errors.age = 'Required';
                     }

                     return errors;
                 }}
                 onSubmit={(values, { setSubmitting }) => {
                     // handle add news member
                     console.log({values});
                     setMembers([...members, values]);
                 }}
             >
                 {({
                       values,
                       errors,
                       touched,
                       handleChange,
                       handleBlur,
                       handleSubmit,
                       isSubmitting,
                       /* and other goodies */
                   }) => (
                     <form onSubmit={handleSubmit}>
                         <label>Name: </label>
                         <input
                             type="text"
                             name="name"
                             onChange={handleChange}
                             onBlur={handleBlur}
                             value={values.name}
                         />
                         {errors.name && touched.name && errors.name}
                         <br />
                         <label>Email: </label>
                         <input
                             type="email"
                             name="email"
                             onChange={handleChange}
                             onBlur={handleBlur}
                             value={values.email}
                         />
                         {errors.email && touched.email && errors.email}
                         <br />
                         <label>Age: </label>
                         <input
                             type="age"
                             name="age"
                             onChange={handleChange}
                             onBlur={handleBlur}
                             value={values.age}
                         />
                         <br />
                         {errors.age && touched.age && errors.age}
                         <button type="submit">
                             Add new member
                         </button>
                     </form>
                 )}
             </Formik>
             <div>
                 {members.map((member, index) => {
                     return (
                         <div key={index}>
                             <h4>{member.name}</h4>
                             <h4>{member.email}</h4>
                             <h4>{member.age}</h4>
                         </div>
                     )
                 })}
             </div>
         </div>
     )
}

export default FormikReact