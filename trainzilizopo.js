$(document).ready(function () {
const trainData = [
    { id: 1, train: "L172 - DELUXE", route: "DAR ES SALAAM - ARUSHA", departure: "31/01/2025 02:30 PM, JUMAA", arrival: "01/02/2025 12:10 PM, JUMAMOSI" },
    { id: 2, train: "YD161 - DELUXE", route: "TABORA - DAR ES SALAAM", departure: "30/01/2025 05:50 PM, ALHAMISI", arrival: "31/01/2025 01:36 PM, JUMAA" },
    // Add more data here
];

const tbody = document.querySelector("table tbody");
    $.ajax({
        url: "http://127.0.0.1/backendtest/fetch_trains.php", // PHP script to fetch data
        type: "GET",
        dataType: "json",
        success: function (response) {
            let rows = "";
            response.forEach(function (train) {
                rows += `<tr>
                    <td>${train.train_id}</td>
                    <td>${train.train_name}</td>
                    <td>${train.train_route}</td>
                    <td>${train.departure_time}</td>
                    <td>${train.arrival_time}</td>
                </tr>`;
            });
            $("#trains").html(rows);
        },
        error: function (xhr, status, error) {
            console.error("Error fetching train data:", error);
        }
    });
trainData.forEach((train) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${train.id}</td>
        <td>${train.train}</td>
        <td>${train.route}</td>
        <td>${train.departure}</td>
        <td>${train.arrival}</td>
    `;
    //tbody.appendChild(row);
});
})
