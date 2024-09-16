import { Link } from 'react-router-dom'
import metbattle from '../assets/metbattle-1.jpg'

function MetBattle() {
    return (
       <div  className="y-wrap">
         <div  className="page">
           <div  className="topic-container"> {/* topic-container */}
             <div>
               <div  className="flex flex-col-reverse items-center text-xs  m-0 mt-8 xl:flex-row xl:justify-around md:text-xl xl:mt-8">
                 <div className= "w-full mt-4 mx-0 my-4 p-[2em] xl:w-6/12 md:text-xl">
                   <h2  className="my-0 lg:my-4  text-amber-300">Battle of the Metaurus</h2>
                   <div>
                     <p  className="my-4">The Battle of the Metaurus was a pivotal battle in the Second Punic War between Rome and Carthage, fought in 207 BC near the Metauro River in present-day Italy. The Carthaginians were led by Hannibal's brother Hasdrubal Barca, who was supposed to bring the siege equipment and reinforcements needed in order for Hannibal to defeat Rome. The Roman armies were led by the consuls Marcus Livius and Gaius Claudius Nero.  The significance of the Battle of the Metaurus is recognized amongst historians. It is included in Edward Creasy's The Fifteen Decisive Battles of the World (1851), the rationale being that it effectively removed the Carthaginian threat from Rome's ascendancy to global dominion. The effects of Claudius Nero and Marcus Livius' victory at the Metaurus have earned it a significant standing amongst historians; not only of the history of Rome, but in that of the entire world.</p>
                   </div>
                 </div>
                 <div  className="w-8/12 md:w-10/12 md:max-w-3xl"> {/* topic-image */}
                     <img className="rounded-3xl" src={metbattle} alt="Battle of the Metaurus drawing" />
                   </div>
               </div>
               <div className="mx-16">
                 <div>
                   <p  className="my-4"><strong>Maneuver before the battle -  </strong>Hasdrubal was followed by Roman legions led by Claudius as he was attempting to meet up with his brother Hannibal in Italy. Hasdrubal sent out messengers outlining the meeting point; these dispatches were intercepted by the Romans, providing them with the means to adopt an offensive approach now that they knew the plans. Claudius had been camped close to Hannibal, in a strategic position. He was stationed further south than his colleague and co-consul M. Livius Salinator, and he set off to march north over 250 miles in 7 days to join Livius and eventually reach Hasdrubal near the Metaurus River. He left most of his army to keep watch, and joined up with Livius at night. After Hasdrubal realized there were two Roman consuls in the same camp, he decided to retire until he could make contact with his brother. </p>
                 </div>
                 <div>
                   <p  className="my-4"><strong>Events of the battle - </strong>Claudius was commanding from the right wing of the Romans; however he was obstructed by a ravine and couldn't get around. Ingeniously Claudius marched his troops behind the Roman lines to the left wing to emerge in a surprise attack behind Hasdrubal's forces. The battle was a disaster for the Carthaginians, with around 15,000 troops dead or captured.</p>
                 </div>
               </div>
             </div> 
           </div>
           <div  className="topic-grabber"> {/* topic-grabber */}
             <div  className="w-[90%] m-auto"> {/* page-rule */}
               <div className="mx-2 my-20 bg-black"></div>
             </div>
             <h2  className="flex mx-16 my-4 text-amber-300">The source of Roman success</h2>
             <p  className="mt-8 mx-16 text-xs my-4 md:text-xl">The battle was historically significant and a great victory for the Roman Empire.  The Romans had lost previous battles against the Carthaginians and were faced with significant challenges prior to the Battle of the Metaurus.  Claudius Nero's leadership was key at several points leading up to, during and following the battle.</p>
             <p  className="mt-8 mx-16 text-xs my-4 md:text-xl">The key elements contributing to the success for the Romans were:</p>
               <ul className="mx-16 text-xs md:text-xl">
                <li><strong>Strategy - </strong>Claudius Nero repositioned his forces to create the conditions for defeating Hasdrubal while simultaneously holding Hannibal's forces in place to prevent the Carthiginian armies from joining into a single force.</li>
                <li><strong>Teamwork - </strong>The three roman consuls joined their forces at the Metaurus River and worked together cohesively to attack and defeat Hasdrubal.</li>
                <li><strong>Coordination - </strong>The three roman consuls coordinated their efforts before and during the battle.  This allowed Claudius Nero's forces to arrive at night undetected until the next morning.</li>
                <li><strong>Execution - </strong>Claudius Nero maintained awareness of the situation throughout the battle.  He planned and executed and adjusted to the situation with skill.</li>
                <li><strong>Effort - </strong>The Roman force commanded by Claudius Nero marched 250 miles in 7 days.  This drive and focus of effort along with maintaining the appearance that this force was still located in the South was equivalant to the Roman Army being in two places at once.</li>
                <li><strong>Tactics - </strong>The tactical maneuver from one flank of the Roman attack to the other flipped the obstacle into an advantage.  The ravine was also a barrier to the Carthaginians and protected the Roman right wing.  Once the Roman rotation was executed the ravine prevented the Carthaginians from also attacking from their left and along with the Metaurus River, prevented them from escaping the Roman attack.</li>
                <li><strong>Resilience - </strong>The Roman army pressed and pushed with maximum effort.  The leaders problem-solved and adjusted to the situation.  The entire army worked and fought together to defeat the Carthaginians.</li>
                <li><strong>Courage - </strong>From the time that Hannibal's army first arrived in Italy the outcome was never certain and at times a Roman victory was even in doubt.  Yet the Roman consuls lead their armies and generated sense of urgency coupled with belief in ultimate success and victory over the Carthaginians.</li>
               </ul>
           </div>
           {/* topic-quote future section */}
           <div> {/* topic-question */}
             <h2  className="text-red-600 mt-8 mx-16 my-4">The team at Metaurus Solutions strives to exemplify the characteristics exhibited by the Romans at the Battle of the Metaurus.</h2>
             <p className="mx-16 text-xs text-amber-200 md:text-xl"><strong>Just as the Romans demonstrated strategic brilliance, unwavering determination, and effective collaboration to secure a pivotal victory, Metaurus Solutions is committed to employing innovative strategies, maintaining steadfast dedication, and fostering a collaborative environment to achieve success in all our endeavors. &nbsp; By embodying these values, we aim to overcome challenges and deliver exceptional results for our clients and partners.</strong></p>
           </div>  
           <div  className="mts-partner-today bg-gradient-to-t from-blue-300 to-white m-4 py-[1em] rounded-md">
             <h1  className="text-[#182335] mt-8 mx-16 my-4">Start partnering with Metaurus Solutions today.</h1>
             <h2  className="text-[#182335] mt-8 mx-16 my-4">Find out how Metaurus Solutions can help you to achieve your objectives with project planning and execution.</h2>
             <h2 className="text-[darkred] mt-8 mx-16 my-4 underline"><Link to="/email">Contact Us</Link></h2>
           </div>  
         </div>
       </div>
    );
  }
  
export default MetBattle;