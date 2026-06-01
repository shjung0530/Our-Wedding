/**
 * Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: false,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "정석현",
    nameEn: "Seokhyun Jeong",
    father: "정명재",
    mother: "임동숙",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "오보민",
    nameEn: "Bomin Oh",
    father: "오두환",
    mother: "이정원",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-10-18",
    time: "14:00",
    venue: "아펠가모 광화문",
    hall: "케이트트윈타워 A동 LL층 (지하2층)",
    address: "서울 종로구 종로1길 50, 케이트윈타워 A동 LL층 (지하2층)",
    tel: "02-730-0230",
    mapLinks: {
      kakao: "https://place.map.kakao.com/20000428",
      naver: "https://naver.me/xP8mEGwC"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "어서왕",
    content: "우리\n다같이\n\n놀쟈\n축하 뿅뿅"
  },

  // ── 우리의 이야기 ──
  story: {
    title: "보석커플 이야기",
    content: "다같이 손잡고\n뛰어놀고\n\n윷놀이도 하자"
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "정석현", bank: "국민은행", number: "000-000-000000" },
      { role: "아버지", name: "정명재", bank: "신한은행", number: "000-000-000000" },
      { role: "어머니", name: "임동숙", bank: "우리은행", number: "000-000-000000" }
    ],
    bride: [
      { role: "신부", name: "오보민", bank: "하나은행", number: "000-000-000000" },
      { role: "아버지", name: "오두환", bank: "기업은행", number: "000-000-000000" },
      { role: "어머니", name: "이정원", bank: "농협은행", number: "000-000-000000" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "정석현 ♥ 오보민 결혼합니다",
    description: "2026년 10월 18일, 소중한 분들을 초대합니다."
  }
};
