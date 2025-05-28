import Hero from "@/components/common/Hero";
import { Accordion, Text } from "@chakra-ui/react";
const HEROS = [
  {
    affiliation: "(구)세븐나이츠",
    heros: [
      {
        id: "fai",
        name: "파이",
        type: "공격형",
        gearRecommendations: []
      },
      {
        id: "juri",
        name: "쥬리",
        type: "마법형",
        gearRecommendations: []
      },
      {
        id: "rosie",
        name: "로지",
        type: "지원형",
        gearRecommendations: []
      }
    ]
  },
  {
    affiliation: "세븐나이츠",
    heros: [
      {
        id: "rudy",
        name: "루디",
        type: "방어형",
        tags: ["결투장(방어덱)"],
        gearRecommendations: []
      },
      {
        id: "eileene",
        name: "아일린",
        type: "만능형",
        tags: ["모험", "무한의 탑", "결투장"],
        gearRecommendations: []
      },
      {
        id: "rachel",
        name: "레이첼",
        type: "만능형",
        tags: ["무한의 탑", "성장 던전", "레이드", "결투장"],
        gearRecommendations: [
          {
            title: "성기사 (전열)",
            weaponA: "생%",
            weaponB: "약공,공%",
            armorA: "생%",
            armorB: "피감",
            option: "생%,방%,막기,공%,약공"
          },
          {
            title: "수호자 (전열)",
            weaponA: "방%",
            weaponB: "약공,공%",
            armorA: "방%",
            armorB: "피감",
            option: "생%,방%,막기,공%,약공"
          },
          {
            title: "수문장 (전열)",
            weaponA: "방%",
            weaponB: "약공,공%",
            armorA: "막기",
            armorB: "피감",
            option: "생%,방%,막기,공%,약공"
          },
          {
            title: "추적자 (후열)",
            weaponA: "약공",
            weaponB: "약공,공%",
            armorA: "공%",
            armorB: "피감",
            option: "생%,방%,막기,공%,약공"
          }
        ]
      },
      {
        id: "dellons",
        name: "델론즈",
        type: "공격형",
        tags: ["모험", "무한의 탑", "결투장"],
        gearRecommendations: [
          {
            title: "암살자"
          },
          {
            title: "추적자"
          }
        ]
      },
      {
        id: "spike",
        name: "스파이크",
        type: "만능형",
        tags: ["모험", "무한의 탑", "불의 던전", "결투장"],
        gearRecommendations: []
      },
      {
        id: "jave",
        name: "제이브",
        type: "만능형",
        tags: ["ALL"],
        gearRecommendations: [
          {
            title: "선봉장(뉴비)"
          },
          {
            title: "복수자(종결1)"
          },
          {
            title: "암살자(종결2)"
          }
        ]
      },
      {
        id: "kris",
        name: "크리스",
        type: "만능형",
        tags: ["무한의 탑", "PVP"],
        gearRecommendations: [
          {
            title: "성기사 (PVE)"
          },
          {
            title: "수호자 (PVE) "
          },
          {
            title: "수문장 (PVE)"
          },
          {
            title: "주술사 (결투장)"
          }
        ]
      },
      {
        id: "vanessa",
        name: "바네사",
        type: "마법형",
        tags: ["모험", "무한의 탑", "성장 던전", "레이드", "결투장", "공성전"],
        gearRecommendations: [
          {
            title: "성기사 (생존)"
          },
          {
            title: "수호자 (생존)"
          },
          {
            title: "수문장 (생존)"
          },
          {
            title: " (서브딜러)"
          }
        ]
      }
    ]
  },
  {
    affiliation: "사황",
    heros: [
      {
        id: "ace",
        name: "에이스",
        type: "만능형",
        tags: ["모험", "무한의 탑", "성장 던전", "레이드", "결투장", "공성전"],
        gearRecommendations: [
          {
            title: "성기사 (생존)"
          },
          {
            title: "수호자 (생존)"
          },
          {
            title: "수문장 (생존)"
          },
          {
            title: "선봉장 (서브딜러)"
          }
        ]
      }
    ]
  },
  {
    affiliation: "???",
    heros: [
      {
        id: "silvesta",
        name: "실베스타",
        type: "마법형",
        tags: ["결투장", "14 - 2 쫄작", "공성전(포디나의 성)"],
        gearRecommendations: []
      }
    ]
  },
  {
    affiliation: "전설(공격)",
    heros: [
      {
        name: "세인",
        type: "공격형",
        tags: ["보스전(파멸의 눈동자)", "공성전(지옥의 성)"],
        gearRecommendations: [
          {
            title: "복수자(1티어)"
          },
          {
            title: "암살자(2티어)"
          },
          {
            title: "선봉장(3티어)"
          }
        ]
      },
      {
        name: "비담",
        type: "공격형",
        tags: ["암흑 던전", "공성전(물리 딜러)"],
        gearRecommendations: []
      },
      {
        name: "발리스타",
        type: "공격형",
        tags: ["공성전(물리 딜러)"],
        gearRecommendations: []
      }
    ]
  },
  {
    affiliation: "전설(마법)",
    heros: [
      {
        id: "velika",
        name: "벨리카",
        type: "마법형",
        gearRecommendations: [
          {
            title: "암살자 (1티어)"
          },
          {
            title: "선봉장 (2티어)"
          }
        ]
      },
      {
        name: "에스파다",
        type: "마법형",
        tags: ["레이드(우마왕)"],
        gearRecommendations: [
          {
            title: "복수자(1티어)"
          },
          {
            title: "암살자(2티어)"
          },
          {
            title: "선봉장(3티어)"
          }
        ]
      },
      {
        name: "루리",
        type: "마법형",
        tags: ["공성전(마법 딜러)"],
        gearRecommendations: []
      },
      {
        name: "유신",
        type: "마법형",
        tags: ["모험"],
        gearRecommendations: []
      },
      {
        name: "파스칼",
        type: "마법형",
        tags: ["레이드(강철의 포식자)", "공성전(지옥의 성)"],
        gearRecommendations: [
          {
            title: "복수자(1티어)"
          },
          {
            title: "암살자(2티어)"
          },
          {
            title: "선봉장(3티어)"
          }
        ]
      }
    ]
  },
  {
    affiliation: "전설(방어)",
    heros: [
      {
        name: "룩",
        type: "방어형",
        tags: ["결투장"],
        gearRecommendations: []
      },
      {
        name: "아라곤",
        type: "방어형",
        gearRecommendations: []
      },
      {
        name: "녹스",
        type: "방어형",
        gearRecommendations: []
      }
    ]
  },
  {
    affiliation: "전설(지원)",
    heros: [
      {
        name: "엘리스",
        type: "지원형",
        tags: ["공성전"],
        gearRecommendations: []
      },
      {
        name: "리나",
        type: "지원형",
        tags: ["모험", "무한의 탑", "성장 던전", "레이드", "결투장", "공성전"],
        gearRecommendations: []
      }
    ]
  },
  {
    affiliation: "전설(만능)",
    heros: [
      {
        name: "챈슬러",
        type: "만능형",
        gearRecommendations: []
      },
      {
        name: "니아",
        type: "만능형",
        tags: ["공성전(포디나의 성)"],
        gearRecommendations: []
      },
      {
        name: "지크",
        type: "만능형",
        tags: ["공성전(수호자의 성)"],
        gearRecommendations: []
      }
    ]
  },
  {
    affiliation: "희귀(공격)",
    heros: [
      {
        id: "jupy",
        name: "쥬피",
        type: "공격형",
        tags: ["보스전(파멸의 눈동자)"],
        gearRecommendations: []
      },
      {
        id: "snipper",
        name: "스니퍼",
        type: "공격형",
        tags: ["보스전(우마왕)"],
        gearRecommendations: [
          {
            title: "복수자 (1티어)"
          },
          {
            title: "선봉장 (2티어)"
          }
        ]
      },
      {
        id: "heavenia",
        name: "헤브니아",
        type: "공격형",
        tags: ["불의 던전"],
        gearRecommendations: [
          {
            title: "성기사 (체력)"
          },
          {
            title: "수호자 (방어)"
          },
          {
            title: "수문장 (막기)"
          }
        ]
      },
      {
        name: "메이",
        type: "공격형",
        tags: ["공성전(고대용의 성)"],
        gearRecommendations: [
          {
            title: "성기사 (체력)"
          },
          {
            title: "수호자 (방어)"
          },
          {
            title: "수문장 (막기)"
          }
        ]
      },
      {
        name: "제인",
        type: "공격형",
        tags: ["물의 던전"],
        gearRecommendations: []
      },
      {
        name: "블랙로즈",
        type: "공격형",
        tags: ["레이드(우마왕)"],
        gearRecommendations: []
      },
      {
        name: "레오",
        type: "공격형",
        tags: ["암흑 던전", "공성전(지옥의 성)"],
        gearRecommendations: [
          {
            title: "성기사 (체력)"
          },
          {
            title: "수호자 (방어)"
          },
          {
            title: "수문장 (막기)"
          }
        ]
      },
      {
        name: "진",
        type: "공격형",
        tags: ["공성전(죽음의 성)"],
        gearRecommendations: [
          {
            title: "성기사 (체력)"
          },
          {
            title: "수호자 (방어)"
          },
          {
            title: "수문장 (막기)"
          }
        ]
      },
      {
        name: "캐티",
        type: "공격형",
        tags: ["궁극 각성 용"],
        gearRecommendations: []
      },
      {
        name: "레이",
        type: "공격형",
        tags: ["모험"],
        gearRecommendations: []
      },
      {
        name: "소이",
        type: "공격형",
        tags: ["공성전(수호자의 성)"],
        gearRecommendations: [
          {
            title: "성기사 (체력)"
          },
          {
            title: "수호자 (방어)"
          },
          {
            title: "수문장 (막기)"
          }
        ]
      },
      {
        name: "풍연",
        type: "공격형",
        tags: ["모험", "물의 던전", "공성전(물리 딜러)"],
        gearRecommendations: []
      },
      {
        name: "호킨",
        type: "공격형",
        tags: ["여포"],
        gearRecommendations: []
      }
    ]
  },
  {
    affiliation: "희귀(마법)",
    heros: [
      {
        id: "yuri",
        name: "유리",
        type: "마법형",
        tags: ["땅의 던전", "보스전(강철의 포식자)"],
        gearRecommendations: []
      },
      {
        name: "아리엘",
        type: "마법형",
        tags: ["공성전(마법 딜러)"],
        gearRecommendations: []
      },
      {
        id: "sylvia",
        name: "실비아",
        type: "마법형",
        gearRecommendations: []
      },
      {
        id: "joker",
        name: "조커",
        type: "마법형",
        tags: ["빛의 던전", "공성전(수호자의 성)"],
        gearRecommendations: [
          {
            title: "성기사 (체력)"
          },
          {
            title: "수호자 (방어)"
          },
          {
            title: "수문장 (막기)"
          }
        ]
      },
      {
        name: "노호",
        type: "마법형",
        tags: ["공성전(수호자의 성)"],
        gearRecommendations: [
          {
            title: "성기사 (체력)"
          },
          {
            title: "수호자 (방어)"
          },
          {
            title: "수문장 (막기)"
          }
        ]
      },
      {
        name: "세라",
        type: "마법형",
        tags: ["공성전(마법 딜러)"],
        gearRecommendations: []
      },
      {
        name: "베인",
        type: "마법형",
        tags: ["죽은 자들을"],
        gearRecommendations: []
      },
      {
        name: "클레오",
        type: "마법형",
        tags: ["공성전(죽음의 성)"],
        gearRecommendations: []
      }
    ]
  },
  {
    affiliation: "희귀(방어)",
    heros: [
      {
        id: "evan",
        name: "에반",
        type: "방어형",
        tags: ["모험", "성장 던전", "레이드", "결투장", "공성전(고대용의 성)"],
        gearRecommendations: []
      },
      {
        id: "li",
        name: "리",
        type: "방어형",
        tags: ["모험", "무한의 탑", "성장 던전", "공성전(죽음의 탑)"],
        gearRecommendations: []
      },
      {
        id: "hellenia",
        name: "헬레니아",
        type: "방어형",
        gearRecommendations: []
      },
      {
        name: "라쿤",
        type: "방어형",
        gearRecommendations: []
      }
    ]
  },
  {
    affiliation: "희귀(지원)",
    heros: [
      {
        id: "karin",
        name: "카린",
        type: "지원형",
        gearRecommendations: []
      },
      {
        id: "yui",
        name: "유이",
        type: "지원형",
        tags: ["모험", "무한의 탑", "성장 던전", "레이드", "공성전"],
        gearRecommendations: []
      },
      {
        id: "karon",
        name: "카론",
        type: "지원형",
        tags: ["레이드(우마왕)"],
        gearRecommendations: []
      },
      {
        id: "lucy",
        name: "루시",
        type: "지원형",
        tags: ["어둠던전", "레이드(강철의 포식자)", "공성전(불멸의 성)"],
        gearRecommendations: []
      },
      {
        name: "클로에",
        type: "지원형",
        tags: ["빛의 던전", "공성전(포디나의 성)"],
        gearRecommendations: [
          {
            title: "성기사 (체력)"
          },
          {
            title: "수호자 (방어)"
          },
          {
            title: "수문장 (막기)"
          }
        ]
      },
      {
        name: "사라",
        type: "지원형",
        tags: ["궁극 강화 전용"],
        gearRecommendations: []
      }
    ]
  },
  {
    affiliation: "희귀(만능)",
    heros: [
      {
        id: "victoria",
        name: "빅토리아",
        type: "만능형",
        tags: ["레이드(강철의 포식자)"],
        gearRecommendations: [
          {
            title: "성기사 (체력)"
          },
          {
            title: "수호자 (방어)"
          },
          {
            title: "수문장 (막기)"
          }
        ]
      },
      {
        name: "아수라",
        type: "만능형",
        tags: ["레이드(강철의 포식자)"],
        gearRecommendations: [
          {
            title: "성기사 (체력)"
          },
          {
            title: "수호자 (방어)"
          },
          {
            title: "수문장 (막기)"
          }
        ]
      },
      {
        name: "라니아",
        type: "만능형",
        tags: ["불의 던전", "물의 던전", "공성전(혹한의 성)"],
        gearRecommendations: [
          {
            title: "성기사 (체력)"
          },
          {
            title: "수호자 (방어)"
          },
          {
            title: "수문장 (막기)"
          }
        ]
      }
    ]
  }
];
export default function All() {
  return (
    <Accordion.Root multiple>
      {HEROS.map((item) => (
        <Accordion.Item key={item.affiliation} value={item.affiliation}>
          <Accordion.ItemTrigger>
            <Text>{item.affiliation}</Text>
            <Accordion.ItemIndicator />
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            {item.heros.map((hero) => (
              <Hero key={hero.id} hero={hero} />
            ))}
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
