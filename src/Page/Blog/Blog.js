import React from 'react';

const Blog = () => {
    return (
        <section class="text-gray-600 body-font">
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Question Ans
                    </h1>
                    <p class="mb-8 leading-relaxed text-2xl">Question -How will you improve the performance of a React Application?</p>
                    <p class="mb-8 leading-relaxed">Ans: For developers that care about keeping a user's experience enjoyable and engaged, optimizing application speed is critical.
                        According to Akamai research, a one-second delay in load time can result in a 7% drop in conversions, making it critical for developers to create apps that function well.
                        By default, React applications have an extremely quick user interface. Developers may, however, run into performance concerns as a program grows.
                        In this guide, we will discuss five important ways to optimize the performance of a React application, including pre-optimization techniques.</p>
                    
                    
                    
                    <p class="mb-8 leading-relaxed text-2xl">Question -What are the different ways to manage a state in a React application?</p>

                    <p class="mb-8 leading-relaxed">Ans: For developers that care about keeping a user's experience enjoyable and engaged, optimizing application speed is critical.
                    We use functional components to construct modern React applications. Components are JavaScript functions, which are self-contained and reusable.
The goal of using components to develop the application is to create a modular design with explicit separation of concerns. This makes code more understandable, maintainable, and, where possible, reusable.
A state is an object that stores data about a certain component. The ability to store data is not available in standard JavaScript functions. The code within them runs and then "disappears" when it is finished.
React functional components, on the other hand, can save information long after they've been executed thanks to state. When we need a component to store or "remember" something, or to behave differently depending on the surroundings, state is the way to go.</p>
                    
                    
                    
                    <p class="mb-8 leading-relaxed text-2xl" >Question -How does prototypical inheritance work?</p>
                    <p class="mb-8 leading-relaxed">Ans: JavaScript is an Object Oriented programming language based on prototypes. JavaScript now supports "prototypal inheritance," which means that objects and methods can be shared, extended, and copied thanks to the ES6 improvements.
Structure (data fields), behavior (functions / methods), and state can all be inherited easily when objects are shared (data values).
JavaScript is the most popular prototype-capable language, and its features are quite distinctive. Prototypical inheritance in JavaScript is a powerful feature that can save hours of code when utilized correctly.
To get you up to speed on the ES6 features, we'd like to introduce you to prototypal inheritance in JavaScript today.</p>
                    
                    <p class="mb-8 leading-relaxed text-2xl">Question -Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</p>
                    <p class="mb-8 leading-relaxed">Ans: If you're creating React apps, you should expect the data they use to evolve over time. Your application's user interface should represent the current data or state at the time of rendering, whether it's fully server-rendered, a mobile app, or all in a browser. Sometimes the data will be used by various components across the app, and sometimes a component won't need to reveal its secrets and can manage its own state without the help of application-wide state-store behemoths. We'll keep it personal in this post and focus on components that take care of themselves without consideration for other components..</p>
                  
                  
                  
                    <p class="mb-8 leading-relaxed text-2xl">What is a unit test? Why should write unit tests?</p>
                    <p class="mb-8 leading-relaxed">Unit testing is a software development technique in which the smallest testable pieces of a program, referred to as units, are examined separately and independently for proper operation. Software developers and, on occasion, QA employees use this testing methodology during the development process. Unit testing's major goal is to separate written code in order to test and verify if it works as intended.
Unit testing is a crucial phase in the development process because, if done correctly, it can assist uncover early faults in code that would otherwise be difficult to find in later stages of testing.
Test-driven development (TDD) is a pragmatic methodology that takes a thorough approach to producing a product through continuous testing and revision. Unit testing is a component of TDD. This.</p>
                    
                </div>

            </div>
        </section>
    );
};

export default Blog;