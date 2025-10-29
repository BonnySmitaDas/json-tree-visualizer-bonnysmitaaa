document.getElementById("visualizeBtn").addEventListener("click", () => {
  const input = document.getElementById("jsonInput").value.trim();
  const output = document.getElementById("treeOutput");
  output.innerHTML = "";

  if (!input) {
    output.textContent = "Please paste JSON data above.";
    return;
  }

  try {
    const json = JSON.parse(input);
    const tree = createTree(json);
    output.appendChild(tree);
  } catch (e) {
    output.textContent = "Invalid JSON: " + e.message;
  }
});

function createTree(obj) {
  const ul = document.createElement("ul");
  for (const key in obj) {
    const li = document.createElement("li");
    if (typeof obj[key] === "object" && obj[key] !== null) {
      li.textContent = key + ":";
      li.appendChild(createTree(obj[key]));
    } else {
      li.textContent = `${key}: ${obj[key]}`;
    }
    ul.appendChild(li);
  }
  return ul;
}
