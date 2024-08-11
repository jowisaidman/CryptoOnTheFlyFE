import React, { useEffect, useState } from 'react';
import { Button } from '../components/Button';
import { Tabs, Tab } from '../components/Tabs';
import { getTransaction, getNextNonce } from '../utils/transactions'
import QRCode from "qrcode";

export default () => {
    const [data, setData] = useState<any>();
    const [account, setAccount] = useState<string>();

    useEffect(() => {
        chrome.storage.sync.get(["account"], (result) => {
        setAccount(result.account);
    })}, []);

    useEffect(() => {
        if (account != null) {
            chrome.storage.sync.get(["signData"], (result) => {
                setData(result.signData);
            });
        }
    }, [account])

    useEffect(() => {
        if (data) {
            buildQrToSing().catch((e) => console.log(`there was an error building qr to sing ${e}`));
        }
    }, [data])

    async function back() {
        await chrome.storage.sync.set({ source: "send" });
    }

    async function send() {
        await chrome.storage.sync.set({ source: "scan" });
    }

    async function buildQrToSing() {
        const canvas = document.getElementById('qr');
        const nonce = await getNextNonce(account as string);
        const tx = getTransaction(data.addressTo, data.valueToSend, nonce);

        QRCode.toCanvas(canvas, tx, function (error) {
          if (error) console.error(error)
          console.log('success!');
        })

    }

    return (
        <div className="flex flex-col items-center gap-5 grow pb-5 h-full justify-between">
           <div className="text-center my-2">
               <div className="text-primary font-bold text-2xl">
                    Sign transaction
               </div>
               <div className="text-secondary">Scan the following QR code with the offline signer to sign the transaction and send it to Chain</div>
           </div>
            <canvas id="qr" />
            <div className="flex items-center space-x-3 items-end mb-1">
               <Button
                 onClick={back}
                 variant="secondary"
                 className="px-10"
                 centered
                 size="lg"
                > Back
                </Button>
               <Button
                 onClick={send}
                 variant="primary"
                 centered
                 className="px-10"
                 size="lg"
               > Send
               </Button>
           </div>
        </div>
    )
}
