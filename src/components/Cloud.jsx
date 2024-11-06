import { Link } from 'react-router-dom'
import cloud from '../assets/cloud_compute.jpg'

function Cloud() {
    return (
       <div  className="y-wrap">
         <div  className="page">
           <div  className="topic-container"> {/* topic-container */}
             <div  className="topic-setup"> {/* topic-setup */}
               <h2  className="my-0 lg:my-4">Cloud Infrastructure</h2>
               <h3>Distinguishing Characteristics of Cloud Computing</h3>
               <div>
                 <p  className="my-4">Cloud computing is the on-demand availability of computer system resources, especially data storage (cloud storage) and computing power, without direct active management by the user.</p>
               </div>
               <div>
                 <p  className="my-4"><strong>•	On-demand self-service.  </strong>- Experience the ability to unilaterally provision computing capabilities, such as server time and network storage, as needed automatically.</p>
               </div>
               <div>
                 <p  className="my-4"><strong>•	Broad network access. </strong>- Capabilities are available over the network and accessed through standard mechanisms that promote use by heterogeneous thin or thick client platforms.</p>
               </div>
               <div>
                 <p  className="my-4"><strong>•	Rapid elasticity </strong>- Capabilities can be elastically provisioned and released, in some cases automatically, to scale rapidly outward and inward commensurate with demand.  </p>
               </div>
               <div>
                 <p  className="my-4"><strong>•	Rapid elasticity </strong>- Cloud systems automatically control and optimize resource use by leveraging a metering capability at some level of abstraction appropriate to the type of service (e.g., storage, processing, bandwidth, and active user accounts). Resource usage can be monitored, controlled, and reported, providing transparency.  </p>
               </div>
             </div>  
             <div  className="w-8/12 md:w-10/12 md:max-w-2xl"> {/* topic-image */}
               <img className="rounded-3xl" src={cloud} alt="cloud image" />
             </div>
           </div>
           <div  className="topic-setup xl:w-full"> {/* topic-setup */}
             <h2>The Benefits of Cloud Computing</h2>
             <div>
               <p  className="my-4"><strong>Cost Reductions  </strong>- A public-cloud delivery model converts capital expenditures (e.g., buying servers) to operational expenditure. This lowers barriers to entry, as infrastructure need not be purchased for one-time or infrequent intensive computing tasks. Pricing on a utility computing basis is "fine-grained", with usage-based billing options. </p>
             </div>
             <div>
               <p  className="my-4"><strong>Maintenance  </strong>- Maintenance of cloud environment is easier because the data is hosted on an outside server maintained by a provider without the need to invest in data center hardware. IT maintenance of cloud computing is managed and updated by the cloud provider's IT maintenance team which reduces cloud computing costs compared with on-premises data centers. (Server, middleware and OS upgrades are managed by the cloud provider.) </p>
             </div>
             <div>
               <p  className="my-4"><strong>Performance  </strong>- Performance is monitored by the cloud provider, and consistent and loosely coupled architectures are constructed using web services as the system interface.  Additional performance monitoring and management can be integrated to include application performance. </p>
             </div>
             <div>
               <p  className="my-4"><strong>Availability  </strong>- Availability improves with the use of multiple redundant sites, which makes well-designed cloud computing suitable for business continuity and disaster recovery.  </p>
             </div>
             <div>
               <p  className="my-4"><strong>Scalability and elasticity  </strong>- Scalability and elasticity via dynamic ("on-demand") provisioning of resources on a fine-grained, self-service basis in near real-time, without users having to engineer for peak loads. This gives the ability to scale up when the usage need increases or down if resources are not being used. The time-efficient benefit of cloud scalability also means faster time to market, more business flexibility, and adaptability.  </p>
             </div>
             <div>
               <p  className="my-4"><strong>Security  </strong>- Security can improve due to centralization of data, increased security-focused resources.  </p>
             </div>
           </div>
           <h2 className="mx-16 px-4">Cloud Capabilities and Services</h2>
           <p className="mx-16 px-4">Manage your IT application deployment with Metaurus Solutions' Cloud Services</p>
           <div className="mx-24 px-4">
             <div className="grid grid-cols-4 gap-2">
               <div className="tile-container-cloud">
                <h3 className="text-center">Cloud servers and virtual machines</h3>
                <p className="text-center m-2">Full virtualization or OS-level virtualization as needed the application and use of the server or VM.</p>
               </div>
               <div className="tile-container-cloud">
                <h3 className="text-center">Cloud Container Orchestration Services</h3>
                <p className="text-center m-2">Container orchestration automates the deployment, management, scaling, and networking of containers.</p>
               </div>
               <div className="tile-container-cloud">
                <h3 className="text-center">Cloud Object Storage</h3>
                <p className="text-center m-2"> Computer data storage architecture designed to handle large amounts of unstructured data.</p>
               </div>
               <div className="tile-container-cloud">
                <h3 className="text-center">Cloud File Storage</h3>
                <p className="text-center m-2">Serverless, enterprise-grade cloud file storage so that you can share file data without provisioning or managing storage capacity and performance.</p>
               </div>
               <div className="tile-container-cloud">
                <h3 className="text-center">Virtual Private Cloud Network</h3>
                <p className="text-center m-2">Provides networking functionality to servers and virtual machine (VM) instances, serverless cloud services.</p>
               </div>
               <div className="tile-container-cloud">
                <h3 className="text-center">Firewall</h3>
                <p className="text-center m-2">Network security system that prevents unauthorized access to the network.</p>
               </div>
               <div className="tile-container-cloud">
                <h3 className="text-center">Cloud DNS</h3>
                <p className="text-center m-2">DNS is a hierarchical distributed database that stores IP addresses and other data to allow look-up and retrieval by name.</p>
               </div>
               <div className="tile-container-cloud">
                <h3 className="text-center">Load Balancing</h3>
                <p className="text-center m-2">Load balancing directs and controls internet traffic between the application servers and their visitors or clients. As a result, it improves an application's availability, scalability, security, and performance.</p>
               </div>
               <div className="tile-container-cloud">
                <h3 className="text-center">Cloud Relational Database</h3>
                <p className="text-center m-2">Cloud relational database services.  These services abstract the database so that management of the database infrastructure and elements is transparent to the end client.</p>
               </div>
               <div className="tile-container-cloud">
                <h3 className="text-center">Cloud NoSQL Database</h3>
                <p className="text-center m-2">Cloud services providers have NoSQL (non-relational) database services. NoSQL databases retrieve data using a key value which can have faster retrieval times and more flexibility than relational database systems.</p>
               </div>
               <div className="tile-container-cloud">
                <h3 className="text-center">Big Data Services</h3>
                <p className="text-center m-2">Runn big data frameworks, such as Apache Hadoop and Apache Spark.</p>
               </div>
               <div className="tile-container-cloud">
                <h3 className="text-center">Data Streaming Analytics</h3>
                <p className="text-center m-2">Processes and analyzes streaming data at any scale as a fully managed service.</p>
               </div>
               <div className="tile-container-cloud">
                <h3 className="text-center">Machine Learning & AI Tools</h3>
                <p className="text-center m-2">Build, train and deploy ML models at scale. Employ comprehensive machine learning platform that supports language model fine-tuning and deployment.</p>
               </div>
               <div className="tile-container-cloud">
                <h3 className="text-center">Monitoring Services</h3>
                <p className="text-center m-2">Services that monitors applications, respond to performance changes, optimizes resource use, and provides insights into operational health.</p>
               </div>
               <div className="tile-container-cloud">
                <h3 className="text-center">Identity and Access Management</h3>
                <p className="text-center m-2">Make sure that only the right people and applications can access an organization's data and resources.</p>
               </div>
               <div className="tile-container-cloud">
                <h3 className="text-center">Key Management Services</h3>
                <p className="text-center m-2">Create, manage, and control cryptographic keys across your applications and services.</p>
               </div>
             </div>
           </div>
           <div  className="topic-grabber"> {/* topic-grabber */}
             <div  className="w-[90%] m-auto"> {/* page-rule */}
               <div className="mx-2 my-20 bg-black"></div>
             </div>
             <h2  className="flex mx-16 my-4">Improve your IT reliability and performance with cloud deployment and best practices.</h2>
             <p  className="mt-8 mx-16 text-xs my-4 md:text-xl">Metaurus Solutions will help you to improve IT performance and reliability with cloud services.</p>
           </div>
           {/* topic-quote future section */}
           <div> {/* topic-question */}
             <h2  className="text-red-600 mt-8 mx-16 my-4">How can cloud deployment help your business achieve its objectives?</h2>
           </div>  
           <div  className="mts-partner-today bg-gradient-to-t from-blue-300 to-white m-4 py-[1em] rounded-md">
             <h1  className="text-[#182335] mt-8 mx-16 my-4">Start partnering with Metaurus Solutions today.</h1>
             <h2  className="text-[#182335] mt-8 mx-16 my-4">Find out how Metaurus Solutions can help you to achieve your objectives with a cloud deployment for your IT.</h2>
             <h2 className="text-[darkred] mt-8 mx-16 my-4 underline"><Link to="/email">Contact Us</Link></h2>
           </div>  
         </div>
       </div>
    );
  }
  
export default Cloud;