import { PAID_MAX_STAGE_RUNS, FREE_MAX_STAGE_RUNS } from '../constants/exp.js';
import { KEY_PRODUCTION } from '../constants/resources.js';

function calculateFarmingEfficiency(
  stage,
  numRaisedCharacters,
  hasPackage
) {
  const result = [];
  const maxStageRuns = hasPackage
    ? PAID_MAX_STAGE_RUNS[stage - 1]
    : FREE_MAX_STAGE_RUNS[stage - 1];

  let totalKeys = 0;
  let totalGames = 0;
  let totalGainedRuby = 0;
  let totalUsedRuby = 0;

  KEY_PRODUCTION.forEach(({ ruby, keys, limit }) => {
    for (let paidCount = 1; paidCount <= limit; paidCount++) {
      totalKeys += keys;
      totalGames += 10;
      totalGainedRuby = Math.floor(totalGames / maxStageRuns) * (20 * numRaisedCharacters);
      totalUsedRuby += ruby;
      result.push({
        ruby,
        paidCount,
        totalKeys,
        totalGames,
        totalGainedRuby,
        totalUsedRuby,
        result: totalGainedRuby - totalUsedRuby,
      })
    }
  })
  return result;
}


function getSummaryRows(table) {
  if (!table.length) return [];
  const summary = [];
  let lastPrice = null;
  let lastRow = null;
  let prevRow = null;
  // 가격별 마지막 행, 경계 행 추출
  for (let i = 0; i < table.length; i++) {
    const row = table[i];
    if (lastPrice !== row.ruby) {
      // 가격이 바뀌면 이전 가격의 마지막 행 저장
      if (lastRow) summary.push(lastRow);
      lastPrice = row.ruby;
    }
    // 플러스→마이너스 경계
    if (prevRow && prevRow.result >= 0 && row.result < 0) {
      summary.push(prevRow);
      summary.push(row);
    }
    lastRow = row;
    prevRow = row;
  }
  // 마지막 가격의 마지막 행 추가
  if (lastRow) summary.push(lastRow);
  // 중복 제거 (구매+가격 기준)
  const keySet = new Set();
  return summary.filter((r) => {
    const key = `${r.ruby}-${r.paidCount}`;
    if (keySet.has(key)) return false;
    keySet.add(key);
    return true;
  });
}

export { calculateFarmingEfficiency, getSummaryRows };