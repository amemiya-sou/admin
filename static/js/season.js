const selectElement = document.getElementById("season");
for (let i = 14; i >= 1; i--) {
    const option = document.createElement("option");
    option.value = `season${i}`;
    option.text = `シーズン${i}`;
    selectElement.add(option);
}