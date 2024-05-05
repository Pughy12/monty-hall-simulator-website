export default function AboutPage() {
  return (
    <main className="p-4">
      <h1 className="text-3xl pb-4">The Monty Hall Problem</h1>

      <p className="pb-4">
The Monty Hall Problem is a probability puzzle named after the host of the popular game show "Let's Make a Deal".

The problem is as follows:

You are on a game show, and you are given the choice of three doors.

Behind one door is a car, and behind the other two doors are goats.

You pick a door, say No. 1, and the host, who knows what's behind the doors, opens another door, say No. 3, which has a goat.

He then says to you, "Do you want to pick door No. 2, or stick with your original choice?"

Is it to your advantage to switch your choice?
      </p>

      <h2 className="text-2xl pb-4">Yes... and here's why</h2>
      <p>
Let's say you pick the door with the car behind it. When the host has to open one of the other doors, he has 2 doors to choose from, both of which have goats behind them.

Now let's say you pick a door with a goat behind it. When the host has to open one of the other doors, now there's only one door he can open with a goat behind it. The other one has the car, and he can't reveal that or the game would be over.

So, when you're right (i.e. you picked the door with the money), if you switch you're GUARANTEED TO LOSE.

And when you're wrong (i.e. you picked a door with the goat), if you switch you're GUARANTEED TO WIN.

The reason why you should always switch is because choosing the right door is a 1 in 3 chance, meaning there's MORE chance you're going to choose the wrong door.

And when you do choose the wrong door (and you will, most of the time), switching to the remaining door will always have the money behind it.
      </p>
    </main>
  );
}