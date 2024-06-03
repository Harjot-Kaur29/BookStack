import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto p-4 ">
      <h1 className="text-4xl font-bold mb-4 mt-20 text-blue-600 text-center">About Us</h1>
      <div className="bg-white shadow-md rounded-lg p-6 bg-blue-100 mt-10">
        <h2 className="text-2xl font-semibold mb-2">Welcome to Our Book Website</h2>
        <p className="mb-4">
          - Comprehensive Book Reviews: Access detailed reviews covering a wide range of academic subjects, including commerce, mathematics, biology, and more.
          <br/>
          - Verified Faculty Expertise: Benefit from insights provided by our team of verified faculty members with extensive educational backgrounds and experience.
          <br/>
          - User-friendly Interface: Navigate our intuitive platform designed with students in mind, ensuring easy access to valuable resources and information.
          <br/>
          - Community Engagement: Join a vibrant community of students and educators dedicated to sharing knowledge and fostering academic growth.
          <br/>
          - Customized Recommendations: Receive personalized book recommendations tailored to your academic interests and preferences.
        </p>
        <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
        <p className="mb-4">
          Our mission at BookStack is to connect students with a diverse team of verified faculty members dedicated to providing insightful book reviews. Through collaboration and expertise, we aim to enhance learning experiences and promote academic excellence. We are committed to fostering a supportive environment that encourages lifelong learning and critical thinking.
        </p>
        <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
        <p className="mb-4">
          At BookStack, our vision is to foster a vibrant online community where students have access to comprehensive book reviews across various academic disciplines. We envision a platform where knowledge is shared freely, empowering students to make informed decisions about their educational resources.
        </p>
        <h3 className="text-xl font-semibold mb-2">Join Our Community</h3>
        <p className="mb-4">
          Whether you are a casual reader or a dedicated bibliophile, we invite you to join our community. Share your favorite books, write reviews, and connect with other book lovers.
        </p>
        <div className="flex justify-center mt-6">
          <a 
            href="mailto:ns313553@gmail.com" 
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
