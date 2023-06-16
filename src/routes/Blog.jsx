import { Helmet } from 'react-helmet-async';
import { Dropdown } from '../components/FAQ';

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blogs - Wheeltopia</title>
      </Helmet>
      <section className="container my-7 max-w-lg flex-1 space-y-3 sm:px-0">
        {[
          [
            'What is an access token and refresh token? How do they work and where should we store them on the client-side?',

            "An access token is a credential that allows a client application to access protected resources after a user authenticates. A refresh token is a long-lived credential that allows the client application to obtain a new access token without requiring the user to re-authenticate. Access tokens should be stored securely on the client-side, while refresh tokens are more sensitive and should be stored securely, preferably on the server-side. It's important to follow security best practices to protect against unauthorized access and potential vulnerabilities.",
          ],
          [
            'Compare SQL and NoSQL databases?',

            "SQL databases are structured and have predefined rules for storing and organizing data. They are good for complex relationships and strict data consistency. NoSQL databases are flexible and can handle large amounts of unstructured data. They are great for scalability and performance but may have less strict rules for data consistency. The choice depends on your application's needs and the type of data you are working with.",
          ],
          [
            'What is express js? What is Nest JS?',

            `Express.js is a simple and flexible framework for building web applications in Node.js. Nest.js is a modern and scalable framework built on top of Express.js that offers more features and a structured approach for developing server-side applications.`,
          ],
          [
            'What is MongoDB aggregate and how does it work?',

            `MongoDB's aggregate is a powerful feature that allows you to perform advanced data processing and analysis operations on collections of documents. It works by providing a way to define a pipeline of stages that the data will go through, enabling complex data transformations and aggregations.
          
          In an aggregate operation, you can specify multiple stages such as filtering, grouping, sorting, and applying various transformations on the data. Each stage in the pipeline modifies the document stream, passing the results to the next stage.
          
          For example, you can use aggregate to find the average, sum, or maximum value of a specific field across multiple documents, or to perform more complex operations like grouping data by a certain criteria and calculating aggregated results.
          
          Overall, aggregate in MongoDB allows you to manipulate and analyze data using a flexible and customizable pipeline of stages, enabling you to perform advanced data processing tasks efficiently and effectively.`,
          ],
        ].map(([q, a], i) => (
          <Dropdown key={i} ques={q} ans={a} />
        ))}
      </section>
    </>
  );
};
export default Blog;
