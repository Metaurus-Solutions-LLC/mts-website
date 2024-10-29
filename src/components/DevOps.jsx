import { Link } from 'react-router-dom'
import devops from '../assets/devops.png'

function DevOps() {
    return (
       <div  className="y-wrap">
         <div  className="page">
           <div  className="topic-container"> {/* topic-container */}
             <div  className="topic-setup"> {/* topic-setup */}
               <h2  className="my-0 lg:my-4">DevOps</h2>
               <div>
                 <p  className="my-4">Metaurus Solutions helps you to bridge the gap between development and operations teams, fostering a culture of collaboration and continuous improvement.  With an approach that emphasizes automation, continuous integration, and continuous delivery (CI/CD), which significantly reduces the time to market for new features and updates.</p>
               </div>
               <div>
                 <p  className="my-4"><strong>Take advantage of our broad industry and technical experience. </strong>Successful DevOps deployment project and cloud infrastructure management to improve the quality and reliability of software.</p>
               </div>
               <div>
                 <p  className="my-4"><strong>DevOps also promotes greater scalability and flexibility within organizations. </strong>By standardizing and automating workflows, DevOps makes it easier to scale applications and infrastructure to meet growing demands. This scalability is crucial for businesses looking to expand their operations or handle increased traffic without compromising performance.</p>
               </div>
               <div>
                 <p  className="my-4"><strong>Experience improvements that help your team to deliver quality software. </strong>When development and operations teams work together towards common goals, it creates a sense of ownership and accountability.  DevOps fosters a culture of shared responsibility and transparency.  This collaborative environment not only improves communication and reduces friction but also empowers team members to take initiative and contribute to the organization’s success.  </p>
               </div>
             </div>  
             <div  className="w-8/12 md:w-10/12 md:max-w-2xl"> {/* topic-image */}
               <img className="rounded-3xl" src={devops} alt="devops image" />
             </div>  
           </div>
           <h2 className="mx-16 px-4">DevOps Services</h2>
           <p className="mx-16 px-4">Manage your IT application deployment with Metaurus Solutions' DevOps Services</p>
           <div className="mx-24 px-4">
             <div className="grid grid-cols-4 gap-2">
               <div className="tile-container">
                <h3 className="text-center">Assessment and Planning</h3>
                <p className="text-center m-2">We assess and help you to understand current capabilities across the entire software release process and quickly identify opportunities for improvement.</p>
               </div>
               <div className="tile-container">
                <h3 className="text-center">Pilot Framework Creation</h3>
                <p className="text-center m-2">We help you select an IT infrastructure with automation and improved processes. We work with you to optimize your infrastructure to achieve significant reduction of your time, effort, and cost.</p>
               </div>
               <div className="tile-container">
                <h3 className="text-center">Framework Implementation</h3>
                <p className="text-center m-2">We manage and assist you with implementing the pilot framework and ensure your team is set up for success.</p>
               </div>
               <div className="tile-container">
                <h3 className="text-center">CI/CD Pipeline</h3>
                <p className="text-center m-2">We help organizations to set up a continuous integration and continuous delivery pipeline for their applications and services.</p>
                <p className="mt-8 mx-16 my-4 underline"><Link to="/CICD1">CI/CD Example</Link></p>
               </div>
               <div className="tile-container">
                <h3 className="text-center">Provisioning Automation</h3>
                <p className="text-center m-2">We build the mechanisms to automate creating, preparing, and activating the underlying infrastructure of a cloud environment. It can include installing networking components and services.</p>
               </div>
               <div className="tile-container">
                <h3 className="text-center">Security Integration (DevSecOps)</h3>
                <p className="text-center m-2">We help you to integrate security testing at every stage of software development, employ static code analysis tools and include tools to build software that is efficient and secure.</p>
               </div>
               <div className="tile-container">
                <h3 className="text-center">Cost Management</h3>
                <p className="text-center m-2">We help to enable on-demand running of cloud infrastructure, significantly reducing costs by ensuring that resources are only used when necessary, thus optimizing spending​​.</p>
               </div>
               <div className="tile-container">
                <h3 className="text-center">Cluster Management</h3>
                <p className="text-center m-2">Monitoring and controlling the operations of clusters in large-scale computing deployment.</p>
               </div>
             </div>
           </div>
           <div  className="topic-grabber"> {/* topic-grabber */}
             <div  className="w-[90%] m-auto"> {/* page-rule */}
               <div className="mx-2 my-20 bg-black"></div>
             </div>
             <h2  className="flex mx-16 my-4">Improve your DevOps by adopting best practices.</h2>
             <p  className="mt-8 mx-16 text-xs my-4 md:text-xl">Metaurus Solutions will help you to improve your DevOps by adopting best practices such as continuous integration and delivery (CI/CD), automating processes, fostering a culture of collaboration between development and operations teams, and continuously monitoring and optimizing your workflows to enhance efficiency and quality.</p>
           </div>
           {/* topic-quote future section */}
           <div> {/* topic-question */}
             <h2  className="text-red-600 mt-8 mx-16 my-4">How can an enhanced, automated software deployment process help your business achieve its objectives?</h2>
           </div>  
           <div  className="mts-partner-today bg-gradient-to-t from-blue-300 to-white m-4 py-[1em] rounded-md">
             <h1  className="text-[#182335] mt-8 mx-16 my-4">Start partnering with Metaurus Solutions today.</h1>
             <h2  className="text-[#182335] mt-8 mx-16 my-4">Find out how Metaurus Solutions can help you to achieve your objectives with improved DevOps management and execution.</h2>
             <h2 className="text-[darkred] mt-8 mx-16 my-4 underline"><Link to="/email">Contact Us</Link></h2>
           </div>  
         </div>
       </div>
    );
  }
  
export default DevOps;