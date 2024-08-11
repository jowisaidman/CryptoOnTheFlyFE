import QrScanner from 'qr-scanner';

const constraints = {
  audio: false,
  video: {
    width: 1280, height: 720
  }
};

declare global {
    interface Window {
        stream :any;
    }
}

function capture(video: any, canvas: HTMLCanvasElement) {
   let context: any = canvas.getContext('2d');
   context.canvas.width  = video.offsetWidth;
   context.canvas.height = video.offsetHeight;
   context.drawImage(video, 0, 0, video.offsetWidth, video.offsetHeight);
}

export function stopStream() {
    window.stream.getTracks().forEach(function(track: any) {
        track.stop();
    });
}

export function initReadQr(video: any, canvas: HTMLCanvasElement, onSuccess: (res: string) => void) {
    navigator
        .mediaDevices
        .getUserMedia(constraints)
        .then((stream) => {
            window.stream = stream;
            video.srcObject = stream;
        })
        .catch((e) => {
            console.log(`navigator.getUserMedia error:${e.toString()}`);
        });

        var intervalId = setInterval(() => {
            capture(video, canvas);
            QrScanner.scanImage(canvas)
                .then((result: string) => {
                    clearInterval(intervalId);
                    stopStream();
                    onSuccess(result);
                })
                .catch(error => console.log(error || 'No QR code found.'));
        }, 500);
}

