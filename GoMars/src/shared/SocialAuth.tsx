import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { UserState, userSet } from "@/store/slice/userSlice";
import { useSearchParams } from "react-router-dom";

const SocialAuth = () => {
  const [searchParams] = useSearchParams();
  const state = searchParams.get("state");
  const code = searchParams.get("code");
  const token = searchParams.get("access_token");
  const dispatch = useAppDispatch();
  const hasToken = useAppSelector((state) => Boolean(state.user.token));

  // const dataset = (res: any): UserState => {
  //   const { data, Accesstoken, token } = res.data;
  //   const { name, email, kakao_account, picture, given_name, profile_image, nickname } = data;
  //   switch (state) {
  //     case "naver":
  //       return {
  //         id: nickname,
  //         nickname: email || "",
  //         token: token,
  //         tokens: { naver: Accesstoken },
  //         picture: profile_image,
  //       };
  //     case "kakao":
  //       return {
  //         id: kakao_account.profile.nickname,
  //         nickname: kakao_account.email || "",
  //         token: token,
  //         picture: kakao_account.profile.profile_image_url,
  //         tokens: { kakao: Accesstoken },
  //       };
  //     case "google":
  //       return {
  //         id: given_name,
  //         nickname: email || "",
  //         token: token,
  //         picture: picture,
  //         tokens: { google: Accesstoken },
  //       };

  //     default:
  //       return {
  //         id: name || "",
  //         nickname: email || "",
  //         token: token || null,
  //       };
  //   }
  // };

  // useEffect(() => {
  //   const socialfecth = async () => {
  //     const codes = code ? code : token;
  //     await oauthLogin({ code: codes })
  //       .then((res) => {
  //         // dispatch(userSet(dataset(res)));
  //         localStorage.setItem("accessToken", res.msg);
  //         console.log(res);
  //       })
  //       .catch((err) => console.log("에러발생", err));
  //   };
  //   socialfecth();
  // }, []);

  return <div>로딩중</div>;
};

export default SocialAuth;
