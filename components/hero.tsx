import { Button } from "@/components/ui/button";
import { IconMail } from '@tabler/icons-react';
import { Ripple } from "./ui/ripple";

export default function Hero() {
  return (
    <div>
      <Ripple mainCircleOpacity={0.2} className="-z-10" />
      <h1 className="text-7xl font-extrabold mb-6">DevOps learner, <span className="text-primary">building</span> and <span className="text-primary">maintaning</span> systems</h1>
      <p className="text-lg mb-8 text-muted-foreground">From CI/CD pipelines to containerized production environments and monitoring</p>
      <div className="flex gap-3 justify-center">
        <Button className="shadow-sm hover:scale-105 p-6 flex gap-3">
          <p>Get in touch</p>
          <IconMail />
        </Button>
        <Button variant="outline" className="hover:bg-accent-foreground shadow-sm p-6">Who I am</Button>
      </div>
    </div>
  )
}
