const BASE_URL = import.meta.env.BASE_URL

export const products = [
  { 
    id: 1, 
    series: '주술회전', 
    name: '게토 스구루 고전 버전 룩업 | 주술회전', 
    image: `${BASE_URL}img/img1.jpg`, 
    price: '40,000원', 
    description: '게토 스구루의 차분한 표정과 교복 디테일을 귀여운 데포르메 비율로 담아낸 미니 피규어입니다.' 
  },

  { 
    id: 2, 
    series: '주술회전', 
    name: '2종세트 메가캣 주술냥코 회옥 옥절 거대한 고죠 게토 | 주술회전', 
    image: `${BASE_URL}img/img2.jpg`, 
    price: '96,000원', 
    description: '고죠 사토루와 게토 스구루를 함께 전시할 수 있는 2종 미니 피규어 세트입니다.' 
  },

  { 
    id: 3, 
    series: '주술회전', 
    name: '고죠 사토루 고전 버전 룩업 | 주술회전', 
    image: `${BASE_URL}img/img3.jpg`, 
    price: '40,000원', 
    description: '고죠 사토루의 밝은 표정과 특징적인 헤어스타일을 작고 선명하게 표현한 컬렉션입니다.' 
  },

  { 
    id: 4, 
    series: '주술회전', 
    name: 'DX 피규어 고죠 사토루 허식 자 버전 | 주술회전', 
    image: `${BASE_URL}img/img4.jpg`, 
    price: '366,000원', 
    description: '강렬한 이펙트와 역동적인 포즈로 고죠 사토루의 전투 장면을 재현한 스케일 피규어입니다.' 
  },

  { 
    id: 5, 
    series: '블리치', 
    name: 'GEM 시리즈 그림죠 재거잭 | 블리치', 
    image: `${BASE_URL}img/img5.jpg`, 
    price: '221,000원', 
    description: '그림죠 재거잭 특유의 자신감 넘치는 자세와 의상 디테일을 살린 캐릭터 피규어입니다.' 
  },

  { 
    id: 6, 
    series: '은혼', 
    name: '사카타 긴토키 룩업 | 은혼', 
    image: `${BASE_URL}img/img6.jfif`, 
    price: '42,000원', 
    description: '사카타 긴토키의 여유로운 표정을 앙증맞은 비율로 표현한 데스크용 미니 피규어입니다.' 
  },

  { 
    id: 7, 
    series: '나루토', 
    name: '2종세트 나루토 미소버전 지라이야 룩업 | 나루토 질풍전', 
    image: `${BASE_URL}img/img7.jpg`, 
    price: '104,000원', 
    description: '나루토와 지라이야의 유쾌한 관계를 함께 연출할 수 있는 미니 피규어 세트입니다.' 
  },

  { 
    id: 8, 
    series: '나루토', 
    name: 'GEM 테노히라 미나토 | 나루토 질풍전', 
    image: `${BASE_URL}img/img8.jpg`, 
    price: '80,000원', 
    description: '나미카제 미나토의 상징적인 의상과 편안한 포즈를 섬세하게 담은 캐릭터 피규어입니다.' 
  },

  { 
    id: 9, 
    series: '블리치', 
    name: '쿠치키 뱌쿠야 룩업 | 블리치', 
    image: `${BASE_URL}img/img9.jpg`, 
    price: '46,000원', 
    description: '쿠치키 뱌쿠야의 사신 의상과 단정한 분위기를 귀여운 크기로 담은 미니 피규어입니다.' 
  },

  { 
    id: 10, 
    series: '은혼', 
    name: '시무라 신파치 룩업 | 은혼', 
    image: `${BASE_URL}img/img10.jpg`, 
    price: '44,000원', 
    description: '시무라 신파치의 안경과 푸른 의상을 정갈하게 표현한 미니 캐릭터 피규어입니다.' 
  },

  { 
    id: 11, 
    series: '은혼', 
    name: 'GEM 테노히라 오키타 소고 | 은혼', 
    image: `${BASE_URL}img/img11.jpg`, 
    price: '80,000원', 
    description: '오키타 소고의 강렬한 눈빛과 개성 있는 자세를 입체적으로 재현한 피규어입니다.' 
  },

  { 
    id: 12, 
    series: '은혼', 
    name: '은혼 3학년 Z반 긴파치 선생 쵸코링 마스코트 vol.2', 
    image: `${BASE_URL}img/img12.jpg`, 
    price: '54,000원', 
    description: '은혼의 주요 인물을 한 번에 모아 전시할 수 있는 다채로운 미니 캐릭터 컬렉션입니다.' 
  },

  { 
    id: 13, 
    series: '블리치', 
    name: '프레셔스 GEM 시리즈 쿠로사키 이치고 천년혈전편 | 블리치', 
    image: `${BASE_URL}img/img13.jpg`, 
    price: '442,000원', 
    description: '쿠로사키 이치고의 전투 장면을 역동적인 조형과 묵직한 색감으로 표현한 피규어입니다.' 
  },

  { 
    id: 14, 
    series: '나루토', 
    name: '우치하 이타치 룩업 | 나루토', 
    image: `${BASE_URL}img/img14.jpg`, 
    price: '40,000원', 
    description: '우치하 이타치의 사륜안과 아카츠키 의상을 섬세하게 담은 미니 피규어입니다.' 
  },

  { 
    id: 15, 
    series: '나루토', 
    name: '걸즈 시리즈 츠나데 ver2 | 나루토 질풍전', 
    image: `${BASE_URL}img/img15.jpg`, 
    price: '280,000원', 
    description: '츠나데의 당당한 표정과 포즈를 선명한 색감으로 완성한 스케일 피규어입니다.' 
  },

  { 
    id: 16, 
    series: '은혼', 
    name: 'GEM 시리즈 카구라 | 은혼', 
    image: `${BASE_URL}img/img16.jpg`, 
    price: '211,000원', 
    description: '카구라의 밝고 활기찬 분위기와 차이나 드레스 디테일을 살린 피규어입니다.' 
  },

  { 
    id: 17, 
    series: '은혼', 
    name: 'GEM 시리즈 카무이 ver2 | 은혼', 
    image: `${BASE_URL}img/img17.jpg`, 
    price: '211,000원', 
    description: '카무이의 표정과 전투적인 분위기를 섬세한 조형으로 표현한 캐릭터 피규어입니다.' 
  },

  { 
    id: 18, 
    series: '은혼', 
    name: '카츠라 코타로 룩업 | 은혼', 
    image: `${BASE_URL}img/img18.jpg`, 
    price: '42,000원', 
    description: '카츠라 코타로의 차분한 표정과 푸른 의상을 담은 데스크용 미니 피규어입니다.' 
  },

  { 
    id: 19, 
    series: '블리치', 
    name: '2종세트 신지 토시로 룩업 | 블리치', 
    image: `${BASE_URL}img/img19.jpg`, 
    price: '107,000원', 
    description: '히츠가야 토시로와 히라코 신지를 나란히 전시할 수 있도록 구성한 블리치 룩업 피규어 세트입니다.' 
  },

  { 
    id: 20, 
    series: '은혼', 
    name: '이루스타 은혼', 
    image: `${BASE_URL}img/img20.jfif`, 
    price: '48,000원', 
    description: '긴토키, 카구라, 신파치 해결사 3인방을 한 장면처럼 전시할 수 있는 세트입니다.' 
  },

  { 
    id: 21, 
    series: '블리치', 
    name: '이치마루 긴 룩업 | 블리치', 
    image: `${BASE_URL}img/img21.jpg`, 
    price: '46,000원', 
    description: '이치마루 긴의 은빛 머리와 눈웃음을 귀여운 룩업 스타일로 담아낸 미니 피규어입니다.' 
  },

  { 
    id: 22, 
    series: '블리치', 
    name: '아이젠 소스케 룩업 | 블리치', 
    image: `${BASE_URL}img/img22.jpg`, 
    price: '46,000원', 
    description: '아이젠 소스케의 여유로운 표정과 흰색 의상을 섬세하게 표현한 룩업 피규어입니다.' 
  },

  { 
    id: 23, 
    series: '나루토', 
    name: '휴우가 네지 룩업 | 나루토 질풍전', 
    image: `${BASE_URL}img/img23.jpg`, 
    price: '44,000원', 
    description: '휴우가 네지의 백안과 닌자 복장을 작은 크기에 선명하게 담은 룩업 피규어입니다.' 
  },

  { 
    id: 24, 
    series: '나루토', 
    name: '록 리 룩업 | 나루토 질풍전', 
    image: `${BASE_URL}img/img24.jpg`, 
    price: '44,000원', 
    description: '록 리의 단정한 헤어스타일과 초록색 수련복을 재현한 귀여운 룩업 피규어입니다.' 
  },

  { 
    id: 25, 
    series: '사이키 쿠스오의 재난', 
    name: '사이키 쿠스오 룩업 | 사이키 쿠스오의 재난', 
    image: `${BASE_URL}img/img25.jpg`, 
    price: '55,000원', 
    description: '사이키 쿠스오의 분홍색 머리와 초능력 제어 장치를 포인트로 살린 룩업 피규어입니다.' 
  },

  { 
    id: 26, 
    series: '사이키 쿠스오의 재난', 
    name: '카이도 슌 룩업 | 사이키 쿠스오의 재난', 
    image: `${BASE_URL}img/img26.jpg`, 
    price: '47,000원', 
    description: '카이도 슌의 푸른 머리와 붕대를 감은 손, PK학원 교복을 귀여운 비율로 표현한 룩업 피규어입니다.' 
  },

  { 
    id: 27, 
    series: '사이키 쿠스오의 재난', 
    name: '쿠보야스 아렌 룩업 | 사이키 쿠스오의 재난', 
    image: `${BASE_URL}img/img27.jpg`, 
    price: '47,000원', 
    description: '쿠보야스 아렌의 보랏빛 머리와 안경, PK학원 교복을 섬세하게 담은 룩업 피규어입니다.' 
  },

  { 
    id: 28, 
    series: '나루토', 
    name: '걸즈 시리즈 코난 | 나루토 질풍전', 
    image: `${BASE_URL}img/img28.jpg`, 
    price: '280,000원', 
    description: '아카츠키의 코난과 종이 술법의 움직임을 화려한 배경 연출로 완성한 스케일 피규어입니다.' 
  },

  { 
    id: 29, 
    series: '블리치', 
    name: '걸즈 시리즈 소이퐁 | 블리치', 
    image: `${BASE_URL}img/img29.jpg`, 
    price: '280,000원', 
    description: '소이퐁의 날렵한 전투 자세와 주황색 의상 연출을 역동적으로 재현한 스케일 피규어입니다.' 
  },

  { 
    id: 30, 
    series: '은혼', 
    name: '카구라 룩업 | 은혼', 
    image: `${BASE_URL}img/img30.jpg`, 
    price: '42,000원', 
    description: '카구라의 붉은 의상과 생기 넘치는 표정을 귀엽게 표현한 룩업 피규어입니다.' 
  },

  { 
    id: 31, 
    series: '은혼', 
    name: '오키타 소고 룩업 | 은혼', 
    image: `${BASE_URL}img/img31.jpg`, 
    price: '42,000원', 
    description: '오키타 소고의 진선조 제복과 장난스러운 표정을 작고 정교하게 담은 룩업 피규어입니다.' 
  },

  { 
    id: 32, 
    series: '은혼', 
    name: 'GEM Carat 사카타 긴토키 양이지사 버전 | 은혼', 
    image: `${BASE_URL}img/img32.jpg`, 
    price: '85,000원', 
    description: '목검을 든 사카타 긴토키의 여유로운 자세와 의상 주름을 섬세하게 살린 스케일 피규어입니다.' 
  },

  { 
    id: 33, 
    series: '진격의 거인', 
    name: 'GEM 테노히라 리바이 병장 | 진격의 거인', 
    image: `${BASE_URL}img/img33.jpg`, 
    price: '85,000원', 
    description: '편안히 앉아 있는 리바이의 모습을 색다른 휴식 장면으로 구성한 캐릭터 피규어입니다.' 
  },

  { 
    id: 34, 
    series: '나루토', 
    name: 'GEM 시리즈 우즈마키 나루토 닌자대전 버전 | 나루토 질풍전', 
    image: `${BASE_URL}img/img34.jpg`, 
    price: '196,000원', 
    description: '우즈마키 나루토의 돌진하는 순간과 역동적인 의상 표현을 담은 전투 피규어입니다.' 
  },

  { 
    id: 35, 
    series: '진격의 거인', 
    name: '리바이 청소 버전 룩업 | 진격의 거인', 
    image: `${BASE_URL}img/img35.jpg`, 
    price: '44,000원', 
    description: '찻잔 곁에 앉은 리바이의 차분한 모습을 귀여운 비율로 표현한 미니 피규어입니다.' 
  },

  { 
    id: 36, 
    series: '진격의 거인', 
    name: '한지 조에 룩업 | 진격의 거인', 
    image: `${BASE_URL}img/img36.jpg`, 
    price: '44,000원', 
    description: '한지 조에의 안경과 조사병단 분위기를 작고 선명하게 표현한 룩업 피규어입니다.' 
  },

  { 
    id: 37, 
    series: '진격의 거인', 
    name: '엘빈 스미스 룩업 | 진격의 거인', 
    image: `${BASE_URL}img/img37.jpg`, 
    price: '44,000원', 
    description: '엘빈 스미스의 금발과 단단한 인상을 귀여운 룩업 스타일로 재해석한 피규어입니다.' 
  },

  { 
    id: 38, 
    series: '귀멸의 칼날', 
    name: '하쿠지 룩업 | 귀멸의 칼날', 
    image: `${BASE_URL}img/img38.jpg`, 
    price: '44,000원', 
    description: '인간 시절 하쿠지의 푸른 눈과 단정한 옷차림을 부드러운 색감으로 표현한 룩업 피규어입니다.' 
  },

  { 
    id: 39, 
    series: '귀멸의 칼날', 
    name: '코유키 룩업 | 귀멸의 칼날', 
    image: `${BASE_URL}img/img39.jpg`, 
    price: '44,000원', 
    description: '코유키의 연한 하늘색 유카타와 꽃 장식, 온화한 표정을 담은 룩업 피규어입니다.' 
  },

  { 
    id: 40, 
    series: '귀멸의 칼날', 
    name: '코쵸 시노부 룩업 | 귀멸의 칼날', 
    image: `${BASE_URL}img/img40.jpg`, 
    price: '40,000원', 
    description: '코쵸 시노부의 나비 장식과 보랏빛 색감을 귀엽고 섬세하게 담은 룩업 피규어입니다.' 
  },

  { 
    id: 41, 
    series: '귀멸의 칼날', 
    name: '도우마 룩업 | 귀멸의 칼날', 
    image: `${BASE_URL}img/img41.jpg`, 
    price: '44,000원', 
    description: '도우마의 백발과 무지갯빛 눈동자를 강렬한 색감으로 표현한 룩업 피규어입니다.' 
  },

  { 
    id: 42, 
    series: '귀멸의 칼날', 
    name: '우즈이 텐겐 전 음주 버전 룩업 | 귀멸의 칼날', 
    image: `${BASE_URL}img/img42.jpg`, 
    price: '50,000원', 
    description: '은퇴 후 우즈이 텐겐의 흰 머리와 안대를 전통 의상과 함께 담은 룩업 피규어입니다.' 
  },

  { 
    id: 43, 
    series: '귀멸의 칼날', 
    name: 'GEM 테노히라 토미오카 기유상 | 귀멸의 칼날', 
    image: `${BASE_URL}img/img43.jpg`, 
    price: '83,000원', 
    description: '토미오카 기유의 특징적인 하오리와 차분히 앉아 있는 모습을 재현한 좌식 피규어입니다.' 
  },

  { 
    id: 44, 
    series: '귀멸의 칼날', 
    name: 'GEM 테노히라 토키토 무이치로 | 귀멸의 칼날', 
    image: `${BASE_URL}img/img44.jpg`, 
    price: '83,000원', 
    description: '토키토 무이치로의 긴 머리와 고요한 분위기를 따뜻한 공간 연출로 담은 좌식 피규어입니다.' 
  },

  { 
    id: 45, 
    series: '귀멸의 칼날', 
    name: 'GEM 테노히라 이구로 오바나이 | 귀멸의 칼날', 
    image: `${BASE_URL}img/img45.jpg`, 
    price: '83,000원', 
    description: '이구로 오바나이의 줄무늬 하오리와 목을 감싼 뱀까지 섬세하게 표현한 좌식 피규어입니다.' 
  },

  { 
    id: 46, 
    series: '귀멸의 칼날', 
    name: 'GEM 테노히라 시나즈가와 사네미 | 귀멸의 칼날', 
    image: `${BASE_URL}img/img46.jpg`, 
    price: '83,000원', 
    description: '시나즈가와 사네미의 상처와 거친 인상을 편안한 좌식 자세로 재현한 피규어입니다.' 
  },

  { 
    id: 47, 
    series: '귀멸의 칼날', 
    name: '렌고쿠 쿄쥬로 방긋 버전 룩업 | 귀멸의 칼날', 
    image: `${BASE_URL}img/img47.jpg`, 
    price: '42,000원', 
    description: '렌고쿠 쿄쥬로의 불꽃 같은 머리와 밝은 미소를 담은 데스크용 룩업 피규어입니다.' 
  },

  { 
    id: 48, 
    series: '귀멸의 칼날', 
    name: '하시비라 이노스케 뭉 버전 룩업 | 귀멸의 칼날', 
    image: `${BASE_URL}img/img48.jpg`, 
    price: '42,000원', 
    description: '멧돼지 가면을 벗은 하시비라 이노스케의 표정과 푸른 머리 끝을 살린 미니 피규어입니다.' 
  },

  { 
    id: 49, 
    series: '귀멸의 칼날', 
    name: 'GEM 테노히라 코쵸우 시노부씨 | 귀멸의 칼날', 
    image: `${BASE_URL}img/img49.jpg`, 
    price: '83,000원', 
    description: '나비 하오리를 펼치고 앉은 코쵸 시노부의 우아한 실루엣을 표현한 좌식 피규어입니다.' 
  },

  { 
    id: 50, 
    series: '귀멸의 칼날', 
    name: '오챠토모 시리즈 귀멸의 칼날', 
    image: `${BASE_URL}img/img50.jpg`, 
    price: '54,000원', 
    description: '탄지로와 네즈코, 젠이츠, 이노스케, 기유, 시노부를 한 번에 모은 미니 피규어 세트입니다.' 
  },
]

export const filters = ['전체', '은혼', '블리치', '나루토', '주술회전', '귀멸의 칼날', '진격의 거인', '사이키 쿠스오의 재난']
