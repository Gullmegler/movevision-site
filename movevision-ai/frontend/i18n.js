const translations = {
  en: {
    upload: "Upload file",
    welcome: "Welcome to Move Vision",
    drop_prompt: "Drag & drop file here",
  },
  no: {
    upload: "Last opp fil",
    welcome: "Velkommen til Move Vision",
    drop_prompt: "Dra og slipp fil her",
  },
};

export function t(key) {
  const lang = navigator.language.startsWith("no") ? "no" : "en";
  return translations[lang][key] || key;
}

