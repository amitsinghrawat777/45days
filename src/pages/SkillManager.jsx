import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
function SkillManager() {
    const [skill, setSkill] = useState('');
  return (
    <div>
      <h1>Skills Manager</h1>
      <p>Add your skills blow and watch the list grow</p>
      <Input value={skill} onChange={(e) => setSkill(e.target.value)} placeholder="e.g React" />
      <Button className="w-full">Sign In</Button>
    </div>
  );
}
export default SkillManager;