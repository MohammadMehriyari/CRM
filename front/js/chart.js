const ctx = document.getElementById("myChart");
new Chart(ctx, {
    type: "pie",
    data: {
        labels: [
            "سایت",
            "نمونه کار",
            "اینستاگرام",
            "کارت معرف",
            "بنر های گزارشی",
        ],
        datasets: [
            {
                label: "# of Votes",
                data: [200, 50, 850, 123, 18],
            },
        ],
    },
    options: {
        plugins: {
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        family: "Iran-Yekan-Bold",
                        size: 20,
                    },
                },
            },
        },
        borderWidth: 1,
        cutout: "50%",
        maxHeight: 100,
        maxWidth: 100,
        maintainAspectRatio: false,
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                grid: {
                    display: false,
                },
                beginAtZero: true,
            },
        },
    },
});
//
