import React, { useEffect, useState } from 'react';
import { LabelledButton } from '../components/LabelledButton';
import { Tabs, Tab } from '../components/Tabs';
import { getBalance } from '../utils/transactions';

export default () => {
    const [account, setAccount] = useState<string>("");
    const [balance, setBalance] = useState<string>();

    useEffect(() => {
      chrome.storage.sync.get(["account"], (result) => {
          if (!result.account) {
            chrome.storage.sync.set({ source: "sync" });
          } else {
            setAccount(result.account);
          }
      })
    }, []);

    useEffect(() => {
        if (account != "") {
            getBalance(account).then(setBalance);
        }
    }, [account])

    return (
        <div className="flex flex-col grow items-center">
            <div className="text-primary font-bold text-2xl">Account</div>
            <div className="text-secondary">{account}</div>
            <div className="font-bold text-3xl mt-3 mb-3">
                {balance} Eth
            </div>

            <div className={`flex items-center space-x-3`}>
                <LabelledButton
                    variant="primary"
                    centered
                    size="lg"
                    className="px-5"
                    label="Send"
                    onClick={() => { chrome.storage.sync.set({ source: "send" });}}

                >
                    ↗
                </LabelledButton>
                <LabelledButton
                    variant="primary"
                    centered
                    size="lg"
                    className="px-5"
                    label="Receive"
                    onClick={() => { chrome.storage.sync.set({ source: "show_address" });}}
                >
                    ↙
                </LabelledButton>
                <LabelledButton
                    variant="primary"
                    centered
                    size="lg"
                    className="px-5"
                    label="Resync"
                    onClick={() => { chrome.storage.sync.set({ source: "sync" });}}
                >
                    ⟲
                </LabelledButton>
            </div>
            <Tabs>
                <Tab label="Tokens">
                    <div>
                      Token list
                    </div>
                </Tab>
                <Tab label="History">
                <div>
                    Transaction history
                </div>
                </Tab>
            </Tabs>
        </div>
    )
}
