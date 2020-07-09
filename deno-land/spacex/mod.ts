async function downloadLaucnhData() {
  const reposne = await fetch("https://api.spacexdata.com/v3/launches", {});

  const launcData = await reposne.json();
  console.log(launcData);
}

await downloadLaucnhData();
