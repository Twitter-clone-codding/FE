import { addNotification } from "@/store/slice/noticeSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
// 필요한 경로로 수정하세요.

function useSSE(url, eventTypes) {
  const dispatch = useDispatch();

  useEffect(() => {
    const eventSource = new EventSource(url, { withCredentials: true });

    eventSource.onopen = (event) => console.log("SSE 연결 완료");
    eventSource.onerror = (error) => {
      console.error("SSE 연결 실패 에러", error);
      if (eventSource.readyState !== EventSource.CONNECTING) {
        eventSource.close();
      }
    };
    eventSource.onmessage = (event) => {
      console.log("서버에서 메세지", event.data);
      dispatch(addNotification()); // 서버에서 메세지를 받으면 알림 추가
    };

    eventTypes.forEach((type) => {
      eventSource.addEventListener(type, (event) => {
        console.log(`${type} from server`, event.data);
        dispatch(addNotification()); // 서버에서 특정 이벤트를 받으면 알림 추가
      });
    });

    return () => {
      eventSource.close();
      console.log("서버 닫힘");
    };
  }, [url, eventTypes, dispatch]);
}

export default useSSE;
