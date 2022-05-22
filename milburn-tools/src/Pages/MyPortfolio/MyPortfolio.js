import React from "react";
import { Helmet } from "react-helmet-async";
import me from "../../Images/me.png";

const MyPortfolio = () => {
  return (
    <main className="px-12">
      <section class="bg-white  mt-20 mb-10">
        <Helmet>
          <title>My Portfolio - Milburn Tools</title>
        </Helmet>
        <div class="container px-6 py-8 mx-auto">
          <div class="items-center lg:flex">
            <div class="lg:w-1/2">
              <h2 class="text-3xl font-bold text-gray-800 dark:text-black">
                Who I am
              </h2>

              <p class="mt-4 text-gray-500 dark:text-gray-600 lg:max-w-md">
                Hi I am Rafid, Front-End Developer{" "}
                <p class="font-bold text-blue-600 dark:text-blue-400" href="#">
                  rafidmahin20@gmail.com
                </p>{" "}
                , An enthusiastic undergraduate eager to contribute to team
                success through excellent organizational skills, time management
                and hard to work. Seeking a career opportunity with a goal to
                develop myself into a successful individual by enabling my
                skills and capabilities. Currently I am searching for
                internship, part-time employment or project work to acquire
                experience for upcoming challenges.
              </p>

              <div class="flex items-center mt-6 -mx-2">
                <p class="mx-2" href="#" aria-label="Twitter">
                  <svg
                    class="w-5 h-5 text-gray-700 fill-current dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M492 109.5c-17.4 7.7-36 12.9-55.6 15.3 20-12 35.4-31 42.6-53.6-18.7 11.1-39.4 19.2-61.5 23.5C399.8 75.8 374.6 64 346.8 64c-53.5 0-96.8 43.4-96.8 96.9 0 7.6.8 15 2.5 22.1-80.5-4-151.9-42.6-199.6-101.3-8.3 14.3-13.1 31-13.1 48.7 0 33.6 17.2 63.3 43.2 80.7-16-.4-31-4.8-44-12.1v1.2c0 47 33.4 86.1 77.7 95-8.1 2.2-16.7 3.4-25.5 3.4-6.2 0-12.3-.6-18.2-1.8 12.3 38.5 48.1 66.5 90.5 67.3-33.1 26-74.9 41.5-120.3 41.5-7.8 0-15.5-.5-23.1-1.4C62.8 432 113.7 448 168.3 448 346.6 448 444 300.3 444 172.2c0-4.2-.1-8.4-.3-12.5C462.6 146 479 129 492 109.5z" />
                  </svg>
                </p>

                <p class="mx-2" href="#" aria-label="Facebook">
                  <svg
                    class="w-5 h-5 text-gray-700 fill-current dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M426.8 64H85.2C73.5 64 64 73.5 64 85.2v341.6c0 11.7 9.5 21.2 21.2 21.2H256V296h-45.9v-56H256v-41.4c0-49.6 34.4-76.6 78.7-76.6 21.2 0 44 1.6 49.3 2.3v51.8h-35.3c-24.1 0-28.7 11.4-28.7 28.2V240h57.4l-7.5 56H320v152h106.8c11.7 0 21.2-9.5 21.2-21.2V85.2c0-11.7-9.5-21.2-21.2-21.2z" />
                  </svg>
                </p>

                <p class="mx-2" href="#" aria-label="Linkden">
                  <svg
                    class="w-5 h-5 text-gray-700 fill-current dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M417.2 64H96.8C79.3 64 64 76.6 64 93.9V415c0 17.4 15.3 32.9 32.8 32.9h320.3c17.6 0 30.8-15.6 30.8-32.9V93.9C448 76.6 434.7 64 417.2 64zM183 384h-55V213h55v171zm-25.6-197h-.4c-17.6 0-29-13.1-29-29.5 0-16.7 11.7-29.5 29.7-29.5s29 12.7 29.4 29.5c0 16.4-11.4 29.5-29.7 29.5zM384 384h-55v-93.5c0-22.4-8-37.7-27.9-37.7-15.2 0-24.2 10.3-28.2 20.3-1.5 3.6-1.9 8.5-1.9 13.5V384h-55V213h55v23.8c8-11.4 20.5-27.8 49.6-27.8 36.1 0 63.4 23.8 63.4 75.1V384z" />
                  </svg>
                </p>

                <p class="mx-2" href="#" aria-label="Github">
                  <svg
                    class="w-5 h-5 text-gray-700 fill-current dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
                  </svg>
                </p>
              </div>
            </div>

            <div class="mt-8 lg:mt-0 lg:w-1/2">
              <div class="flex items-center justify-center lg:justify-end">
                <div class="max-w-lg">
                  <img
                    class="object-cover object-center w-full h-64 rounded-md shadow"
                    src={me}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="p-10">
        <h1 className="text-2xl mb-3 font-bold uppercase">
          Educational Background
        </h1>
        <ol className="border-l border-gray-300">
          <li>
            <div className="flex flex-start items-center pt-3">
              <div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3"></div>
            </div>
            <div className="mt-0.5 ml-4 mb-6">
              <h4 className="text-gray-800 font-semibold text-xl mb-1.5">
                Bsc.CSE
              </h4>
              <p className="text-gray-500 mb-3">
                American International University Bangladesh
              </p>
              <span>CGPA-3.63</span>
            </div>
          </li>
          <li>
            <div className="flex flex-start items-center pt-2">
              <div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3"></div>
            </div>
            <div className="mt-0.5 ml-4 mb-6">
              <h4 className="text-gray-800 font-semibold text-xl mb-1.5">
                HSC
              </h4>
              <p className="text-gray-500 mb-3">
                Saint Joseph Higher Secondary School
              </p>
              <span>GPA-5.00</span>
            </div>
          </li>
          <li>
            <div className="flex flex-start items-center pt-2">
              <div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3"></div>
            </div>
            <div className="mt-0.5 ml-4 pb-5">
              <h4 className="text-gray-800 font-semibold text-xl mb-1.5">
                SSC
              </h4>
              <p className="text-gray-500 mb-3">Feni Govt. Pilot High School</p>
              <span>GPA-5.00</span>
            </div>
          </li>
        </ol>
      </section>
      <section className="p-10">
        <h1 className="text-2xl font-bold text-center mb-10 uppercase">
          Skills
        </h1>
        <ol className="border-l md:border-l-0 md:border-t border-gray-300 md:flex md:justify-center md:gap-6">
          <li>
            <div className="flex md:block flex-start items-center pt-2 md:pt-0">
              <div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 md:ml-0 mr-3 md:mr-0 md:-mt-1"></div>
            </div>
            <div className="mt-0.5 ml-4 md:ml-0 pb-5">
              <h4 className="text-gray-800 font-semibold text-xl mb-1.5">
                HTML
              </h4>
              <p className="text-gray-500 mb-3">
                I have the basic knowledge of html and html5.
              </p>
            </div>
          </li>
          <li>
            <div className="flex md:block flex-start items-center pt-2 md:pt-0">
              <div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 md:ml-0 mr-3 md:mr-0 md:-mt-1"></div>
            </div>
            <div className="mt-0.5 ml-4 md:ml-0 pb-5">
              <h4 className="text-gray-800 font-semibold text-xl mb-1.5">
                CSS
              </h4>
              <p className="text-gray-500 mb-3">
                I have the basic knowledge of css. And also have the knowledge
                of tailwind and bootstrap css framework. But i prefer tailwind.
                I like to work with tailwind framework very very much.
              </p>
            </div>
          </li>
          <li>
            <div className="flex md:block flex-start items-center pt-2 md:pt-0">
              <div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 md:ml-0 mr-3 md:mr-0 md:-mt-1"></div>
            </div>
            <div className="mt-0.5 ml-4 md:ml-0 pb-5">
              <h4 className="text-gray-800 font-semibold text-xl mb-1.5">
                Javascript
              </h4>
              <p className="text-gray-500 mb-3">
                I have the basic knowledge of js language. I solved many
                prolblems using js and also made websites using js. I use react
                as js library. i have the basic knowledge of react library.
              </p>
            </div>
          </li>
        </ol>
      </section>
      
      <section className="bg-white mb-10">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-black">explore my <span className="text-blue-500">projects</span></h1>
                
                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
                    <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
                        <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                            </svg>
                        </span>

                       <a href="https://laptop-house.web.app/"> <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Apple Ecosystem</h1></a>

                        <p className="text-gray-500 dark:text-gray-300">
                            its a apple ecosystem websites meaning u can find apples products here like iphone macs macbooks airpods. Where customers can purchase products.
                        </p>

                        <p href="#" className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-200 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                            <span className="mx-1">read more</span>
                            <svg class="w-4 h-4 mx-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </p>
                    </div>

                    <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
                        <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                            </svg>
                        </span>

                       <a href="https://illusion-wedding.web.app/"> <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Illusion Wedding</h1></a>

                        <p className="text-gray-500 dark:text-gray-300">
                            Its a website of indenpendant phothographer. Where u can see his works and customers reviews. And u can see his packages and can book him for your weddings.
                        </p>

                        <p href="#" className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-200 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                            <span className="mx-1">read more</span>
                            <svg className="w-4 h-4 mx-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </p>
                    </div>

                    <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
                        <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                            </svg>
                        </span>

                        <a href="https://playstation-five-rafid.netlify.app/"><h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Playstation 5</h1></a>

                        <p className="text-gray-500 dark:text-gray-300">
                            Its a website of a product called playstation. Where u can see the producs functions and the customer reviews.
                        </p>

                        <p href="#" className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-200 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                            <span className="mx-1">read more</span>
                            <svg className="w-4 h-4 mx-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </main>
  );
};

export default MyPortfolio;
