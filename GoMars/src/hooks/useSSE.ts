import { useEffect, useState } from "react";

function useSSE(url, eventTypes) {
  const [serverData, setServerData] = useState(null);

  useEffect(() => {
    const eventSource = new EventSource(url, {
      withCredentials: true,
    });

    eventSource.onopen = (event) => console.log("SSE 연결 완료");
    eventSource.onerror = (error) => {
      console.error("SSE 연결 실패 에러", error);
      if (eventSource.readyState !== EventSource.CONNECTING) {
        eventSource.close();
      }
    };
    eventSource.onmessage = (event) => {
      console.log("서버에서 메세지", event.data);
      setServerData(event.data);
    };

    eventTypes.forEach((type) => {
      eventSource.addEventListener(type, (event) => {
        setServerData(event.data);
        console.log(`${type} from server`, event.data);
      });
    });

    return () => {
      eventSource.close();
      console.log("서버 닫힘");
    };
  }, [url, eventTypes]);

  return serverData;
}

export default useSSE;
