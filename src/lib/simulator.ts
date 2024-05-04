export type SimulationResult = {
  wins: number;
  winRatePercentage: string;
  numSimulations: number;
};

export function simulate(
  numSimulations: number,
  initialChoice: number,
  shouldSwitch: boolean,
): SimulationResult {
  console.log(
    `Simulating ${numSimulations} simulations with initial choice ${initialChoice} and shouldSwitch ${shouldSwitch}`,
  );

  let wins = 0;

  for (let i = 0; i < numSimulations; i++) {
    // The car is behind one of these doors (0, 1, 2)
    const carBehind = Math.floor(Math.random() * 3);
    let playerChoice = initialChoice;

    // The host opens a door that is not the initial choice and does not have the car
    let hostOpens = [0, 1, 2].find(
      (door) => door !== playerChoice && door !== carBehind,
    );

    // Player decides whether to switch their choice
    if (shouldSwitch) {
      playerChoice =
        [0, 1, 2].find((door) => door !== playerChoice && door !== hostOpens) ??
        playerChoice;
    }

    // Check if the player's final choice is where the car is
    if (playerChoice === carBehind) {
      wins++;
    }
  }

  const winRatePercentage = ((wins / numSimulations) * 100).toFixed(2);

  console.log(
    `Win rate: ${winRatePercentage}% (Wins: ${wins} out of ${numSimulations})`,
  );

  return {
    wins,
    winRatePercentage,
    numSimulations,
  };
}
