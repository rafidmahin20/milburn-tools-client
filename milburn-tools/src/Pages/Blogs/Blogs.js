import React from "react";
import { Helmet } from "react-helmet-async";

const Blogs = () => {
  return (
    <section className="px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2">
      <Helmet>
        <title>Blogs - Milburn Tools</title>
      </Helmet>
      <div className="grid grid-cols-1 gap-24 md:grid-cols-2">
        <div>
          <h3 className="mt-10 mb-3 font-bold text-gray-900">
            How will you improve the performance of a React Application?
          </h3>
          <p className="text-gray-600">
            - using react fragment to avoid adding extra nodes to the dom. Use production build. Use react.suspense and react.lazy for lazy loading components. Use react memo for components memorization. React functions are the functional components and arguements are props.
          </p>
          <h3 className="mt-10 mb-3 font-bold text-gray-900">
          What are the different ways to manage a state in a React application?
          </h3>
          <p className="text-gray-600">
            -  what is state is basically data that changes over time. So its information data it changes over time.And any time you add. Application state management is one of the hardest parts of building and maintaining react applications. The number of options you have is numerous and the reason is that its just such a hard problem with so many nuances and trade-offs.
          </p>
        </div>
        <div>
          <h3 className="mt-10 mb-3 font-bold text-gray-900">
          How does prototypical inheritance work?
          </h3>
          <p className="text-gray-600">
            - prototypical inheritance object inherit directly from other objects. When js tries to access an attribute of an object. It would first look in that object and if it doesn't find that attribute in that object it will trackup the prototype chain to a parent object. Creating subclass overrriding in prototype chain adding prototype to master object.
          </p>
        </div>
        <div>
          <h3 className="mt-10 mb-3 font-bold text-gray-900">
          What is a unit test? Why should write unit tests?
          </h3>
          <p className="text-gray-600">
            - It also called components testing. It is performed on standalone module to check whether it is developed correctly. Unit testing is done by developers. Unit tests finds small components of the application. Unit tests are used to test individual blocks of functionality.
          </p>
        </div>
        <div>
          <h3 className="mt-10 mb-3 font-bold text-gray-900">
          Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts
          </h3>
          <p className="text-gray-600">
            - You cannot change the state directly. React willnot prevent you from modifying the state directly. Chaningit directly it willlose control of the state across all components. it cant change the state directly but istead it creates pending state transition.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
