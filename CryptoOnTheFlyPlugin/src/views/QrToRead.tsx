import React, { useEffect, useState } from 'react';
import { Button } from '../components/Button';
import { Tabs, Tab } from '../components/Tabs';
import { sendToChain } from '../utils/transactions'
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

export default () => {
    async function back() {
        await chrome.storage.sync.set({ source: "send" });
    }

    function capture() {
       const video: any = document.getElementById('video');
       const canvas: any = document.getElementById('canvas');
       let context = canvas.getContext('2d');
       context.canvas.width  = video.offsetWidth;
       context.canvas.height = video.offsetHeight;
       context.drawImage(video, 0, 0, video.offsetWidth, video.offsetHeight);
    }

    function stopStream() {
        window.stream.getTracks().forEach(function(track: any) {
            track.stop();
        });
    }

    useEffect(() => {
        const video: any = document.getElementById('video');
        const canvas: HTMLCanvasElement = document.getElementById('canvas') as HTMLCanvasElement;
        const errorMsgElement: any = document.querySelector('span#errorMsg');
        navigator
            .mediaDevices
            .getUserMedia(constraints)
            .then((stream) => {
                window.stream = stream;
                video.srcObject = stream;
            })
            .catch((e) => {
                errorMsgElement.innerHTML = `navigator.getUserMedia error:${e.toString()}`;
            });

            var intervalId = setInterval(() => {
                capture();
                QrScanner.scanImage(canvas)
                    .then(result => {
                        clearInterval(intervalId);
                        stopStream();
                        console.log(`Sending to chain ${result}`);
                        sendToChain(result);
                        chrome.storage.sync.set({ source: "sending" })
                    })
                    .catch(error => console.log(error || 'No QR code found.'));
            }, 500);

        return stopStream;
    }, []);

    return (
        <div className="flex flex-col items-center gap-5 grow pb-5 h-full justify-between">
           <div className="text-center my-2">
           <div className="text-primary font-bold text-2xl">
                Scan the signed transaction
           </div>
           <div className="text-secondary">Scan the QR code showed in the offline wallet to send the transaction to chain</div>
           </div>

           <canvas id="canvas" className="hidden"></canvas>
           <video id="video" className="max-h-64" playsInline autoPlay></video>

            <div className="flex items-center space-x-3 items-end mb-1">
               <Button
                 onClick={back}
                 variant="primary"
                 centered
                 className="px-10"
                 size="lg"
               > Cancel
               </Button>
           </div>
        </div>
    )
}
