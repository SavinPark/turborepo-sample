export enum ResourceKeys {
  Common = "common",
  About = "about",
}

export enum Locales {
  English = "en",
  Korea = "ko",
}

// originalText의 ${0}, ${1} 형태의 심볼을 altTexts의 값으로 교체함
export const replaceTranslation = (
  originalText: string,
  altTexts: string[]
): string =>
  altTexts.reduce(
    (prev, curr, index) => prev.replace("${" + index + "}", curr),
    originalText
  );
