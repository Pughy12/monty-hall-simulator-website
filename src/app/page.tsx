"use client"

import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { SimulationResult, simulate } from "~/lib/simulator";

export default function HomePage() {
  const [numSimulations, setNumSimulations] = useState(100_000);
  const [initialChoice, setInitialChoice] = useState(0);
  const [shouldSwitch, setShouldSwitch] = useState(false);
  const [results, setResults] = useState<SimulationResult[]>([]);

  const runSimulation = () => {
    const simResult = simulate(numSimulations, initialChoice, shouldSwitch);

    setResults([...results, simResult]);
  }

  const clearResults = () => {
    setResults([]);
  }

  return (
    <main className="">
      <Label>
        <span className="">Number of simulations</span>
        <Input
          type="number"
          value={numSimulations}
          onChange={(e) => setNumSimulations(Number(e.target.value))}
        />
      </Label>

      <Label>
        <span className="">Door to open</span>
        <Input
          type="number"
          value={initialChoice}
          onChange={(e) => setInitialChoice(Number(e.target.value))}
        />
      </Label>

      <Label>
        <span className="">Switch doors</span>
        <Input
          type="checkbox"
          checked={shouldSwitch}
          onChange={(e) => setShouldSwitch(e.target.checked)}
        />
      </Label>

      <Button onClick={() => runSimulation()}>Simulate</Button>
      <Button variant={"default"} onClick={() => clearResults()}>Clear results</Button>

      <p>Simulation results:</p>
      <ul>
        {results.map((result, index) => (
          <li key={index}>
            <span className="">Percentage of games won: {result.winRatePercentage}%</span>
          </li>
        ))}
      </ul>
    </main>
  );
}
