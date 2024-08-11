import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Welcome from "./views/Welcome";
import Send from "./views/Send";
import QrToSign from "./views/QrToSign";
import QrToRead from "./views/QrToRead";
import SendingToChain from "./views/SendingToChain";
import ShowAddress from "./views/ShowAddress";
import Sync from "./views/Sync";


const Popup = () => {
  const [source, setSource] = useState<string>("none");

  // Effect 1: Attach/remove storage onChanged listener
  useEffect(() => {
    const listener = () => {
      chrome.storage.sync.get(["source"], (result) => {
        setSource(result.source);
      })
    };
    chrome.storage.onChanged.addListener(listener);
    return () => {
      chrome.storage.onChanged.removeListener(listener);
    };
  }, []);

  // Effect 2: Sync local state with storage data on mount
  useEffect(() => {
    // 'sync' can be 'local', depends on your usecase
    chrome.storage.sync.get(["source"], (result) => {
      setSource(result.source);
    })
  }, []);

  function checkSource() {
    chrome.storage.sync.get(['source'], (result) => {
        if (result.source) {
          setSource(result.source);
        }
    });
  }


  function getScreen(source: string) {
    switch (source) {
        case "sync": {
            return <Sync />;
        }
        case "show_address": {
            return <ShowAddress />;
        }
        case "show_address": {
            return <ShowAddress />;
        }
        case "sending": {
            return <SendingToChain />;
        }
        case "scan": {
            return <QrToRead />;
        }
        case "sign": {
            return <QrToSign />;
        }
        case "send": {
            return <Send />;
        }
        default: {
            return <Welcome/>;
        }
    }
  }

  useEffect(() => {
      console.log('asdasd');
    chrome.storage.sync.set({ source: "none"});
    checkSource();
  }, []);

  return (
    <div className="bg-default min-w-[390px] min-h-[600px] text-default h-full flex flex-col text-sm">
      <div className="flex py-2.5 bg-layer justify-between pl-3 pr-2">
        <div className="flex">
          <img src="/icon_nb_48.png" alt="CoF logo"/>
          <div className="font-bold text-2xl mt-2 mb-2">
            &nbsp; CoF
          </div>
          <div className="text-center px-3 py-1 m-3 rounded-2xl text-[#66EFF0] bg-[#66EFF0]/[0.1]">
             Alpha
          </div>
        </div>
        <div className="flex">
            <img src="/expand.svg" alt="Expand icon" width="20px" className="cursor-pointer" onClick={() => chrome.tabs.create({url: 'popup.html'})} />
            <img src="/close.svg" alt="Close icon" className="cursor-pointer" onClick={() => window.close()} />
        </div>
        </div>
        {
            getScreen(source)
        }
    </div>
  );
};


const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>
);
