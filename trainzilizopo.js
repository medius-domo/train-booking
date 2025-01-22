const trainData = [
    { id: 1, train: "L172 - DELUXE", route: "DAR ES SALAAM - ARUSHA", departure: "31/01/2025 02:30 PM, JUMAA", arrival: "01/02/2025 12:10 PM, JUMAMOSI" },
    { id: 2, train: "YD161 - DELUXE", route: "TABORA - DAR ES SALAAM", departure: "30/01/2025 05:50 PM, ALHAMISI", arrival: "31/01/2025 01:36 PM, JUMAA" },
    // Add more data here
];

const tbody = document.querySelector("table tbody");

trainData.forEach((train) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${train.id}</td>
        <td>${train.train}</td>
        <td>${train.route}</td>
        <td>${train.departure}</td>
        <td>${train.arrival}</td>
    `;
    tbody.appendChild(row);
});
