import React from 'react';

const Blog = () => {
    return (
        <div className='w-[1180px] mx-auto'>
            <h2 className='text-center mt-4 font-bold text-3xl text-[#000000]'>
                This is Importance Question interview developer.
            </h2>
            <div className='mt-4'>
                <h4 className='text-[#f8e91d] font-bold text-xl'>
                  <span className='text-[#e91a1a]'>1.</span> What is an access token and 
                  refresh token? How do they work and where should we store them on the client-side?
                </h4>
                <p className='font-semibold pl-8'>
                  You can store the access token and refresh token in the server-side session. The application can use web sessions to communicate with the server.
                 The token is then available for any requests originating from server-side code
                </p>
                {/*question 2 */}
                <h4 className='text-[#f8e91d] font-bold text-xl mt-4'>
                <span className='text-[#e91a1a]'>2.</span> Compare SQL and NoSQL databases?
                </h4>
                <p className='font-semibold pl-8'>
                  SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better 
                  for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
                </p>
                 {/*question 3 */}
                 <h4 className='text-[#f8e91d] font-bold text-xl mt-4'>
                 <span className='text-[#e91a1a]'>3.</span> What is express js? What is Nest JS?
                 </h4>
                 <p className='font-semibold pl-8'>
                   Express is a minimalist and flexible framework that is easy to use and has a large community of developers. NestJS, on the other hand, is a newer framework that provides additional
                   features such as dependency injection, a modular architecture, and an intuitive CLI.
                 </p>
                 {/*question 4*/}
                 <h4 className='text-[#f8e91d] font-bold text-xl mt-4'>
                 <span className='text-[#e91a1a]'>4.</span> What is MongoDB aggregate and how does it work?
                 </h4>
                 <p className='font-semibold pl-8'>
                  What is Aggregation in MongoDB? Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, s
                  ort, group, reshape and modify documents that pass through the pipeline.
                 </p>
            </div>
        </div>
    );
};

export default Blog;