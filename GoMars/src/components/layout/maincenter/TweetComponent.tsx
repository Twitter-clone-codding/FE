import { close } from "@/assets/svg";
import PostTweet from "@/components/home/PostTweet";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { toggleModal } from "@/store/slice/modalSlice";
import { Button, Icon } from "@/utils";
import { FC, useState } from "react";
import styled from "styled-components";
import MainHeaderProfile from "../mainheader/MainHeaderProfile";

const TweetComponentContainer = styled.div`
  display: flex;
  /* height: 346px; */
  width: 600px;
  border-radius: 16px;
  flex-direction: column;

  .tweet-modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 53px;
    padding: 0 16px;
  }
  .tweet-modal-profile {
    height: 66px;
    padding: 0 16px;
  }
  .tweet-modal-replying {
    height: 40px;
    padding: 0 16px;
  }
  .tweet-modal-retweet {
    height: 183.56px;
  }
`;
interface TweetComponentProps {
  onClick?: (event: Event) => void;
  reply?: boolean;
}
const TweetComponent: FC<TweetComponentProps> = (props) => {
  const { onClick, reply } = props;
  const dispatch = useAppDispatch();
  const modalChecked = useAppSelector((state) => state.modal.modalChecked);
  const onClickIconHandler = () => {
    dispatch(toggleModal({ modalChecked }));
  };
  return (
    <TweetComponentContainer>
      <div className="tweet-modal-header">
        <div onClick={onClickIconHandler}>
          <Icon height={20} width={20} path={close} />
        </div>
        <Button
          backgroundColor="white"
          hoverColor="hoverLightBlue"
          color="blue"
          size="tweet2"
          title={<span>Drafts</span>}
        />
      </div>
      <Avartar>
        <div className="avartar-circle-wrapper">
          <div className="avartar-circle"></div>
        </div>
        <div className="avartar-comment">
          <div className=""></div>
          <div></div>
        </div>
      </Avartar>
      <div className="tweet-modal-replying"></div>
      <div className="tweet-modal-retweet">
        <PostTweet reply={reply} comment="Tweet your reply" type="tweet" />
      </div>
    </TweetComponentContainer>
  );
};

export default TweetComponent;

const Avartar = styled.div`
  display: flex;
  flex-direction: row;

  .avartar-circle-wrapper {
    padding: 0 16px;
  }
  .avartar-circle {
    border-radius: 9999px;
    height: 40px;
    width: 40px;
    background-color: red;
  }
  .avartar-comment {
    background-color: lightgray;
    flex-grow: 1;
  }
`;
