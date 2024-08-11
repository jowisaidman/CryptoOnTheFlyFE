import React, { useEffect, useState } from 'react';
import { Button } from '../components/Button';
import { Tabs, Tab } from '../components/Tabs';
import QRCode from "qrcode";

export default () => {
    const [account, setAccount] = useState<string>();

    async function back() {
        await chrome.storage.sync.set({ source: "none" });
    }

    useEffect(() => {
        chrome.storage.sync.get(["account"], (result) => {
            setAccount(result.account);
        });
    }, [])

    useEffect(() => {
        const canvas = document.getElementById('qr')

        QRCode.toCanvas(canvas, account as string, function (error) {
          if (error) console.error(error)
          console.log('success!');
        })
    }, [account])

    return (
        <div className="flex flex-col items-center gap-5 grow pb-5 h-full justify-between">
            <div className="text-center">
                <div className="text-primary font-bold text-2xl">
                    Sharing address
                </div>
                <div className="text-secondary">Scan the QR code to get your wallet address</div>
           </div>
            <div className="flex flex-col items-center">
                <canvas id="qr" />
                <br/>
                <p>{ account }</p>
           </div>
            <div className="flex items-center space-x-3 items-end mb-1">
               <Button
                 onClick={back}
                 variant="primary"
                 className="px-10"
                 centered
                 size="lg"
                > Done
                </Button>
           </div>
        </div>
    )
}
