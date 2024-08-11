import React, { useEffect, useState } from 'react';
import { Button } from '../components/Button';
import { Tabs, Tab } from '../components/Tabs';
import { stopStream, initReadQr } from '../utils/camera';


export default () => {
    const [account, setAccount] = useState<string>();
    const [scanning, setScanning] = useState<boolean>(true);

    function onScanAddress(account: string) {
        setAccount(account);
        setScanning(false)
    }

    function confirmAccount() {
        chrome.storage.sync.set({ source: "none", account })
    }

    function retry() {
        setScanning(true)
    }

    useEffect(() => {
        if (scanning) {
            const video: any = document.getElementById('video');
            const canvas: HTMLCanvasElement = document.getElementById('canvas') as HTMLCanvasElement;
            initReadQr(video, canvas, onScanAddress);
        }
        return stopStream;
    }, [scanning]);

    useEffect(() => {
        return stopStream;
    }, []);

    return (
        <div className="flex flex-col items-center gap-5 grow pb-5 h-full justify-between">
           <div className="text-center my-2">
           <div className="text-primary font-bold text-2xl">
                Sync with the offline wallet
           </div>
           <div className="text-secondary">Scan the QR code showed in the offline to sync up your address</div>
           </div>

           {
               scanning
                ? (
                    <>
                        <canvas id="canvas" className="hidden"></canvas>
                        <video id="video" className="max-h-64" playsInline autoPlay></video>
                    </>
                ): (
                    <>
                        <div className="text-center">
                            <div className="text-primary font-bold text-2xl">
                                Scanned address
                            </div>
                            <p> { account } </p>
                        </div>
                        <div className="flex items-center space-x-3 items-end mt-auto mb-6">
                           <Button
                             onClick={retry}
                             variant="secondary"
                             className="px-10"
                             centered
                             size="lg"
                            > Retry
                           </Button>
                           <Button
                             onClick={confirmAccount}
                             variant="primary"
                             centered
                             className="px-10"
                             size="lg"
                           > Confirm
                           </Button>
                       </div>
                    </>
                  )
            }
           <div></div>
        </div>
    )
}
