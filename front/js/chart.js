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
        borderWidth: 1,
        cutout: "50%",
        maxHeight: 100,
        maxWidth: 100,
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    },
});
//
