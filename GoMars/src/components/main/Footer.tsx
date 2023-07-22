import { FooterContainer } from "@/styles/main/mainstyles";

export const Footer = () => {
  const Link = [
    "소개",
    "고객센터",
    "이용약관",
    "개인정보 처리방침",
    "쿠키 정책",
    "접근성",
    "광고 정보",
    "블로그",
    "상태",
    "채용",
    "브랜드 리소스",
    "광고",
    "마케팅",
    "비즈니스용 트위터",
    "개발자",
    "디렉터리",
    "설정",
    "© 2023 X Corp.",
  ];
  return (
    <FooterContainer>
      <nav>
        {Link.map((e) => (
          <a href="#" key={e}>
            <span>{e}</span>
          </a>
        ))}
      </nav>
    </FooterContainer>
  );
};
