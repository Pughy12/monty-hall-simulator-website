export default function AboutPage() {
  return (
    <main className="flex justify-center">
      <h1 className="flex text-4xl font-bold">The Monty Hall Problem</h1>

      <p>
The Monty Hall Problem is a probability puzzle named after the host of the popular game show "Let's Make a Deal".

The problem is as follows:

You are on a game show, and you are given the choice of three doors.

Behind one door is a car, and behind the other two doors are goats.

You pick a door, say No. 1, and the host, who knows what's behind the doors, opens another door, say No. 3, which has a goat.

He then says to you, "Do you want to pick door No. 2, or stay with your original choice?"

Is it to your advantage to switch your choice?
      </p>

      <h2>Yes... here's why</h2>
      <p>
If you choose <span className="text-green-700">correctly</span>, the door that remains closed will not contain the money, because you chose correctly.

Whereas, if you choose <span className="text-red-700">incorrectly</span>, the door that remains closed WILL contain the money, because the host will never open the door with the money behind it.

And because guessing correctly is a 1 in 3 chance, you choose incorrectly more than you choose correctly on the first guess (that's just how statistics works).

This is why you should always switch. If you choose incorrectly (which you do 66% of the time), the door you can switch to ALWAYS has the money behind it.
      </p>
    </main>
  );
}