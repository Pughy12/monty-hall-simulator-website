export default function AboutPage() {
  return (
    <main className="dark:bg-slate-900 bg-white text-center p-5">
      <h1 className="text-3xl pb-5">The Monty Hall Problem</h1>
      <P>The Monty Hall Problem is a probability puzzle named after the host of the popular game show "Let's Make a Deal". The problem is as follows:</P>
      <P>You are on a game show, and you are given the choice of three doors.</P>
      <P>Behind one door is a car, and behind the other two doors are goats.</P>
      <P>Let's say you pick door No. 1 and the host, who knows what's behind the doors, opens another door, say No. 3, which has a goat.</P>
      <P>He then says to you, "Do you want to pick door No. 2, or stick with your original choice?"</P>
      <P>Are the odds better if you switch to the other door?</P>

      <p className="text-2xl pt-7 pb-5">Yes... and here's why</p>
      <P>Let's say you pick the door with the car behind it. When the host has to open one of the other doors, he has 2 doors to choose from, both of which have goats behind them.</P>
      <P>Now let's say you pick a door with a goat behind it. When the host has to open one of the other doors, now there's only one door he can open with a goat behind it. The other one has the car, and he can't reveal that or the game would be over.</P>
      <P>So, when you're right (i.e. you picked the door with the money), if you switch you're GUARANTEED TO LOSE.</P>
      <P>And when you're wrong (i.e. you picked a door with the goat), if you switch you're GUARANTEED TO WIN.</P>
      <P>The reason why you should always switch is because choosing the right door is a 33% chance, meaning there's MORE chance (66.67% recurring) you're going to choose the wrong door.</P>
      <P>And when you do choose the wrong door (and you will, most of the time), switching to the remaining door will ALWAYS have the money behind it.</P>
    </main>
  );
}

function P(props: React.PropsWithChildren) {
  return <p className="text-slate-900 dark:text-slate-700 pb-4">{props.children}</p>
}