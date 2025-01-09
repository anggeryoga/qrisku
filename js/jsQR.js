// Tunggu hingga DOM siap
document.addEventListener('DOMContentLoaded', function () {
    // Ambil elemen video dan canvas
    const videoElement = document.getElementById('video');
    const canvasElement = document.getElementById('canvas');
    const canvasContext = canvasElement.getContext('2d');
    
    // Pengaturan stream video
    const videoConstraints = {
        video: {
            facingMode: "environment" // Menggunakan kamera belakang jika ada
        }
    };

    // Mengambil stream dari kamera
    navigator.mediaDevices.getUserMedia(videoConstraints)
        .then(function(stream) {
            // Menampilkan stream ke elemen video
            videoElement.srcObject = stream;
            videoElement.setAttribute('playsinline', true); // untuk IOS
            videoElement.play();
            requestAnimationFrame(scanQRCode); // Mulai proses pemindaian QR Code
        })
        .catch(function(err) {
            console.error('Error accessing webcam: ', err);
        });

    // Fungsi untuk memindai QR Code
    function scanQRCode() {
        if (videoElement.readyState === videoElement.HAVE_ENOUGH_DATA) {
            // Menggambar video ke canvas
            canvasElement.height = videoElement.videoHeight;
            canvasElement.width = videoElement.videoWidth;
            canvasContext.drawImage(videoElement, 0, 0, canvasElement.width, canvasElement.height);

            // Mendapatkan image data dari canvas
            const imageData = canvasContext.getImageData(0, 0, canvasElement.width, canvasElement.height);
            
            // Mencoba mendeteksi QR Code dari image data
            const qrCode = jsQR(imageData.data, imageData.width, imageData.height);

            // Jika QR Code ditemukan
            if (qrCode) {
                console.log('QR Code detected: ', qrCode.data); // Menampilkan data QR Code ke konsol
                alert('QR Code detected: ' + qrCode.data); // Menampilkan alert dengan data QR Code
            }
        }

        // Meminta pemindaian QR Code lagi pada frame berikutnya
        requestAnimationFrame(scanQRCode);
    }
});

