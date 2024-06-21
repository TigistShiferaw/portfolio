import React from 'react';

const About: React.FC = () => {
  return (
    <div className="mt-12 px-6 lg:px-8 xl:px-10">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Tigist Shiferaw Yitayew</h1>
          <p className="text-xl text-gray-600">BSc in Electrical and Computer Engineering</p>
        </header>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-600 text-center mb-6">EDUCATION</h2>
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-2xl font-bold text-gray-800">Addis Ababa University</h3>
            <p className="text-lg text-gray-600">Addis Ababa, Ethiopia</p>
            <p className="mt-2 text-gray-800">Bachelor of Science in Electrical and Computer Engineering</p>
            <p className="text-gray-800">Sep. 2017 - 2022</p>
            <p className="text-gray-800">Specialization: Communications and Networks</p>
            <p className="text-gray-800">GPA: 3.86/4.0</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-600 text-center mb-6">AWARDS</h2>
          <div className="bg-white p-6 shadow-md rounded-lg">
            <ul className="list-disc list-inside text-gray-800">
              <li className="mb-2">Very Great Distinction certificate award from Addis Ababa Institute of Technology 2022</li>
              <li>Scholarship award from the Ethiopian Physics Society in North America</li>
              <ul className="list-disc list-inside ml-6">
                <li>Participated in the mentorship program for postgraduate study information.</li>
              </ul>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-600 text-center mb-6">PROFESSIONAL EXPERIENCE</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-xl font-bold text-gray-800">Back-end Developer at A2SV Foundation</h3>
              <ul className="list-disc list-inside text-gray-800 mt-2">
                <li>Developed server-side algorithms for efficient data transfer to client-side web applications.</li>
                <li>Collaborated with front-end developers to optimize data communication.</li>
              </ul>
            </div>
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-xl font-bold text-gray-800">Hackathon Mentorship</h3>
              <ul className="list-disc list-inside text-gray-800 mt-2">
                <li>Mentored participants in Generative AI and Startup Ethiopia hackathon competitions.</li>
                <li>Assisted in product development, pitch deck preparation, and presentation coaching.</li>
              </ul>
            </div>
            <div className="bg-white p-6 shadow-md rounded-lg md:col-span-2">
              <h3 className="text-xl font-bold text-gray-800">Research Assistant at Verified Aerospace System Lab, University of Michigan</h3>
              <ul className="list-disc list-inside text-gray-800 mt-2">
                <li>Worked on the project "Verified Implementation of Quadcopter Controller" under Prof. Jean-Baptiste Jeannin.</li>
                <li>Contributed to the Zélus compiler using OCaml, adding keywords and communication interfaces with C++ and C.</li>
                <li>Co-authored a paper titled “Synchronous Programming and Refinement Types in Robotics: From Verification to Implementation”.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-600 text-center mb-6">RELEVANT PROJECTS</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-xl font-bold text-gray-800">Adot Platform Development</h3>
              <p className="text-gray-800 mt-2">Developed a comprehensive platform to aid pregnant women, recognized by the Ministry of Health.</p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-xl font-bold text-gray-800">Audio Noise Cancellation</h3>
              <p className="text-gray-800 mt-2">Final thesis project: Developed a CNN model for classifying environmental audio noises using Python. Applied spectral subtraction to reduce identified noise from audio signals.</p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-xl font-bold text-gray-800">Atrons Platform Development</h3>
              <p className="text-gray-800 mt-2">Back-end development leading to a team win of 8000 USD.</p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-xl font-bold text-gray-800">Data Compression</h3>
              <p className="text-gray-800 mt-2">Developed a Java application using Huffman coding for data compression.</p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-xl font-bold text-gray-800">University Café Attendance System</h3>
              <p className="text-gray-800 mt-2">Designed an Android application using Object-Oriented Programming principles.</p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-xl font-bold text-gray-800">Digital Clock Design Using Proteus</h3>
              <p className="text-gray-800 mt-2">Created a digital clock using Proteus.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-600 text-center mb-6">ACHIEVEMENTS</h2>
          <div className="bg-white p-6 shadow-md rounded-lg">
            <p className="text-gray-800">Solved over 670 LeetCode problems</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-600 text-center mb-6">SKILLS</h2>
          <div className="bg-white p-6 shadow-md rounded-lg">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-bold text-gray-800">Programming Languages</h3>
                <p className="text-gray-800">Python, C++, Java, MATLAB, JavaScript, C#</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">Software Frameworks</h3>
                <p className="text-gray-800">Node.js, .Net</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">Databases</h3>
                <p className="text-gray-800">MongoDB, PostgreSQL</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">Operating Systems</h3>
                <p className="text-gray-800">Windows, Linux (Ubuntu)</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">Communication</h3>
                <p className="text-gray-800">English (Advanced), Amharic (Native)</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-600 text-center mb-6">EXTRA COURSES AND CERTIFICATIONS</h2>
          <div className="bg-white p-6 shadow-md rounded-lg">
            <ul className="list-disc list-inside text-gray-800">
              <li className="mb-2">Cisco Certificate of CCNAv7: 3-course completion on networking</li>
              <li>Meri leadership training program: Developed self-confidence skill, presentation skill, and time management skills.</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-600 text-center mb-6">ACTIVITIES AND SOCIETIES</h2>
          <div className="bg-white p-6 shadow-md rounded-lg">
            <ul className="list-disc list-inside text-gray-800">
              <li className="mb-2">Black In AI member</li>
              <li className="mb-2">IEEE executive student member in Ethiopia</li>
              <li className="mb-2">EHPSA (Ethiopian Health Profession Students Association): Volunteering to develop their website</li>
              <li>Tutor: Provided lectures and problem-solving sessions in Math and Physics for high school and first-year university students.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
