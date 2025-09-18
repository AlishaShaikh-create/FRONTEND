import figlet from "figlet";

async function doStuff() {
  const text = await figlet.text("Hello world!!");
  console.log(text);
}

doStuff();