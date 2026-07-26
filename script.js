// Sample data (same as data.json)
const sampleData = [
    {
        sampleId: 101,
        patientName: "Ravi Kumar",
        "gender":"Male",
        testName: "Blood Test",
        collectionDate: "2026-07-20",
        status: "Pending",
        pendingDays: 5
    },
    {
        sampleId: 102,
        patientName: "Priya",
        "gender":"Female",
        testName: "Urine Test",
        collectionDate: "2026-07-18",
        status: "Completed",
        pendingDays: 0
    },
    {
        sampleId: 103,
        patientName: "Arun",
        "gender":"Male",
        testName: "Thyroid Test",
        collectionDate: "2026-07-21",
        status: "Processing",
        pendingDays: 2
    },
    {
        sampleId: 104,
        patientName: "Meena",
        "gender":"Female",
        testName: "CBC Test",
        collectionDate: "2026-07-19",
        status: "Pending",
        pendingDays: 4
    },
    {
        sampleId: 105,
        patientName: "Karthik",
        "gender":"Male",
        testName: "Sugar Test",
        collectionDate: "2026-07-22",
        status: "Completed",
        pendingDays: 0
    }
];

// Display Table
function displayTable(data) {

    const tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";

    data.forEach(sample => {

        tableBody.innerHTML += `
        <tr>

            <td>${sample.sampleId}</td>

            <td>
                <img src="images/${sample.gender === "Male" ? "male.png" : "female.png"}"
                    alt="${sample.gender}"
                    width="40"
                    height="40"
                    style="border-radius:50%;vertical-align:middle;margin-right:8px;">

                ${sample.patientName}
            </td>

            <td>
                <img src="images/sample.png" width="35" height="35">
            </td>

            <td>
                <img src="images/report.png" width="35" height="35">
            </td>

            <td>${sample.testName}</td>
            <td>${sample.collectionDate}</td>
            <td>${sample.status}</td>
            <td>${sample.pendingDays}</td>

            <td>
                <button onclick="viewDetails(${sample.sampleId})">
                🔍 View
                </button>
            </td>

        </tr>
        `;
    });

    document.getElementById("count").innerHTML =
        "Showing " + data.length + " Records";
}

// Search
function searchTable() {

    const search = document
        .getElementById("search")
        .value
        .toLowerCase();

    const filtered = sampleData.filter(sample =>
        sample.patientName.toLowerCase().includes(search)
    );

    displayTable(filtered);

}

// Filter
function filterTable() {

    const status = document.getElementById("statusFilter").value;

    if (status === "All") {

        displayTable(sampleData);

    } else {

        const filtered = sampleData.filter(sample =>
            sample.status === status
        );

        displayTable(filtered);
    }

}

// View Details
function viewDetails(id) {

    localStorage.setItem("sampleId", id);

    window.location.href = "details.html";

}

// Load table
displayTable(sampleData);