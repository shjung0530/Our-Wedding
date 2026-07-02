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
    title: "소중한 분들을 초대합니다.",
    content: "있는 그대로 사랑하고 서로의 존재에 감사하며\n곁에 있을때 가장 나다운 모습이 되게 하는 사람과\n모든 계절을 함께 하고자 합니다.\n\n그 시작의 자리에\n늘 곁에서 아껴주셨던 소중한 분들을 모십니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "따스한 가을날, 서로의 손을 꼭 잡고\n평생의 길을 함께 걸어가려 합니다.\n\n귀한 걸음 하시어 함께해 주신다면\n더없는 기쁨으로 간직하겠습니다."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "정석현", bank: "국민은행", number: "647701-04-198556" },
      { role: "아버지", name: "정명재", bank: "농협은행", number: "302-1775-6449-11" },
      { role: "어머니", name: "임동숙", bank: "우리은행", number: "670-349296-02-004" }
    ],
    bride: [
      { role: "신부", name: "오보민", bank: "국민은행", number: "517102-01-336176" },
      { role: "아버지", name: "오두환", bank: "기업은행", number: "367-003348-03-012" },
      { role: "어머니", name: "이정원", bank: "국민은행", number: "517101-01-115741" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "정석현 ♥ 오보민 결혼합니다",
    description: "2026년 10월 18일, 소중한 분들을 초대합니다."
  }
};
