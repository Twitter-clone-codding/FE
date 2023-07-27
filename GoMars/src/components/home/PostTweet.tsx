import { postTweet } from "@/api/post";
import { server } from "@/api/server";
import { normal } from "@/assets/img";
import { down, earth, location, picture, postArray } from "@/assets/svg";
import useImageSelect from "@/hooks/useImageSelect";
import useInput from "@/hooks/useInput";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { addTweet } from "@/store/slice/myTweetSlice";
import { PostContainer, ButtonTitle } from "@/styles/home/homeStyle";
import { MainImgBox } from "@/styles/maincenter/maincenter";
import { Icon, Button } from "@/utils";
import { ChangeEvent, ChangeEventHandler, useCallback, useRef, useState } from "react";
import { css } from "styled-components";

interface PostTweetProps {
  comment: string;
  type: "tweet" | "retweet";
  reply?: boolean;
}

const PostTweet: React.FC<PostTweetProps> = ({ comment, type, reply }) => {
  const user = useAppSelector((state) => state.user);
  const [textFocus, settextFocus] = useState<boolean>(false);
  const [value, onChange, setForm] = useInput({ content: "" });
  const { inputRef, onUploadImage, onUploadImageButtonClick, previewImage, setPreviewImage } =
    useImageSelect();
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const dispatch = useAppDispatch();

  /// 트윗 포스트후 초기화 ///
  const tweetResponseHandler = useCallback(
    (res: TweetPostResponse) => {
      console.log(res);
      setForm({ content: "" });
      setPreviewImage(null);
      dispatch(addTweet(res.result));
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    },
    [dispatch, setForm, setPreviewImage, inputRef]
  );
  /// 트윗 포스트///
  const onUploadToServerButtonClick = useCallback(async () => {
    const formData = new FormData();
    formData.append(
      "TweetsPostRequest",
      new Blob(
        [
          JSON.stringify({
            mainTweetId: null,
            tweet: {
              hashtag: "#1시#133",
              content: value["content"],
            },
          }),
        ],
        { type: "application/json" }
      )
    );
    formData.append("img", inputRef.current.files[0]);

    const post = await postTweet(formData)
      .then(tweetResponseHandler)
      .catch((err) => console.log(err))
      .finally();
  }, [value, dispatch, tweetResponseHandler]);

  const handleOnChange = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      onChange(event);
      const target = event.target;
      target.style.height = "inherit";
      target.style.height = `${target.scrollHeight}px`;
    },
    [onChange]
  );
  return (
    <PostContainer img={user.picture ? user.picture : normal}>
      <div className="avatar-container">
        <div className="avatar-wrraper">
          <div className="avatar-box"></div>
          <img src={normal} alt="" />
        </div>
      </div>
      <div className="content-container">
        {!reply && (textFocus || value["content"]) && (
          <div className="selcet-container">
            <span>Everyone</span>
            <Icon height={16} path={down} width={16} color="rgb(29, 155, 240)" />
          </div>
        )}
        <div className="content-wrraper">
          <textarea
            ref={textareaRef}
            className="content"
            rows={1}
            value={value["content"]}
            onChange={handleOnChange}
            placeholder={comment}
            onFocus={() => settextFocus(true)}
            onBlur={() => settextFocus(false)}
          />
        </div>
        <input type="file" ref={inputRef} onChange={onUploadImage} style={{ display: "none" }} />
        {previewImage && (
          <MainImgBox image={previewImage}>
            <div className="image-box"></div>
            <img src={previewImage} alt="" />
          </MainImgBox>
        )}
        {!reply && (textFocus || value["content"]) && (
          <div className="down-container">
            <div className="everyone-container">
              <Icon height={16} path={earth} width={16} color={"rgb(29, 155, 240)"} />
              <span>Everyone can reply</span>
            </div>
          </div>
        )}

        <div className="button-container">
          <div className="button-box">
            {postArray.map((path, i) => {
              return (
                <div
                  className={path === location ? "footer-item-disable" : "footer-item"}
                  key={path}
                  onClick={path === picture ? onUploadImageButtonClick : () => {}}
                >
                  <div className="footer-item-icon">
                    <Icon
                      path={path}
                      color={path === location ? "rgb(29, 155, 240 , 0.5)" : "rgb(29, 155, 240)"}
                      height={20}
                      width={20}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="tweet-btn-container">
            <Button
              backgroundColor="blue"
              color="white"
              size="tweet2"
              onClick={onUploadToServerButtonClick}
              title={<ButtonTitle>Tweet</ButtonTitle>}
            />
          </div>
        </div>
      </div>
    </PostContainer>
  );
};
export default PostTweet;
