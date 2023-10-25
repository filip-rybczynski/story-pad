import { PageHeader } from "@/components";
import { analyze } from "@/utils/ai/analyze";
import React from "react";

async function AnalysisPage() {
  console.log('waiting for response');
  const response = await analyze(
    "The Forgotten Lab",
    `In the quirky town of Jumbleville, there lived a rather forgetful man named Mr. Jenkins. Mr. Jenkins was famous for his frequent memory lapses, but his most peculiar quirk was his habit of sleepwalking, especially when it came to his prized pajamas.

    One night, during a grand costume party in Jumbleville, Mr. Jenkins decided to dress as a mummy, wearing an outfit that resembled his ancient pajamas. Little did he know that his choice would lead to a comical series of events.
    
    As the party roared on with laughter and lively music, Mr. Jenkins mingled with the guests, all of whom were in awe of his "mummy" costume. Unbeknownst to Mr. Jenkins, his memory lapse kicked in, and he wandered into a bedroom, believing he was heading to bed.
    
    His friends found him a while later, wrapped in bedsheets from head to toe, claiming to be a sleepwalking mummy. They thought it was part of his elaborate costume and couldn't stop laughing.
    
    But the real twist came when they discovered the room he had wandered into was the host's private collection of ancient artifacts, including a genuine mummy case. Mr. Jenkins, in his bedsheets, had somehow managed to get inside the ancient mummy case, which was promptly sealed shut by the bewildered host.
    
    As the partygoers desperately tried to free Mr. Jenkins, he just mumbled sleepily from inside the case, "This is the comfiest sarcophagus ever!" Little did he know that he was the highlight of the party, and his legendary sleepwalking mummy act would be talked about for years in Jumbleville.`
    // `In the distant future, humanity had spread its roots among the stars. Colonies dotted the cosmos, but not all was well. On a remote, desolate planet named Epsilon-12, a chilling story unfolded.

    // In the heart of Epsilon-12, there stood an abandoned research facility, known as the "Forgotten Lab." It had been the site of mysterious experiments that had gone horribly wrong. The lab had been sealed off for decades, but tales of its dark history persisted, passed down through generations.
    
    // One day, a group of curious colonists decided to investigate the long-forgotten lab. Armed with nothing but their handheld scanners, they pushed past the corroded doors and ventured inside. The air was heavy with the stench of decay, and the walls were lined with forgotten data logs and broken equipment.
    
    // As they delved deeper into the lab, they found strange, metallic corridors, eerily silent and empty. The colonists whispered to one another, unsure of what they might find. Their handheld scanners flickered and emitted static as if resisting the exploration.
    
    // In the heart of the lab, they stumbled upon a chamber labeled "Project Chimera." The room was dark, and it took several flashlight beams to reveal a colossal, sealed containment pod. It looked like a dormant monstrosity of metal and wires, resembling some kind of biomechanical creation.
    
    // Suddenly, the containment pod shuddered and groaned, a faint hissing sound escaping from its seams. The colonists froze, their flashlights trembling in their hands. Fear coursed through them as the monstrous thing began to awaken.
    
    // From the depths of the pod, a grotesque figure slowly emerged—a hybrid of human and machine, with hollow, lifeless eyes and wires protruding from its pale flesh. It emitted a ghastly wail that sent shivers down their spines.
    
    // In a panic, the colonists fled from the lab, leaving the monstrosity behind. They sealed the doors, but the wailing specter haunted their dreams. They could hear it echoing through the metal walls, whispering tales of the experiments that had taken place, tales of a nightmarish union of man and machine.`
  );

  console.log('response received')

  console.table(response);

  return (
    <div>
      <PageHeader>Analysis page</PageHeader>
      {/* <p>{response}</p> */}
    </div>
  );
}

export default AnalysisPage;
