const fs = require('fs');
const XLSX = require('xlsx');

// 변환할 엑셀 파일 경로
const EXCEL_FILE = 'sevenknights.xlsx';
// 저장할 JSON 파일 이름
const OUTPUT_FILE = 'info.json';

try {
  // 1. 엑셀 파일 읽기
  const workbook = XLSX.readFile(EXCEL_FILE);

  // 2. 첫 번째 시트 가져오기
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];

  // 3. 시트 내용을 JSON으로 변환
  const jsonData = XLSX.utils.sheet_to_json(worksheet);
  const affiliations = [];
  const output = [];
  const split = (string) => {
    const isMany = (string ?? '').includes('\r\n');
    return isMany ? string.split('\r\n') : string
  }
  const getValueSafety = (array, idx) => {
    if (!Array.isArray(array)) return array;
    console.log(array, idx)
    if (array.length <= idx) return '';
    return array[idx];
  }
  jsonData.forEach(hero => {
    let affiliationIdx = affiliations.indexOf(hero.affiliation)
    if (affiliationIdx === -1) {
      affiliationIdx = affiliations.length;
      affiliations.push(hero.affiliation);
      output.push({
        affiliation: hero.affiliation,
        heros: []
      })
    }
    const gearRecommendations = [];
    const splitTitle = split(hero.title)
    const splitDescription = split(hero.description)
    const splitWeaponA = split(hero.weaponA)
    const splitWeaponB = split(hero.weaponB)
    const splitArmorA = split(hero.armorA)
    const splitArmorB = split(hero.armorB)
    const splitOption = split(hero.option)

    if (Array.isArray(splitTitle)) {
      for (let i = 0; i < splitTitle.length; i++) {
        gearRecommendations.push({
          title: getValueSafety(splitTitle, i),
          Description: getValueSafety(splitDescription, i),
          weaponA: getValueSafety(splitWeaponA, i),
          weaponB: getValueSafety(splitWeaponB, i),
          armorA: getValueSafety(splitArmorA, i),
          armorB: getValueSafety(splitArmorB, i),
          option: getValueSafety(splitOption, i),
        })
      }
    }

    output[affiliationIdx].heros.push({
      id: hero.id,
      name: hero.name,
      type: hero.type,
      tags: hero.tags?.split("\r\n"),
      gearRecommendations
    })
  })

  // 4. JSON 파일로 저장
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(output, null, 2), 'utf8');


  console.log(`✅ "${EXCEL_FILE}" 파일을 성공적으로 "${OUTPUT_FILE}"로 저장했습니다.`);
} catch (err) {
  console.error('❌ 오류 발생:', err);
}