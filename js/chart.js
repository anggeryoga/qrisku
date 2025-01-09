// Menunggu hingga DOM siap
document.addEventListener('DOMContentLoaded', function () {
    // Mendapatkan elemen canvas untuk chart
    const ctx = document.getElementById('myChart').getContext('2d');

    // Data yang akan ditampilkan pada chart
    const chartData = {
        labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei'], // Bulan
        datasets: [{
            label: 'Transaksi QRIS',
            data: [50, 75, 100, 120, 150], // Jumlah transaksi untuk masing-masing bulan
            backgroundColor: 'rgba(139, 0, 0, 0.2)', // Warna latar belakang grafik
            borderColor: 'rgba(139, 0, 0, 1)', // Warna border grafik
            borderWidth: 1,
        }]
    };

    // Konfigurasi untuk Chart.js
    const chartConfig = {
        type: 'bar', // Jenis grafik: bar chart
        data: chartData,
        options: {
            responsive: true, // Responsif terhadap ukuran layar
            scales: {
                y: {
                    beginAtZero: true, // Mulai sumbu Y dari 0
                    ticks: {
                        stepSize: 20, // Langkah antara angka sumbu Y
                    }
                }
            },
            plugins: {
                legend: {
                    display: true, // Menampilkan legenda
                },
                tooltip: {
                    enabled: true, // Menampilkan tooltip saat hover
                }
            }
        }
    };

    // Membuat chart dengan konfigurasi di atas
    new Chart(ctx, chartConfig);
});
