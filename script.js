const container = document.createElement("div");
container.className = "container";

document.body.append(container);

for (let i = 0; i < 64; i++) {
  const tile = document.createElement("div");
  tile.className = "tile";

  if ((i + Math.floor(i / 8)) % 2 === 0) {
    tile.style.background = "red";
  } else {
    tile.style.background = "black";
  }

  container.append(tile);
}
